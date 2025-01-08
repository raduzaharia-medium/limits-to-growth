import { Aux } from "../../../aux.js";

export class LaborUtilizationFraction extends Aux {
  constructor() {
    super("laborUtilizationFraction", 81);

    this.dependencies = ["jobs", "laborForce"];
  }

  set jobs(value) {
    this._jobs = value;
  }

  set laborForce(value) {
    this._laborForce = value;
  }

  updateFn() {
    return this._jobs.k / this._laborForce.k;
  }
}
