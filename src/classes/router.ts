import { Constructable, Route } from "./route";

export class Router {
  static __instance: Router | null = null;

  public routes: Route[] = [];

  public history: History = window.history;

  private _currentRoute: Route | undefined;

  constructor(public _rootQuery: string = "") {
    if (Router.__instance) {
      return Router.__instance;
    }

    Router.__instance = this;
  }

  public get currentRoute() {
    return this._currentRoute;
  }

  use(pathname: string, block: Constructable, middleware?: () => void) {
    const route = new Route(
      pathname,
      block,
      {
        rootQuery: this._rootQuery,
      },
      middleware
    );
    this.routes.push(route);
    return this;
  }

  start() {
    window.onpopstate = (event: PopStateEvent) => {
      const doc = event?.currentTarget as Document;
      this._onRoute(doc.location.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    if (this._currentRoute) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;

    if (route) {
      if (route.middleware) {
        route.middleware();
      }

      route.render();
    }
  }

  go(pathname: string) {
    this.history.pushState({}, "", pathname);

    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }
}
