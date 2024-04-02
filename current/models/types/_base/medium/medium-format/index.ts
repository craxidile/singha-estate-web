export default interface MediumFormat {
  ext: string,
  url: string,
  hash: string,
  mime: string,
  name: string,
  path: string | null,
  size: number,
  width: number | null,
  height: number | null,
  sizeInBytes: number
}
