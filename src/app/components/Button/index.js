import './style.scss'
import ButtonElement from './button.html';
import Component from '@/app/core/component';
import htmlToElement from '@/utils/htmlToElement';
import changeHash from '@/utils/changeHash';

class Button extends Component {
  constructor(config) {
    super(config)
  }

  events() {
    return {
      '.button click': this.clickEvent
    }
  }

  clickEvent(event) {
    event.target.style.background = '#fff';
    event.target.style.color = '#000';
    setTimeout(() => event.target.removeAttribute('style'), 1000);

    let hashSelector = event.target.parentNode.classList[1].split('--').pop();
    changeHash(hashSelector)
  }

}

const button = new Button({
  scalable: true,
  classSelector: 'button',
  template: ButtonElement
})
// const button = htmlToElement(ButtonElement);

export default button;