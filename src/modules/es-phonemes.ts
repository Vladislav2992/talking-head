const lettersToPhonemes: Record<string, string[]> = {
  a: ['a'],
  b: ['b'],
  c: ['k'],
  d: ['d'],
  e: ['e'],
  f: ['f'],
  g: ['g'],
  h: [],
  i: ['i'],
  j: ['h'],
  k: ['k'],
  l: ['l'],
  m: ['m'],
  n: ['n'],
  ñ: ['n'],
  o: ['o'],
  p: ['p'],
  q: ['k'],
  r: ['r'],
  s: ['s'],
  t: ['t'],
  u: ['u'],
  v: ['b'],
  w: ['w'],
  x: ['x'],
  y: ['y'],
  z: ['s'],
}

export function esTextToPhonemes(text: string) {
  const chars = [...normalizeSpanishText(text)]
  const result = []

  let i = 0

  while (i < chars.length) {
    const char = chars[i]
    const next = chars[i + 1]
    const nextNext = chars[i + 2]

    if (/\s/.test(char) || /[,.!?;:¿¡-]/.test(char)) {
      result.push('default')
      i++
      continue
    }

    if (char === 'c' && next === 'h') {
      result.push('ch')
      i += 2
      continue
    }

    if (char === 'q' && next === 'u') {
      result.push('k')
      i += 2
      continue
    }

    if (
      char === 'g' &&
      next === 'u' &&
      (nextNext === 'e' || nextNext === 'i')
    ) {
      result.push('g')
      i += 2
      continue
    }

    if (char === 'c' && (next === 'e' || next === 'i')) {
      result.push('s')
      i++
      continue
    }

    if (char === 'c') {
      result.push('k')
      i++
      continue
    }

    if (char === 'g' && (next === 'e' || next === 'i')) {
      result.push('h')
      i++
      continue
    }

    if (char === 'h') {
      i++
      continue
    }

    if (char === 'v') {
      result.push('b')
      i++
      continue
    }

    if (char === 'z') {
      result.push('s')
      i++
      continue
    }

    if (char === 'q') {
      result.push('k')
      i++
      continue
    }

    if (char === 'x') {
      result.push('x')
      i++
      continue
    }

    if (lettersToPhonemes[char]) {
      result.push(...lettersToPhonemes[char])
    }

    i++
  }

  return result
}

function normalizeSpanishText(text: string) {
  return text
    .toLowerCase()
    .replaceAll('á', 'a')
    .replaceAll('é', 'e')
    .replaceAll('í', 'i')
    .replaceAll('ó', 'o')
    .replaceAll('ú', 'u')
}
