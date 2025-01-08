import { Equation } from "../equation.js";

export class Level extends Equation {
  constructor(qName, qNumber, initVal, startTime) {
    super(qName, qNumber);

    this.qType = "Level";

    this.initVal = initVal || null;
    this.j = this.initVal;
    this.k = this.initVal;

    this.data = [{ x: startTime, y: this.k }];
  }

  reset(startTime) {
    this.j = this.k = this.initVal;
    this.data = [{ x: startTime, y: this.k }];
  }
}
