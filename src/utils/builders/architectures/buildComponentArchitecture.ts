import { existsSync } from "fs"
import { createDirectory } from "../../directories"
import { buildReactComponentFile } from "../files/buildReactComponentFile"
import { buildStyledComponentFile } from "../files/buildStyledComponentFile"

export async function buildComponentArchitecture(
  componentName: string,
  targetDirectory: string
) {
  // Create the component directory
  if (!existsSync(`${targetDirectory}/${componentName}`)) {
    await createDirectory(`${targetDirectory}/${componentName}`)
  }

  // Generate code
  await buildReactComponentFile(componentName, targetDirectory)
  await buildStyledComponentFile(componentName, targetDirectory)
}
