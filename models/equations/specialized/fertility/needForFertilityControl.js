import { Aux } from "../../aux.js";

export class NeedForFertilityControl extends Aux {
  constructor() {
    super("needForFertilityControl", 44);

    this.dependencies = ["maxTotalFertility", "desiredTotalFertility"];
    this.plottable = true;
    this.sequenceNumber = 95;
  }

  set maxTotalFertility(value) {
    this._maxTotalFertility = value;
  }

  set desiredTotalFertility(value) {
    this._desiredTotalFertility = value;
  }

  updateFn(t, dt) {
    return this._maxTotalFertility.k / this._desiredTotalFertility.k - 1;
  }
}
