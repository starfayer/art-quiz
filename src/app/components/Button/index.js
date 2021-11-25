import './style.scss'
import ButtonElement from './button.html';
import Component from '@/app/core/component';
import htmlToElement from '@/utils/htmlToElement';

class Button extends Component {
  constructor(config) {
    super(config)
  }

  events() {
    return {
      '.button click': this.delayClick
    }
  }

  delayClick(event) {
    event.target.style.background = '#fff';
    event.target.style.color = '#000';
    setTimeout(() => event.target.removeAttribute('style'), 1000)
  }
}

const button = new Button({
  scalable: true,
  classSelector: 'button',
  template: ButtonElement
})
// const button = htmlToElement(ButtonElement);

export default button;