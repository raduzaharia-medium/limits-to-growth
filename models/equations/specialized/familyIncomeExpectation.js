import { Aux } from "../aux.js";

export class FamilyIncomeExpectation extends Aux {
  constructor() {
    super("familyIncomeExpectation", 42);

    this.dependencies = ["industrialOutputPerCapita", "averageIndustrialOutputPerCapita"];
    this.plottable = true;
    this.sequenceNumber = 34;
  }

  set industrialOutputPerCapita(value) {
    this._industrialOutputPerCapita = value;
  }

  set averageIndustrialOutputPerCapita(value) {
    this._averageIndustrialOutputPerCapita = value;
  }

  updateFn() {
    return (this._industrialOutputPerCapita.k - this._averageIndustrialOutputPerCapita.k) / this._averageIndustrialOutputPerCapita.k;
  }
}
