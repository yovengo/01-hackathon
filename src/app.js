import "./styles.css";

import { ContextMenu } from "./menu";
import { ShapeModule } from "./modules/shape.module";

const contextMenu = new ContextMenu();
const shapeModule = new ShapeModule()

// добавляем свои модули тут через contextMenu.add(moduleName)
contextMenu.add(shapeModule)