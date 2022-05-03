import * as React from "react";
import { Col, Input, List, ListItem, ListTitle, Row } from "react-onsenui";
import CustomButton from "../components/CustomButton";
import Shell from "../utils/Shell";
import Shellj from "../utils/Shell";
import { numbersOnly } from "../utils/textFilter";
import utils from "../utils/utils";
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
    this.setState({ batteryLevel: numbersOnly(e.target.value) });
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
                placeholder="Set fake battery"
              />
            </div>
          </ListItem>
        </List>
        <Row>
          <Col>
            <CustomButton
              onClick={() => {
                new Shell(`cmd battery set level ${this.state.batteryLevel}`).exec();
              }}
            >
              Set
            </CustomButton>
          </Col>
          <Col>
            <CustomButton
              onClick={() => {
                new Shell(`cmd battery reset`).exec();
              }}
            >
              Reset
            </CustomButton>
          </Col>
        </Row>
        <CustomButton
          onClick={() => {
            this.setState({ batteryLevel: numbersOnly(utils.getBatteryLevel) });
          }}
        >
          Get current level
        </CustomButton>
      </>
    );
  };
}

export default Tab2;
