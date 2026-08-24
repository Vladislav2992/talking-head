const buble = document.querySelector('.text')

export function tappingText(text: string, duration = 150) {
  const textArr = text.split('')
  if (!text || !textArr || !buble) return

  buble.textContent = ''

  textArr.forEach((item, index) => {
    setTimeout(() => {
      buble.textContent += item
    }, duration * index )
  })
}