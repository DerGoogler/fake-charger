import * as React from "react";
import { Button, Input, List, ListItem, ListTitle } from "react-onsenui";
import CustomButton from "../components/CustomButton";
import setInputFilter from "../utils/setInputFilter";

interface Props {}

interface States {
  batteryLevel: string | undefined;
}

class Tab2 extends React.Component<Props, States> {
  input: React.RefObject<Input>;
  public constructor(props: any) {
    super(props);
    this.state = {
      batteryLevel: "100",
    };
    this.input = React.createRef();
  }

  private handleBatteryLevelChange = (e: any) => {
    this.setState({ batteryLevel: e.target.value });
  };

  public render = () => {
    return (
      <>
        <List>
          <ListTitle>Options</ListTitle>
          <ListItem>
            <div className="center">Battery Level</div>
            <div className="right">
              <Input
                value={this.state.batteryLevel}
                onChange={this.handleBatteryLevelChange}
                modifier="underbar"
                type="n"
                float
                placeholder="100"
              />
            </div>
          </ListItem>
        </List>

        <CustomButton
          onClick={() => {
            window.android.cmd(`cmd battery set level ${this.state.batteryLevel}`);
          }}
        >
          Set
        </CustomButton>
        <CustomButton
          onClick={() => {
            window.android.cmd(`cmd battery reset`);
          }}
        >
          Reset
        </CustomButton>
      </>
    );
  };
}

export default Tab2;
