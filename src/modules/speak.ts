import { visemes, type IVisemeAnimation } from './visemes'
import { textToPhonemes, phonemesToViseme } from './text-to-phonemes'
import { tappingText } from './taping-text'
import type { TLanguageCode } from './text-to-phonemes'

const mouth = document.querySelector<HTMLElement>('.mouth')
const defaultMouthRound = mouth
  ? getComputedStyle(mouth)?.getPropertyValue('--round')
  : '50%'

export interface IViseme {
  name: string
  duration: number
}

export function speak(str: string, duration = 150, lang: TLanguageCode = 'es') {
  if (!str) throw new Error('String is empty')

  tappingText(str, duration)
  const phonemes = textToPhonemes(str, lang)
  const visemeSequence = phonemesToVisemes(phonemes, phonemesToViseme)
  const timeline = mergeVisemes(visemeSequence, duration)
  playTimeline(timeline)
}

function phonemesToVisemes(
  phonemes: string[],
  visemes: Record<string, string>,
): string[] {
  const visemeSequence = phonemes.map(
    (phoneme) => visemes[phoneme] || 'default',
  )

  if (visemeSequence[visemeSequence.length - 1] != 'default')
    visemeSequence.push('default')

  return visemeSequence
}

function playTimeline(timeline: IViseme[]) {
  let delay = 0
  timeline.forEach(({ name, duration }) => {
    const viseme: IVisemeAnimation = visemes[name]

    setTimeout(() => {
      mouth?.style.setProperty('--scaleX', String(viseme.scaleX))
      mouth?.style.setProperty('--scaleY', String(viseme.scaleY))
      mouth?.style.setProperty(
        '--round',
        viseme.round ?? defaultMouthRound,
      )

      mouth?.classList.remove('teeth', 'tongue')

      if (viseme.subClass) {
        mouth?.classList.add(viseme.subClass)
      }
    }, delay)

    delay += duration
  })
}

function mergeVisemes(visemes: string[], duration = 150): IViseme[] {
  return visemes.reduce<IViseme[]>((result, viseme) => {
    const last = result.at(-1)

    if (last?.name === viseme) {
      last.duration += duration
    } else {
      result.push({
        name: viseme,
        duration,
      })
    }

    return result
  }, [])
}
