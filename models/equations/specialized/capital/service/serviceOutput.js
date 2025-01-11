import { Aux } from "../../../aux.js";

export class ServiceOutput extends Aux {
  constructor() {
    super("serviceOutput", 70);

    this.units = "dollars per year";
    this.max = 1.0e13;
    this.dependencies = ["capitalUtilizationFraction", "serviceCapitalOutputRatio", "serviceCapital"];
    this.plottable = true;
    this.sequenceNumber = 45;
  }

  set serviceCapital(value) {
    this._serviceCapital = value;
  }

  set capitalUtilizationFraction(value) {
    this._capitalUtilizationFraction = value;
  }

  set serviceCapitalOutputRatio(value) {
    this._serviceCapitalOutputRatio = value;
  }

  updateFn(t, dt) {
    return (this._serviceCapital.k * this._capitalUtilizationFraction.k) / this._serviceCapitalOutputRatio.k;
  }
}
