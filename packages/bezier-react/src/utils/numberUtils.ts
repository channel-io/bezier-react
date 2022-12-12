export function range(start: number, end?: number, _step?: number): number[] {
  if (end === undefined) { return Array.from({ length: start }, (_, i) => i) }
  const step = _step ?? 1
  const length = step === 0 ? (end - start) : ((end - start) / step)
  return Array.from({ length }, (_, i) => start + (i * step))
}
