import * as React from "react";
import { Input, List, ListItem, ListTitle } from "react-onsenui";
import CustomButton from "../components/CustomButton";
import Shell from "../utils/Shell";
import { numbersOnly } from "../utils/textFilter";

interface Props {}

interface States {
  vibrateLevel: string | undefined;
}

class Tab3 extends React.Component<Props, States> {
  input: React.RefObject<Input>;
  public constructor(props: any) {
    super(props);
    this.state = {
      vibrateLevel: "2000",
    };
    this.input = React.createRef();
  }

  public render = () => {
    return (
      <>
        <List>
          <ListTitle>Options</ListTitle>
          <ListItem>
            <div className="center">Vibrate in Seconds</div>
            <div className="right">
              <Input
                value={this.state.vibrateLevel}
                onChange={(e: any) => {
                  this.setState({ vibrateLevel: numbersOnly(e.target.value) });
                }}
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
            Shell.cmd(`cmd vibrator vibrate ${this.state.vibrateLevel}`);
          }}
        >
          Start
        </CustomButton>
        <CustomButton
          onClick={() => {
            Shell.cmd(`cmd vibrator cancel`);
          }}
        >
          Cancel
        </CustomButton>
      </>
    );
  };
}

export default Tab3;
