import './styles.css'

import { ContextMenu } from './menu'
import { ShapeModule } from './modules/shape.module'
import { RandomSound } from '@/modules/random-sound.module'
import { CustomMessage } from './modules/custom-message.module'
import { BackgroundModule } from './modules/background.module'
import { ClicksModule } from './modules/clicks.module'
import { DontPush } from "@/modules/dont-push.module";

const contextMenu = new ContextMenu()

// Creating modules
const shapeModule = new ShapeModule()
const randomSoundModule = new RandomSound()
const customMessageModule = new CustomMessage()
const backgroundModule = new BackgroundModule()
const clicksModule = new ClicksModule()
const dontPushModule = new DontPush()

// Adding modules: contextMenu.add(moduleName)
contextMenu.add(shapeModule)
contextMenu.add(randomSoundModule)
contextMenu.add(customMessageModule)
contextMenu.add(backgroundModule)
contextMenu.add(clicksModule)
contextMenu.add(dontPushModule)
