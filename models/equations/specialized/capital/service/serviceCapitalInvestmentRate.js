import { Rate } from "../../../rate.js";

export class ServiceCapitalInvestmentRate extends Rate {
  constructor() {
    super("serviceCapitalInvestmentRate", 66);

    this.units = "dollars per year";
    this.plottable = true;
  }

  set industrialOutput(value) {
    this._industrialOutput = value;
  }

  set fractionOfIndustrialOutputAllocatedToServices(value) {
    this._fractionOfIndustrialOutputAllocatedToServices = value;
  }

  updateFn(t, dt) {
    return this._industrialOutput.k * this._fractionOfIndustrialOutputAllocatedToServices.k;
  }
}
