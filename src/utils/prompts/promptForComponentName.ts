import { InputBoxOptions, window } from "vscode"

export function promptForFeatureName(): Thenable<string | undefined> {
  const blocNamePromptOptions: InputBoxOptions = {
    prompt: "Feature Name",
    placeHolder: "counter",
  }
  return window.showInputBox(blocNamePromptOptions)
}
