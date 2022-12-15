export function range(start: number, end?: number, _step?: number): number[] {
  if (end === undefined) {
    if (start < 0) { return Array.from({ length: -1 * start }, (_, i) => (i ? -1 * i : 0)) }
    return Array.from({ length: start }, (_, i) => i)
  }
  const step = _step ?? 1
  const length = step === 0 ? (end - start) : ((end - start) / step)
  return Array.from({ length }, (_, i) => start + (i * step))
}

export function clamp(target: number, boundOne: number, boundTwo?: number): number {
  if (!boundTwo) { return Math.max(target, boundOne) === boundOne ? target : boundOne }
  if (Math.min(target, boundOne) === target) { return boundOne }
  if (Math.max(target, boundTwo) === target) { return boundTwo }
  return target
}
