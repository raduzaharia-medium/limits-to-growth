import { Level } from "../../../level.js";

export class IndustrialCapital extends Level {
  constructor(startTime) {
    super("industrialCapital", 52, 2.1e11, startTime);

    this.units = "dollars";
    this.plottable = true;

    this.dependencies = ["industrialCapitalInvestmentRate", "industrialCapitalDepreciationRate"];
  }

  set industrialCapitalInvestmentRate(value) {
    this._industrialCapitalInvestmentRate = value;
  }

  set industrialCapitalDepreciationRate(value) {
    this._industrialCapitalDepreciationRate = value;
  }

  updateFn(t, dt) {
    return this.j + dt * (this._industrialCapitalInvestmentRate.j - this._industrialCapitalDepreciationRate.j);
  }
}
