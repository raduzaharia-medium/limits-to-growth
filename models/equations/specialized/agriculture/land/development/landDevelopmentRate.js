import { Rate } from "../../../../rate.js";

export class LandDevelopmentRate extends Rate {
  constructor() {
    super("landDevelopmentRate", 96);

    this.units = "hectares per year";
    this.plottable = true;
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

  updateFn() {
    return (this._totalAgriculturalInvestment.k * this._fractionOfInputsAllocatedToLandDevelopment.k) / this._developmentCostPerHectare.k;
  }
}
