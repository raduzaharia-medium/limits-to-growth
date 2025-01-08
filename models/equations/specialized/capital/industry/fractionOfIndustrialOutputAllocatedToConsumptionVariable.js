import { Table } from "../../../table.js";

export class FractionOfIndustrialOutputAllocatedToConsumptionVariable extends Table {
  constructor() {
    super("fractionOfIndustrialOutputAllocatedToConsumptionVariable", 59, [0.3, 0.32, 0.34, 0.36, 0.38, 0.43, 0.73, 0.77, 0.81, 0.82, 0.83], 0, 2, 0.2);

    this.dependencies = ["industrialOutputPerCapita"];
    this.industrialOutputPerCapitaDesired = 400;
  }

  set industrialOutputPerCapita(value) {
    this._industrialOutputPerCapita = value;
  }

  updateFn() {
    return this._industrialOutputPerCapita.k / this.industrialOutputPerCapitaDesired;
  }
}
