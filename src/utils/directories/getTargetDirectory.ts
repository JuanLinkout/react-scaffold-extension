import { lstatSync } from "fs"
import { promptForTargetDirectory } from "../prompts/promptTargetDirectory"
import * as _ from "lodash"
import { Uri } from "vscode"

export async function getTargetDirectory(uri: Uri): Promise<string> {
  let targetDirectory
  if (_.isNil(_.get(uri, "fsPath")) || !lstatSync(uri.fsPath).isDirectory()) {
    targetDirectory = await promptForTargetDirectory()
    if (_.isNil(targetDirectory)) {
      throw Error("Please select a valid directory")
    }
  } else {
    targetDirectory = uri.fsPath
  }

  return targetDirectory
}
