import * as React from "react";
import { Card, Col, Input, List, ListItem, ListTitle, Row } from "react-onsenui";
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
        <Card>
          <strong>NOTE:</strong> This service works not on all platforms!{"\n"}
          The app uses the native CMD bin from the superuser
        </Card>
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
        <Row>
          <Col>
            <CustomButton
              onClick={() => {
                Shell.cmd(`cmd vibrator vibrate ${this.state.vibrateLevel}`);
              }}
            >
              Start
            </CustomButton>
          </Col>
          <Col>
            <CustomButton
              onClick={() => {
                Shell.cmd(`cmd vibrator cancel`);
              }}
            >
              Cancel
            </CustomButton>
          </Col>
        </Row>
      </>
    );
  };
}

export default Tab3;
