import { isNil } from 'lodash-es'

const NUM_RE = /^\d+(\.\d+)?$/

export function toNumber(val?: string | number): number | null {
  if (isNil(val)) return null
  if (typeof val === 'number') return val
  if (typeof val === 'string') {
    return isNumeric(val) ? Number(val) : null
  }
  return null
}

export function isNumeric(val: string | number): boolean {
  return typeof val === 'number' || NUM_RE.test(val)
}
