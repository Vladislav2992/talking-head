import { ruTextToPhonemes } from './ru-phonemes.js'
import { esTextToPhonemes } from './es-phonemes.js'

const languages = {
  ru: ruTextToPhonemes,
  es: esTextToPhonemes,
}

export function textToPhonemes(str, lang) {
  const processor = languages[lang]

  if (!processor) {
    throw new Error(`Unsupported language: ${lang}`)
  }

  return processor(str)
}

export const phonemesToViseme = {
  a: 'open',
  o: 'round',
  e: 'round',
  i: 'wide',
  y: 'wide',
  u: 'tube',

  p: 'close',
  b: 'close',
  m: 'close',

  f: 'teeth',
  v: 'teeth',

  n: 'tongue',
  l: 'tongue',

  t: 'close',
  d: 'close',
  k: 'close',
  g: 'close',
  h: 'close',
  s: 'close',
  z: 'close',
  r: 'close',
  ts: 'close',
  ch: 'tube',
  sh: 'tube',
  zh: 'tube',
  shch: 'tube',
}