import { Rate } from "../../../../rate.js";

export class LandDevelopmentRate extends Rate {
  constructor() {
    super("landDevelopmentRate", 96);

    this.units = "hectares per year";
    this.plottable = true;

    this.dependencies = ["totalAgriculturalInvestment", "fractionOfInputsAllocatedToLandDevelopment", "developmentCostPerHectare"];
  }

  set totalAgriculturalInvestment(value) {
    this._totalAgriculturalInvestment = value;
  }

  set fractionOfInputsAllocatedToLandDevelopment(value) {
    this._fractionOfInputsAllocatedToLandDevelopment = value;
  }

  set developmentCostPerHectare(value) {
    this._developmentCostPerHectare = value;
  }

  updateFn(t, dt) {
    return (this._totalAgriculturalInvestment.k * this._fractionOfInputsAllocatedToLandDevelopment.k) / this._developmentCostPerHectare.k;
  }
}
