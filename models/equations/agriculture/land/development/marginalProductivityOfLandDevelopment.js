import { Aux } from "../../../../aux.js";

export class MarginalProductivityOfLandDevelopment extends Aux {
  constructor() {
    super("marginalProductivityOfLandDevelopment", 109);

    this.units = "kilograms per dollar";
    this.socialDiscount = 0.07;
    this.dependencies = ["landYield", "developmentCostPerHectare"];
  }

  set landYield(value) {
    this._landYield = value;
  }

  set developmentCostPerHectare(value) {
    this._developmentCostPerHectare = value;
  }

  updateFn() {
    return this._landYield.k / (this._developmentCostPerHectare.k * this.socialDiscount);
  }
}
