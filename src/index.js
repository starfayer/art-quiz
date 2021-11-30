// eslint-disable-next-line import/no-unresolved
import '@/styles/style.scss';

import Module from './app/core/module';
import routes from './app/pages/routes';
import render from './app/core/render';

class AppModule extends Module {
  constructor(config) {
    super(config);
  }
}

const appModule = new AppModule({
  routes
})

render(appModule);