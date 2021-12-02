import './style.scss';
import Component from '@/app/core/component';
import SettingsElement from './settings.html';
import button from '../Button';


// const settingsButton = document.querySelector('.settings__link');

function openSettings() {

}

// settingsButton.addEventListener('click', openSettings);


class Settings extends Component {
  constructor(config) {
    super(config)
  }

  events() {
    return {
      '.settings__open-close-btn click': this.openSettings,
      '.settings__header-btn click': this.openSettings,
      '.settings__header-text click': this.openSettings,
      '.settings__slider change': this.changeVolume
    }
  }

  openSettings(event) {
    if (!(event.target.classList.contains('settings__header-text'))) {
      event.target.classList.add('animated');
      setTimeout(() => event.target.classList.remove('animated'), 2000);
    }
    // Have access to this.el because of inheritance
    document.querySelector('.settings-wrapper').classList.toggle('hidden');
    document.querySelector('.settings-wrapper').nextElementSibling.classList.toggle('opacity');
  }

  changeVolume(event) { 
    let value = event.target.value;
    event.target.style.backgroundImage = `linear-gradient(to right, #FFBCA2 0%, #FFBCA2 0%, #FFBCA2 ${value}%, #A4A4A4 0%, #A4A4A4 0%,#A4A4A4 ${event.target.max - value}%)`;
  }

  external() {
    return {
      '.settings__config-button--default': [button, defaultBtn],
      '.settings__config-button--save': [button, saveBtn],
    }
  }
}

const defaultBtn = 'Default';
const saveBtn = 'Save';

const settings = new Settings({
  classSelector: 'settings-wrapper',
  template: SettingsElement
})
export default settings;
