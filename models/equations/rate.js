import { Equation } from "../equation.js";

export class Rate extends Equation {
  constructor(qName, qNumber) {
    super(qName, qNumber);

    this.qType = "Rate";
  }
}
