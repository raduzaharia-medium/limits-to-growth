import { Rate } from "../../../rate.js";

export class ServiceCapitalDepreciationRate extends Rate {
  constructor() {
    super("serviceCapitalDepreciationRate", 68);

    this.units = "dollars per year";
    this.plottable = true;

    this.dependencies = ["serviceCapital", "averageLifetimeOfServiceCapital"];
  }

  set serviceCapital(value) {
    this._serviceCapital = value;
  }

  set averageLifetimeOfServiceCapital(value) {
    this._averageLifetimeOfServiceCapital = value;
  }

  updateFn(t, dt) {
    return this._serviceCapital.k / this._averageLifetimeOfServiceCapital.k;
  }
}
