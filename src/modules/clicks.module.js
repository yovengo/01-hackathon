import { Module } from '../core/module'

export class ClicksModule extends Module {
  constructor() {
    super('clicks', 'Считать клики за 3 секунды')
    this.clickBlock = document.createElement('div')
  }

  trigger() {
    const clickBlockTitle = document.createElement('h1')
    clickBlockTitle.style.textAlign = 'center'

    let timeRemains = 3
    let clicksCount = -1

    clickBlockTitle.innerHTML = `Кликайте по экрану<br>Оставшееся время: 3 секунд(ы)`
    const timeInterval = setInterval(() => {
      --timeRemains
      clickBlockTitle.innerHTML = `Кликайте по экрану<br>Оставшееся время: ${timeRemains} секунд(ы)`
      if (timeRemains === 0) {
        alert(`Вы сделали ${clicksCount} кликов!`)
        clearInterval(timeInterval)
      }
    }, 1000)

    document.body.addEventListener('click', (event) => {
      if (event) {
        clicksCount += 1
      }
    })

    setTimeout(() => {
      clickBlockTitle.remove()
      this.clickBlock.remove()
    }, 3000)

    this.clickBlock.append(clickBlockTitle)
    document.body.append(this.clickBlock)
  }
}
