import { speak } from './speak.js'
const speed = document.querySelector('#speed')
const lang = document.querySelector('#lang')
const message = document.querySelector('.message-input')
const head = document.querySelector('.head')

document.querySelector('#message').addEventListener('submit', (e) => {
  e.preventDefault()
  if (!speed || !lang || !message) return

  if (!message.value) {
    head.classList.add('misunderstanding')
    setTimeout(() => {
      head.classList.remove('misunderstanding')
    }, 2000)
    return
  }

  speak(message.value, Number(speed.value), lang.value)
})
