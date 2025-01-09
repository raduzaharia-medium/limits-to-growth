import { Aux } from "../../../aux.js";

export class Food extends Aux {
  constructor() {
    super("food", 87);

    this.units = "kilograms per year";
    this.dependencies = ["landYield"];
    this.landFractionHarvestedK = 0.7; // dimensionless
    this.processingLossK = 0.1; // dimensionless
    this.plottable = true;
  }

  set landYield(value) {
    this._landYield = value;
  }

  set arableLand(value) {
    this._arableLand = value;
  }

  updateFn() {
    return this._landYield.k * this._arableLand.k * this.landFractionHarvestedK * (1 - this.processingLossK);
  }
}
