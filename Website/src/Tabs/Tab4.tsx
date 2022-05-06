import * as React from "react";
import { Alert } from "react-bootstrap";
import { Col, Input, List, ListItem, ListTitle, Row, Select } from "react-onsenui";
import { Flashight } from "../android";
import CustomButton from "../components/CustomButton";
import { ref } from "../utils/ref";
import Shell from "../utils/Shell";
import { numbersOnly } from "../utils/textFilter";

interface Props { }

interface States {
  bangCount: string | undefined;
}

class Tab3 extends React.Component<Props, States> {
  public constructor(props: any) {
    super(props);
    this.state = {
      bangCount: "100",
    };
  }

  private delay = (time: number) => {
    return new Promise((resolve) => setTimeout(resolve, time));
  };

  private runBang = async () => {
    const { bangCount } = this.state;
    var points = new Array(Number(bangCount));
    for (var i = 0; i < Number(bangCount); i++) {
      points[i] = i + 1; //This populates the array.  +1 is necessary because arrays are 0 index based and you want to store 1-100 in it, NOT 0-99.
    }

    for (var i = 0; i < points.length; i++) {
      Flashight.on();
      Flashight.off();
      await this.delay(Number(1));
    }
  };

  public render = () => {
    return (
      <>
        <List>
          <ListTitle>BANG!</ListTitle>
          <ListItem>
            <div className="center">Flash in counts</div>
            <div className="right">
              <Input
                value={this.state.bangCount}
                onChange={(e: any) => {
                  this.setState({ bangCount: numbersOnly(e.target.value) });
                }}
                modifier="underbar"
                type="n"
                float
                placeholder="100"
              />
            </div>
          </ListItem>
        </List>

        <div>

          <CustomButton
            onClick={this.runBang}
          >
            Start
          </CustomButton>
        </div>
      </>
    );
  };
}

export default Tab3;
