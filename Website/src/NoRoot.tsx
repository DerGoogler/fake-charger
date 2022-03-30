import * as React from "react";
import { Card, Page, Toolbar } from "react-onsenui";

class NoRoot extends React.Component {
  private renderToolbar() {
    return (
      <Toolbar>
        <div className="center">No Root</div>
      </Toolbar>
    );
  }

  public render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <Card>
          <div className="title">Missing root access</div>
          <div className="content">
            Semes like you don't have root access. Check in your superuser app or root your phone
          </div>
        </Card>
      </Page>
    );
  }
}

export default NoRoot;
