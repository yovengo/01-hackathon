import "./styles.css";

import { ContextMenu } from "./menu";
import { ShapeModule } from "./modules/shape.module";
import { RandomSound } from "@/modules/random-sound.module";

const contextMenu = new ContextMenu();
const shapeModule = new ShapeModule()
const randomSound = new RandomSound()

// добавляем свои модули тут через contextMenu.add(moduleName)
contextMenu.add(shapeModule)
contextMenu.add(randomSound)