import { Menu } from "./core/menu";

export class ContextMenu extends Menu {
  constructor() {
    super(".menu");

    this.modules = [];

    document.body.addEventListener("contextmenu", (ev) => {
      ev.preventDefault();
      this.position = { x: ev.clientX, y: ev.clientY };
      this.open();
    });

    this.el.addEventListener("click", (ev) => {
      const { target: item } = ev;
      if (!item.dataset?.type) return;
      const module = this.modules.find((m) => m.type === item.dataset.type);
      module?.trigger();
      this.close();
    });
  }

  open() {
    if (!(this.el.hasChildNodes() && this.position)) return;

    this.el.style.top = `${this.position.y}px`;
    this.el.style.left = `${this.position.x}px`;
    this.el.classList.add("open");
  }

  close() {
    this.el.classList.remove("open");
  }

  add(module) {
    this.el.insertAdjacentHTML("beforeend", module.toHTML());
    this.modules.push(module);
  }
}
