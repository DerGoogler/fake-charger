import * as React from "react";
import { Input, List, ListItem, ListTitle } from "react-onsenui";
import CustomButton from "../components/CustomButton";
import cmd from "../utils/Shell";
import Shellj from "../utils/Shell";
import { numbersOnly } from "../utils/textFilter";

interface Props {}

interface States {
  maxBattery: string | undefined;
  resetDelay: string | undefined;
  delayBetween: string | undefined;
}

class Tab1 extends React.Component<Props, States> {
  public constructor(props: any) {
    super(props);
    this.state = {
      maxBattery: "100",
      resetDelay: "2000",
      delayBetween: "500",
    };
  }
  private delay = (time: number) => {
    return new Promise((resolve) => setTimeout(resolve, time));
  };

  private runFake = async () => {
    const { maxBattery, resetDelay, delayBetween } = this.state;
    var points = new Array(Number(maxBattery));
    for (var i = 0; i < Number(maxBattery); i++) {
      points[i] = i + 1; //This populates the array.  +1 is necessary because arrays are 0 index based and you want to store 1-100 in it, NOT 0-99.
    }

    for (var i = 0; i < points.length; i++) {
      new cmd(`cmd battery set level ${points[i]}`).exec();
      await this.delay(Number(delayBetween));
    }
    this.delay(Number(resetDelay)).then(() => {
      new cmd("cmd battery reset -f").exec();
    });
  };

  public render() {
    return (
      <>
        <List>
          <ListTitle>Options</ListTitle>
          <ListItem>
            <div className="center">Max Battery</div>
            <div className="right">
              <Input
                value={this.state.maxBattery}
                onChange={(e: any) => {
                  this.setState({ maxBattery: numbersOnly(e.target.value) });
                }}
                modifier="underbar"
                float
                placeholder="Maximal Battery Charge"
              />
            </div>
          </ListItem>
          <ListItem>
            <div className="center">Reset Delay</div>
            <div className="right">
              <Input
                value={this.state.resetDelay}
                onChange={(e: any) => {
                  this.setState({ resetDelay: numbersOnly(e.target.value) });
                }}
                modifier="underbar"
                float
                placeholder="Reset after the given sec."
              />
            </div>
          </ListItem>

          <ListItem>
            <div className="center">Delay Between</div>
            <div className="right">
              <Input
                value={this.state.delayBetween}
                onChange={(e: any) => {
                  this.setState({ delayBetween: numbersOnly(e.target.value) });
                }}
                modifier="underbar"
                float
                placeholder="Delay between the charge progress"
              />
            </div>
          </ListItem>
        </List>
        <CustomButton onClick={this.runFake}>Run fake</CustomButton>
      </>
    );
  }
}

export default Tab1;
