import { highlightTextConverter } from '@/assets/utils'

describe('highlightTextConverter', () => {
  it('should return the correct text for "alert"', () => {
    expect(highlightTextConverter('alert')).toBe('* Meta longe de fer batida')
  })

  it('should return the correct text for "success"', () => {
    expect(highlightTextConverter('success')).toBe(
      '* A meta do mes foi batida! Parabens!'
    )
  })

  it('should return the correct text for "warning"', () => {
    expect(highlightTextConverter('warning')).toBe('* Falta pouco, vamos la!')
  })

  it('should return the default for unknown input', () => {
    expect(highlightTextConverter('success')).toBe('* Sem dados no momento')
  })
})
