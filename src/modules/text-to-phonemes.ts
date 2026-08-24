import { ruTextToPhonemes } from './ru-phonemes'
import { esTextToPhonemes } from './es-phonemes'

export const languages = {
  ru: ruTextToPhonemes,
  es: esTextToPhonemes,
}
export type TLanguageCode = keyof typeof languages

export function textToPhonemes(
  str: string,
  lang: keyof typeof languages,
): string[] {
  const processor = languages[lang]

  if (!processor) {
    throw new Error(`Unsupported language: ${lang}`)
  }

  return processor(str)
}

export const phonemesToViseme: Record<string, string> = {
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
