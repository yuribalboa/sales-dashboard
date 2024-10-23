/**
 *Convert Pixels to rem
 @param pixels - Pixel value to be converted
 @returns The converted value
*/

export function pxToRem(pixels: number): string {
  return `${pixels / 16}rem`
}
