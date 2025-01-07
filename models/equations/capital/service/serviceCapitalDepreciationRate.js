import { Rate } from "../../../rate.js";

export class ServiceCapitalDepreciationRate extends Rate {
  constructor() {
    super("serviceCapitalDepreciationRate", 68);

    this.units = "dollars per year";
  }

  set serviceCapital(value) {
    this._serviceCapital = value;
  }

  set averageLifetimeOfServiceCapital(value) {
    this._averageLifetimeOfServiceCapital = value;
  }

  updateFn() {
    return this._serviceCapital.k / this._averageLifetimeOfServiceCapital.k;
  }
}
