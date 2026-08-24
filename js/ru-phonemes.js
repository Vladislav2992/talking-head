
const lettersToPhonemes = {
  а: ['a'],
  б: ['b'],
  в: ['v'],
  г: ['g'],
  д: ['d'],

  е: ['e'],
  ё: ['o'],

  ж: ['zh'],
  з: ['z'],

  и: ['i'],
  й: ['y'],

  к: ['k'],
  л: ['l'],
  м: ['m'],
  н: ['n'],

  о: ['o'],
  п: ['p'],
  р: ['r'],
  с: ['s'],
  т: ['t'],
  у: ['u'],

  ф: ['f'],
  х: ['h'],

  ц: ['ts'],
  ч: ['ch'],
  ш: ['sh'],
  щ: ['shch'],

  ы: ['y'],
  э: ['e'],

  ю: ['u'],
  я: ['a'],
}

const vowels = new Set([
  'а',
  'е',
  'ё',
  'и',
  'о',
  'у',
  'ы',
  'э',
  'ю',
  'я',
])

const iotated = new Set([
  'е',
  'ё',
  'ю',
  'я',
])

const serviceLetters = new Set([
  'ь',
  'ъ',
])

const punctuation = new Set([
  ' ',
  '\t',
  '\n',
  ',',
  '.',
  '!',
  '?',
  ':',
  ';',
  '-',
  '—',
])

export function ruTextToPhonemes(text) {
  const chars = [...text.toLowerCase()]
  const result = []

  let wordStart = true
  let previousChar = ''

  for (const char of chars) {
    if (punctuation.has(char)) {
      result.push('default')
      wordStart = true
      previousChar = char
      continue
    }

    if (serviceLetters.has(char)) {
      previousChar = char
      continue
    }

    if (iotated.has(char)) {
      const afterBoundary =
        wordStart ||
        previousChar === 'ь' ||
        previousChar === 'ъ' ||
        vowels.has(previousChar)

      if (afterBoundary) {
        result.push('y')
      }

      result.push(...lettersToPhonemes[char])

      wordStart = false
      previousChar = char
      continue
    }

    const phonemes = lettersToPhonemes[char]

    if (phonemes) {
      result.push(...phonemes)
      wordStart = false
    }

    previousChar = char
  }
  return result
}