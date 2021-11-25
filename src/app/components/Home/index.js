import './style.scss';
import HomeElement from './home.html';
import button from '../Button';
import Component from '@/app/core/component';

class Home extends Component {
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

}

const artistBtn = 'Artist Quiz';
const pictureBtn = 'Pictures Quiz';

let home = new Home({
  classSelector: 'main-wrapper',
  template: HomeElement,
})

export default home;