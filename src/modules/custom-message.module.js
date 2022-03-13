import { Module } from '../core/module'
import { getRandomColor } from '../utils'

export class CustomMessage extends Module {
  constructor() {
    super('customMessage', 'Вызвать сообщение')
    this.messageBlock = document.createElement('div')
  }
  trigger() {
    this.element = document.querySelector(
      '.menu-item[data-type="customMessage"]'
    )

    this.messageBlock.textContent = 'Hello from team 24!'
    this.messageBlock.style.position = 'fixed'
    this.messageBlock.style.top = 0
    this.messageBlock.style.right = 0
    this.messageBlock.style.fontSize = '1.5rem'
    this.messageBlock.style.padding = '10px'
    this.messageBlock.style.fontWeight = 'bold'
    this.messageBlock.style.borderBottomLeftRadius = '15px'
    this.messageBlock.style.backgroundColor = getRandomColor()
    document.body.append(this.messageBlock)
    setTimeout(() => {
      this.messageBlock.remove()
    }, 1000)
  }
}
