import './style.scss';
import HomeElement from './home.html';
import button from '../Button';
import Component from '@/app/core/component';
import changeHash from '@/utils/changeHash';

class Main extends Component {
  constructor(config) {
    super(config)
  }

  external() {
    return {
      '.home__button--artists': [button, artistBtn],
      '.home__button--pictures': [button, pictureBtn],
    }
  }

  // events() {
  //   return {
  //     '.home__button click': this.delayClick,
  //     '.home__button click': this.changeHash
  //   }
  // }

  delayClick(event) {
    event.target.style.background = '#fff';
    event.target.style.color = '#000';
    setTimeout(() => event.target.removeAttribute('style'), 1000)
  }

  changeHash(event) {
    let hashSelector = event.target.parentNode.classList[1].split('--').pop();
    changeHash(hashSelector)
  }
}

const artistBtn = 'Artist Quiz';
const pictureBtn = 'Pictures Quiz';

let home = new Main({
  classSelector: 'main-wrapper',
  template: HomeElement,
})

export default home;