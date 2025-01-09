import { Aux } from "../../../aux.js";

export class FractionOfOutputInIndustry extends Aux {
  constructor() {
    super("fractionOfOutputInIndustry", 148);

    this.dependencies = ["food", "serviceOutput", "industrialOutput"];
    this.plottable = true;
  }

  set industrialOutput(value) {
    this._industrialOutput = value;
  }

  set food(value) {
    this._food = value;
  }

  set serviceOutput(value) {
    this._serviceOutput = value;
  }

  updateFn() {
    return this._industrialOutput.k / (0.22 * this._food.k + this._serviceOutput.k + this._industrialOutput.k);
  }
}
