const buble = document.querySelector('.text')

export function tappingText(text, duration = 150) {
  const textArr = text.split('')
  if (!text || !textArr) return

  buble.textContent = ''

  textArr.forEach((item, index) => {
    setTimeout(() => {
      buble.textContent += item
    }, duration * index )
  })
}