import { Aux } from "../../../aux.js";

export class FractionOfOutputInServices extends Aux {
  constructor() {
    super("fractionOfOutputInServices", 149);

    this.dependencies = ["food", "serviceOutput", "industrialOutput"];
    this.plottable = true;
  }

  set serviceOutput(value) {
    this._serviceOutput = value;
  }

  set food(value) {
    this._food = value;
  }

  set industrialOutput(value) {
    this._industrialOutput = value;
  }

  updateFn() {
    return this._serviceOutput.k / (0.22 * this._food.k + this._serviceOutput.k + this._industrialOutput.k);
  }
}
