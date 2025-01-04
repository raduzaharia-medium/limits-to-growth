import { Equation } from "./equation.js";

export class Aux extends Equation {
  constructor(qName, qNumber) {
    super(qName, qNumber);

    this.qType = "Aux";
    this.dependencies = [];
  }
}
