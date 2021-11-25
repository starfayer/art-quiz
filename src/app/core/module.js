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
    Object.values(this.components).forEach(c => c.render())
    if (this.routes) this.renderRoutes();
  }

  renderRoutes() {
    this.changeRoute();
    window.addEventListener('hashchange', this.changeRoute.bind(this));
  }

  changeRoute() {
    let url = getCurrentUrl();
    console.log(this.routes)
    let route = this.routes.find(hash => {
      if (Array.isArray(hash.path))
        console.log(hash)
        if (hash.path.includes(url))
          return hash.path
      else
        hash.path.slice(1) === url
    });
    console.log(route)
    if (route) route.component.forEach(c => c.render());
  }
}