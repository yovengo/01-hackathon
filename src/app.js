import './styles.css'

import { ContextMenu } from './menu'
import { ShapeModule } from './modules/shape.module'
import { RandomSound } from '@/modules/random-sound.module'
import { CustomMessage } from './modules/customMessage.module'

const contextMenu = new ContextMenu()
const shapeModule = new ShapeModule()
const randomSound = new RandomSound()
const customMessage = new CustomMessage()

// добавляем свои модули тут через contextMenu.add(moduleName)
contextMenu.add(shapeModule)
contextMenu.add(randomSound)
contextMenu.add(customMessage)
