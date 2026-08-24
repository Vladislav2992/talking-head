import { visemes } from './visemes.js'
import { textToPhonemes, phonemesToViseme } from './text-to-phonemes.js'
import { tappingText } from './taping-text.js'
const mouth = document.querySelector('.mouth')

export function speak(str, duration = 150, lang = 'es') {  
  if (!str) throw new Error('String is empty')
  
  tappingText(str, duration)
  const phonemes = textToPhonemes(str, lang)
  const visemeSequence = phonemesToVisemes(phonemes, phonemesToViseme)  
  const timeline = mergeVisemes(visemeSequence, duration)
  playTimeline(timeline)
}


function phonemesToVisemes(phonemes, visemes) {
  const visemeSequence = phonemes.map(phoneme => visemes[phoneme] || 'default')

  if (visemeSequence[visemeSequence.length - 1] != 'default')
    visemeSequence.push('default')

  return visemeSequence
}

function playTimeline (timeline) {
  let delay = 0
  timeline.forEach(({ name, duration }) => {
    const viseme = visemes[name]

    setTimeout(() => {
      mouth.style.setProperty('--scaleX', viseme.scaleX)
      mouth.style.setProperty('--scaleY', viseme.scaleY)

      mouth.classList.remove('teeth', 'tongue')

      if (viseme.subClass) {
        mouth.classList.add(viseme.subClass)
      }
    }, delay)

    delay += duration
  })
}

function mergeVisemes(visemes, duration = 150) {
  return visemes.reduce((result, viseme) => {
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

