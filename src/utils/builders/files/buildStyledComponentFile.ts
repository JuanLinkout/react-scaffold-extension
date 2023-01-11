import { existsSync, writeFile } from "fs"
import { getStyledComponentTemplate } from "../../../templates"
import { writeFileErrorHandler } from "../../error-handlers"

export function buildStyledComponentFile(
  componentName: string,
  targetDirectory: string
) {
  const targetPath = `${targetDirectory}/${componentName}/styles.ts`
  if (existsSync(targetPath))
    throw Error(`${componentName}.tsx already exists.`)

  return new Promise(async (resolve, reject) => {
    writeFile(targetPath, getStyledComponentTemplate(), "utf8", (error) =>
      writeFileErrorHandler(resolve, reject, error)
    )
  })
}
