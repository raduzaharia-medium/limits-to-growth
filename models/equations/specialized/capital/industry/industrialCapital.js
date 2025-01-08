import { Level } from "../../../level.js";

export class IndustrialCapital extends Level {
  constructor(startTime, dt) {
    super("industrialCapital", 52, 2.1e11, startTime);

    this.units = "dollars";
    this.dt = dt;
  }

  set industrialCapitalInvestmentRate(value) {
    this._industrialCapitalInvestmentRate = value;
  }

  set industrialCapitalDepreciationRate(value) {
    this._industrialCapitalDepreciationRate = value;
  }

  updateFn() {
    return this.j + this.dt * (this._industrialCapitalInvestmentRate.j - this._industrialCapitalDepreciationRate.j);
  }
}
