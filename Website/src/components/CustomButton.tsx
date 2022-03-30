import { getThemeProps } from "@mui/system";
import * as React from "react";
import { Button } from "react-onsenui";

interface Props {
  onClick?(e?: React.MouseEvent<HTMLElement, MouseEvent> | undefined): void;
}

interface State {}

class CustomButton extends React.Component<Props, State> {
  public render() {
    return (
      <>
        <div style={{ margin: "8px" }}>
          <Button modifier="large" onClick={this.props.onClick}>
            {this.props.children}
          </Button>
        </div>
      </>
    );
  }
}

export default CustomButton;
