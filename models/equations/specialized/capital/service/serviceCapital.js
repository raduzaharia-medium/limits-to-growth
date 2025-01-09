import { Level } from "../../../level.js";

export class ServiceCapital extends Level {
  constructor() {
    super("serviceCapital", 67, 1.44e11);

    this.units = "dollars";
    this.plottable = true;

    this.dependencies = ["serviceCapitalInvestmentRate", "serviceCapitalDepreciationRate"];
  }

  set serviceCapitalInvestmentRate(value) {
    this._serviceCapitalInvestmentRate = value;
  }

  set serviceCapitalDepreciationRate(value) {
    this._serviceCapitalDepreciationRate = value;
  }

  updateFn(t, dt) {
    return this.j + dt * (this._serviceCapitalInvestmentRate.j - this._serviceCapitalDepreciationRate.j);
  }
}
