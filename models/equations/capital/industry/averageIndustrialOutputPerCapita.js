import { Smooth } from "../../../smooth.js";

export class AverageIndustrialOutputPerCapita extends Smooth {
  constructor(incomeExpectationAveragingTimeK) {
    super("averageIndustrialOutputPerCapita", 43, incomeExpectationAveragingTimeK);

    this.units = "dollars per person-year";
    this.dependencies = ["industrialOutputPerCapita"];
  }

  set industrialOutputPerCapita(value) {
    this._industrialOutputPerCapita = value;
  }

  initFn() {
    return this._industrialOutputPerCapita;
  }
}
