import { commands, ExtensionContext, Uri, window } from "vscode"
import { getTargetDirectory, isNameValid, promptForFeatureName } from "./utils"
import { buildComponentArchitecture } from "./utils/builders/architectures/buildComponentArchitecture"

export function activate(_context: ExtensionContext) {
  commands.registerCommand(
    "extension.new-generic-component",
    async (uri: Uri) => main(uri)
  )
}

export async function main(uri: Uri) {
  // Show feature prompt
  let componentName = await promptForFeatureName()

  // Abort if name is not valid
  if (!isNameValid(componentName)) {
    return window.showErrorMessage("The name must not be empty")
  }

  componentName = `${componentName}`
  let targetDirectory = ""
  try {
    targetDirectory = await getTargetDirectory(uri)
  } catch (error) {
    window.showErrorMessage((error as unknown as any).message)
  }

  try {
    await buildComponentArchitecture(`${componentName}`, targetDirectory)
    window.showInformationMessage(`Successfully Generated ${componentName}`)
  } catch (error) {
    window.showErrorMessage(
      `Error:
        ${error instanceof Error ? error.message : JSON.stringify(error)}`
    )
  }
}
