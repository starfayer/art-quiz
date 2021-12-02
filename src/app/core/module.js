import getCurrentUrl from "@/utils/getUrl";

export default class Module {
  constructor(config) {
    this.components = config.components;
    this.pages = config.pages;
    this.routes = config.routes;
  }

  renderApp() {
    console.log(this);
    this.connect();
  }

  connect() {
    // Object.values(this.components).forEach(c => c.render())
    if (this.routes) this.renderRoutes();
  }

  renderRoutes() {
    this.changeRoute();
    window.addEventListener('hashchange', this.changeRoute.bind(this));
  }

  changeRoute() {
    setTimeout(() => {
      document.querySelector('.content').childNodes.forEach(el => el.innerHTML = '')

      let url = getCurrentUrl();
      console.log(this.routes)
      let route = this.routes.find(hash => {
        if (Array.isArray(hash.path))
          return hash.path.includes(url)
        else
          return hash.path === url
      });
      if (route) route.component.forEach(c => c.render());  
    }, 500)
  }
}