import * as React from "react";
import { Alert } from "react-bootstrap";
import { Col, Input, List, ListItem, ListTitle, Row, Select } from "react-onsenui";
import CustomButton from "../components/CustomButton";
import { ref } from "../utils/ref";
import Shell from "../utils/Shell";
import { numbersOnly } from "../utils/textFilter";

interface Props {}

interface States {
  vibrateLevel: string | undefined;
  device: string;
}

class Tab3 extends React.Component<Props, States> {
  buttons: React.RefObject<HTMLDivElement>;
  public constructor(props: any) {
    super(props);
    this.state = {
      vibrateLevel: "2000",
      device: "Null",
    };
    this.buttons = React.createRef();
  }

  public componentDidUpdate = () => {
    const { device } = this.state;
    if (device !== "Null") {
      ref(this.buttons, (ref: HTMLDivElement) => {
        ref.style.display = "";
      });
    } else {
      ref(this.buttons, (ref: HTMLDivElement) => {
        ref.style.display = "none";
      });
    }
  };

  private deviceSp = (devices: { samsung(): void; aosp(): void }) => {
    const { device } = this.state;
    switch (device) {
      case "aosp":
        devices.aosp();
        break;
      case "samsung":
        devices.samsung();
        break;

      default:
        console.log("Select an devices");
        break;
    }
  };

  public render = () => {
    return (
      <>
        <Alert style={{ margin: "8px" }} variant={"warning"}>
          <strong>NOTE:</strong> Some Softwares have this CMD service otherwise named, lookup to find your named service
          (e.g. vibrator) and report it.
        </Alert>
        <List>
          <ListTitle>Vibrator</ListTitle>
          <ListItem>
            <div className="center">Select your device</div>
            <div className="right">
              <Select
                value={this.state.device}
                modifier={this.state.device}
                onChange={(event) => {
                  this.setState({ device: event.target.value });
                }}
              >
                {" "}
                <option value="Null">Null</option>
                <option value="samsung">Samsung</option>
                <option value="aosp">AOSP</option>
              </Select>
            </div>
          </ListItem>
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

        <div ref={this.buttons} style={{ display: "none" }}>
          <Row>
            <Col>
              <CustomButton
                onClick={() => {
                  this.deviceSp({
                    samsung: () => {
                      new Shell(`cmd vibrator vibrate ${this.state.vibrateLevel}`).exec();
                    },
                    aosp: () => {
                      new Shell(`cmd vibrator_manager synced oneshot ${this.state.vibrateLevel}`).exec();
                    },
                  });
                }}
              >
                Start
              </CustomButton>
            </Col>
            <Col>
              <CustomButton
                onClick={() => {
                  this.deviceSp({
                    samsung: () => {
                      new Shell(`cmd vibrator cancel`).exec();
                    },
                    aosp: () => {
                      new Shell(`cmd vibrator_manager cancel`).exec();
                    },
                  });
                }}
              >
                Cancel
              </CustomButton>
            </Col>
          </Row>
        </div>
      </>
    );
  };
}

export default Tab3;
