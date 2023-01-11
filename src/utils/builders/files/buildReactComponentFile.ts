import { existsSync, writeFile } from "fs"
import { getReactComponentTemplate } from "../../../templates"
import { writeFileErrorHandler } from "../../error-handlers/writeFileErroHandler"

export function buildReactComponentFile(
  componentName: string,
  targetDirectory: string
) {
  const targetPath = `${targetDirectory}/${componentName}/index.tsx`
  if (existsSync(targetPath))
    throw Error(`${componentName}.tsx already exists.`)

  return new Promise(async (resolve, reject) => {
    writeFile(
      targetPath,
      getReactComponentTemplate(componentName),
      "utf8",
      (error) => writeFileErrorHandler(resolve, reject, error)
    )
  })
}
