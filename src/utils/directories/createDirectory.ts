import mkdirp = require("mkdirp")

export function createDirectory(targetDirectory: string): Promise<void> {
  return new Promise((resolve, reject) => {
    mkdirp(targetDirectory, (error) => {
      if (error) {
        return reject(error)
      }
      resolve()
    })
  })
}
