import {Menu} from './core/menu'

export class ContextMenu extends Menu {
constructor(selector) {
    super(".menu");
}
close() {
    this.el.classList.remove('open')
}
}