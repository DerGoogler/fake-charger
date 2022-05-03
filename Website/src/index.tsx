import * as React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import NoRoot from "./NoRoot";
import { PushPageProps } from "./typings/props";
import { Page, Toolbar, BackButton, RouterNavigator, RouterUtil } from "react-onsenui";

import "./styles/default.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "onsenui/css/onsenui-core.min.css";
import "./styles/components.scss";
import Shell from "./utils/Shell";

interface Props { }

interface States {
  routeConfig: any;
  currentPage: string;
}

class InitActivity extends React.Component<Props, States> {
  public constructor(props: any) {
    super(props);

    const checkRoot = (): any => {
      const appGrantedRoot = Shell.isAppGrantedRoot();
      if (appGrantedRoot == null) {
        return NoRoot;
      } else if (appGrantedRoot) {
        return App
      } else {
        return NoRoot
      }
    }

    const routeConfig = RouterUtil.init([
      {
        component: checkRoot(),
        props: {
          key: "main",
          pushPage: (...args: any) => this.pushPage.apply(null, args),
        },
      },
    ]);

    this.state = {
      routeConfig,
      currentPage: "main",
    };
  }

  public componentDidMount = () => {
    window.addEventListener("load", this.windowLoadPush);
  };

  public componentWillUnmount = () => {
    window.removeEventListener("load", this.windowLoadPush);
  };

  private windowLoadPush = () => {
    if (typeof history.pushState === "function") {
      history.pushState("jibberish", "", null);
      window.onpopstate = () => {
        history.pushState("newjibberish", "", null);
        if (this.state.currentPage === "main") {
          //window.android.close();
        } else {
          this.popPage();
        }
      };
    } else {
      var ignoreHashChange = true;
      window.onhashchange = () => {
        if (!ignoreHashChange) {
          ignoreHashChange = true;
          window.location.hash = Math.random().toString();
        } else {
          ignoreHashChange = false;
        }
      };
    }
  };

  public pushPage = (props: PushPageProps): void => {
    const route = {
      component: props.activity,
      props: {
        key: props.key,
        extras: props.extras,
        popPage: () => this.popPage(),
        pushPage: (...args: any) => this.pushPage.apply(null, args),
      },
    };

    let routeConfig = this.state.routeConfig;

    routeConfig = RouterUtil.push({
      routeConfig,
      route,
    });

    this.setState({ routeConfig });
    this.setState({ currentPage: props.key });
  };

  public popPage = (options = {}) => {
    let routeConfig = this.state.routeConfig;

    routeConfig = RouterUtil.pop({
      routeConfig,
      options: {
        ...options,
        animationOptions: {
          duration: 0.2,
          timing: "ease-in",
          animation: "fade-ios",
        },
      },
    });

    this.setState({ routeConfig });
    this.setState({ currentPage: "main" });
  };

  public onPostPush = () => {
    const routeConfig = RouterUtil.postPush(this.state.routeConfig);
    this.setState({ routeConfig });
  };

  public onPostPop = () => {
    const routeConfig = RouterUtil.postPop(this.state.routeConfig);
    this.setState({ routeConfig });
  };

  public renderPage = (route: any) => {
    const props = route.props || {};
    return <route.component {...props} />;
  };

  private renderToolbar() {
    return (
      <Toolbar>
        <div className="left">
          <BackButton />
        </div>
        <div className="center">Stateless Navigator</div>
      </Toolbar>
    );
  }

  public render() {
    return (
      <Page>
        <RouterNavigator
          swipeable={true}
          // @ts-ignore
          swipePop={(options: any) => this.popPage(options)}
          routeConfig={this.state.routeConfig}
          renderPage={this.renderPage}
          onPostPush={() => this.onPostPush()}
          onPostPop={() => this.onPostPop()}
        />
      </Page>
    );
  }
}

ReactDOM.render(<InitActivity />, document.querySelector("app"));
