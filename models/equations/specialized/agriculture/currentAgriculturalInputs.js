import { Aux } from "../../aux.js";

export class CurrentAgriculturalInputs extends Aux {
  constructor() {
    super("currentAgriculturalInputs", 98);

    this.units = "dollars per year";
    this.dependencies = ["totalAgriculturalInvestment", "fractionOfInputsAllocatedToLandDevelopment"];
  }

  set totalAgriculturalInvestment(value) {
    this._totalAgriculturalInvestment = value;
  }

  set fractionOfInputsAllocatedToLandDevelopment(value) {
    this._fractionOfInputsAllocatedToLandDevelopment = value;
  }

  updateFn() {
    return this._totalAgriculturalInvestment.k * (1 - this._fractionOfInputsAllocatedToLandDevelopment.k);
  }
}
