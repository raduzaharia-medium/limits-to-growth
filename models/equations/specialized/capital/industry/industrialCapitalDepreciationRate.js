import { Rate } from "../../../rate.js";

export class IndustrialCapitalDepreciationRate extends Rate {
  constructor() {
    super("industrialCapitalDepreciationRate", 53);

    this.units = "dollars per year";
    this.plottable = true;

    this.dependencies = ["industrialCapital", "averageLifetimeOfIndustrialCapital"];
  }

  set industrialCapital(value) {
    this._industrialCapital = value;
  }

  set averageLifetimeOfIndustrialCapital(value) {
    this._averageLifetimeOfIndustrialCapital = value;
  }

  updateFn(t, dt) {
    return this._industrialCapital.k / this._averageLifetimeOfIndustrialCapital.k;
  }
}
