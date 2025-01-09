import { Aux } from "../../aux.js";

export class NeedForFertilityControl extends Aux {
  constructor() {
    super("needForFertilityControl", 44);

    this.dependencies = ["maxTotalFertility", "desiredTotalFertility"];
    this.plottable = true;
  }

  set maxTotalFertility(value) {
    this._maxTotalFertility = value;
  }

  set desiredTotalFertility(value) {
    this._desiredTotalFertility = value;
  }

  updateFn() {
    return this._maxTotalFertility.k / this._desiredTotalFertility.k - 1;
  }
}
