export function writeFileErrorHandler(
  resolve: (value: unknown) => void,
  reject: (reason?: any) => void,
  error: any
) {
  if (error) {
    reject(error)
    return
  }
  resolve(true)
}
