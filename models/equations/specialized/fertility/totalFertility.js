import { Aux } from "../../aux.js";

export class TotalFertility extends Aux {
  constructor() {
    super("totalFertility", 32);

    this.dependencies = ["maxTotalFertility", "fertilityControlEffectiveness", "desiredTotalFertility"];
    this.plottable = true;
  }

  set maxTotalFertility(value) {
    this._maxTotalFertility = value;
  }

  set fertilityControlEffectiveness(value) {
    this._fertilityControlEffectiveness = value;
  }

  set desiredTotalFertility(value) {
    this._desiredTotalFertility = value;
  }

  updateFn() {
    return Math.min(
      this._maxTotalFertility.k,
      this._maxTotalFertility.k * (1 - this._fertilityControlEffectiveness.k) + this._desiredTotalFertility.k * this._fertilityControlEffectiveness.k
    );
  }
}
