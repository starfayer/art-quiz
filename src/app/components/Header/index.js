import './style.scss'
import Component from '@/app/core/component';
import HeaderElement from './header.html';

class Header extends Component {
  constructor(config) {
    super(config)
  }
}

const header = new Header({
  classSelector: 'header-wrapper',
  template: HeaderElement
})

export default header;