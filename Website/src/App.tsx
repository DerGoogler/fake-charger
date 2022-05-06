import * as React from "react";
import { Page, Tab, Tabbar, Toolbar } from "react-onsenui";
import Tab1 from "./Tabs/Tab1";
import Tab2 from "./Tabs/Tab2";
import Tab3 from "./Tabs/Tab3";
import Tab4 from "./Tabs/Tab4";

interface Props { }

interface States {
  index: number;
}

class MyTab extends React.Component<{ content: JSX.Element }> {
  public render() {
    return (
      <Page>
        <section>{this.props.content}</section>
      </Page>
    );
  }
}

class App extends React.Component<Props, States> {
  public constructor(props: any) {
    super(props);
    this.state = {
      index: 0,
    };
  }
  private renderToolbar() {
    return (
      <Toolbar>
        <div className="center">Fake Charger</div>
      </Toolbar>
    );
  }
  private renderTabs() {
    return [
      {
        content: <MyTab content={<Tab1 />} />,
        tab: <Tab label="Charger" />,
      },
      {
        content: <MyTab content={<Tab2 />} />,
        tab: <Tab label="Battery" />,
      },
      {
        content: <MyTab content={<Tab3 />} />,
        tab: <Tab label="Vibrator" />,
      },
      {
        content: <MyTab content={<Tab4 />} />,
        tab: <Tab label="Flashlight" />,
      },
    ];
  }

  public render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <Tabbar
          swipeable={true}
          position="auto"
          index={this.state.index}
          // @ts-ignore
          onPreChange={(event) => {
            if (event.index != this.state.index) {
              this.setState({ index: event.index });
            }
          }}
          renderTabs={this.renderTabs}
        />
      </Page>
    );
  }
}

export default App;
