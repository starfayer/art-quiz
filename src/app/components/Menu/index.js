import './style.scss'
import Component from '@/app/core/component';
import MenuElement from './menu.html';
import getCurrentUrl from '@/utils/getUrl';
import menuData from '@/images/initImages';

class Menu extends Component {
  constructor(config) {
    super(config)
  }

  functions() {
    this.preload();
  }

  preload() {
    let hash = getCurrentUrl();
    let selector = hash === '#artists' ? '.pictures' :
    hash === '#pictures' ? '.artists' : null;
    document.querySelector(selector).style.display = 'none';

    document.querySelector(`.${hash.slice(1)}`).childNodes.forEach(el => {
      if (el.nodeType == Node.ELEMENT_NODE) {
        let category = el.querySelector('.menu__title').textContent;
        el.querySelector('.menu__count').textContent = `${menuData.find(el => el.hash === hash)
        .data.find(el => el.category === category).score}/10`;  
      }
    })
  }
}

const menu = new Menu({
  classSelector: 'main-wrapper',
  template: MenuElement
})

export default menu;