import './assets/style/style.css'
import { speak } from './modules/speak'
import type { TLanguageCode } from './modules/text-to-phonemes'
import { languages } from './modules/text-to-phonemes'

const speed = document.querySelector<HTMLInputElement>('#speed')
const langSelect = document.querySelector<HTMLSelectElement>('#lang')
const message = document.querySelector<HTMLInputElement>('.message-input')
const head = document.querySelector('.head')

document.querySelector('#message')?.addEventListener('submit', (e) => {
  e.preventDefault()
  if (!speed || !langSelect || !message) return

  if (!message.value) {
    head?.classList.add('misunderstanding')
    setTimeout(() => {
      head?.classList.remove('misunderstanding')
    }, 2000)
    return
  }

  const language = langSelect.value
  if (language in languages) {
    const currentLang = language as TLanguageCode
    speak(message.value, Number(speed.value), currentLang)
  } else return
})
