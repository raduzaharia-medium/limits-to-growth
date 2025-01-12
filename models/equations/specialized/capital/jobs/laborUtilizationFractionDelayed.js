import { Smooth } from "../../../smooth.js";

export class LaborUtilizationFractionDelayed extends Smooth {
  constructor(laborUtilizationFractionDelayedDelayTime) {
    super("laborUtilizationFractionDelayed", 82, laborUtilizationFractionDelayedDelayTime);

    this.dependencies = ["laborUtilizationFraction"];
    this.sequenceNumber = 17;
  }

  set laborUtilizationFraction(value) {
    this._laborUtilizationFraction = value;
  }

  initFn() {
    return this._laborUtilizationFraction;
  }
}
