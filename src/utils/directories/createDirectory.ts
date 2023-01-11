import mkdirp = require("mkdirp")

export async function createDirectory(
  targetDirectory: string
): Promise<string | undefined> {
  return await mkdirp(targetDirectory)
}
