import { Aux } from "../../aux.js";

export class FractionOfOutputInAgriculture extends Aux {
  constructor() {
    super("fractionOfOutputInAgriculture", 147);

    this.dependencies = ["food", "serviceOutput", "industrialOutput"];
    this.plottable = true;
  }

  set food(value) {
    this._food = value;
  }

  set serviceOutput(value) {
    this._serviceOutput = value;
  }

  set industrialOutput(value) {
    this._industrialOutput = value;
  }

  updateFn() {
    return (0.22 * this._food.k) / (0.22 * this._food.k + this._serviceOutput.k + this._industrialOutput.k);
  }
}
