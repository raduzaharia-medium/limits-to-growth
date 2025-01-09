import { Aux } from "../../../aux.js";

export class LaborUtilizationFraction extends Aux {
  constructor() {
    super("laborUtilizationFraction", 81);

    this.dependencies = ["jobs", "laborForce"];
    this.plottable = true;
    this.sequenceNumber = 62;
  }

  set jobs(value) {
    this._jobs = value;
  }

  set laborForce(value) {
    this._laborForce = value;
  }

  updateFn(t, dt) {
    return this._jobs.k / this._laborForce.k;
  }
}
