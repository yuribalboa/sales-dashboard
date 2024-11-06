/**
 *Converts text from highlight api
 @param text - Text to be converted
 @returns Converted text
*/

export function highlightTextConverter(text: string): string {
  switch (text) {
    case 'alert':
      return '* Meta longe de fer batida'
    case 'success':
      return '* A meta do mes foi batida! Parabens!'
    case 'warning':
      return '* Falta pouco, vamos la!'
    default:
      return '* Sem dados no momento'
  }
}
