import './style.scss'
import Component from '@/app/core/component';
import MenuElement from './menu.html';

class Menu extends Component {
  constructor(config) {
    super(config)
  }
}

const menu = new Menu({
  classSelector: 'main-wrapper',
  template: MenuElement
})

export default menu;