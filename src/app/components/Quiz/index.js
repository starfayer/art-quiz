import './style.scss';
import QuizElement from './quiz.html';
import button from '../Button';
import Component from '@/app/core/component';

class Quiz extends Component {
  constructor(config) {
    super(config)
  }

  functions() {
    this.setTimer();
  }

  setTimer() {
    window.addEventListener('load', this.initTimer())
  }

  initTimer() {
    const time = document.querySelector('.timer__time');
    const slider = document.querySelector('.timer__slider');
    time.textContent = '00:10';
    const totalSeconds = time.textContent.split(':')[0]*60 + time.textContent.split(':')[1];
    const timer = setInterval(() => {
      let timeData = time.textContent.split(':');
      if ((parseInt(timeData[0]) === 0) && (parseInt(timeData[1]) === 0)) {
        clearInterval(timer);
        return
      }
    
      if (timeData[1] == '00') {
        timeData[0]--;
        timeData[1] = 59;
      } else {
        timeData[1]--;
      }

      let percent = (timeData[0]*60 + timeData[1]) / totalSeconds * 100;
      console.log(percent)
      slider.style.background = `linear-gradient(to right, #FFBCA2 ${percent}%, #A4A4A4 ${percent}%)`
      time.textContent = `${String(timeData[0]).padStart(2, '0')}:${String(timeData[1]).padStart(2, '0')}`
    }, 1000)
  }
}

let quiz = new Quiz({
  classSelector: 'main-wrapper',
  template: QuizElement,
})

export default quiz;