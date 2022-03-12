import "./styles.css";

import { ContextMenu } from "./menu";

const contextMenu = new ContextMenu();

// добавляем свои модули тут через contextMenu.add(moduleName)

contextMenu.el.addEventListener("click", (ev) => {
  const { target: item } = ev;
  if (!item.dataset?.type) return;
  switch (item.dataset.type) {
    // вызываем тригер по типу, например
    // case moduleName.type:
    //   moduleName.trigger();
    //   break;
  }
  contextMenu.close();
});
