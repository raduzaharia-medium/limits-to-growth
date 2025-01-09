import { Rate } from "../../../rate.js";

export class IndustrialCapitalInvestmentRate extends Rate {
  constructor() {
    super("industrialCapitalInvestmentRate", 55);

    this.units = "dollars per year";
    this.plottable = true;
  }

  set industrialOutput(value) {
    this._industrialOutput = value;
  }

  set fractionOfIndustrialOutputAllocatedToIndustry(value) {
    this._fractionOfIndustrialOutputAllocatedToIndustry = value;
  }

  updateFn() {
    return this._industrialOutput.k * this._fractionOfIndustrialOutputAllocatedToIndustry.k;
  }
}
