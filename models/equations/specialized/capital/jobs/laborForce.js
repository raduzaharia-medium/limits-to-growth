import { Aux } from "../../../aux.js";

export class LaborForce extends Aux {
  constructor() {
    super("laborForce", 80);

    this.units = "persons";
    this.participationFraction = 0.75; // dimensionless
    this.plottable = true;
    this.sequenceNumber = 7;
  }

  set population15To44(value) {
    this._population15To44 = value;
  }

  set population45To64(value) {
    this._population45To64 = value;
  }

  updateFn() {
    return (this._population15To44.k + this._population45To64.k) * this.participationFraction;
  }
}
