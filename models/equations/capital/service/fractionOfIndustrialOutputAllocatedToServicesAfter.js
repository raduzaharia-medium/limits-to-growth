import { Table } from "../../../table.js";

export class FractionOfIndustrialOutputAllocatedToServicesAfter extends Table {
  constructor() {
    super("fractionOfIndustrialOutputAllocatedToServicesAfter", 65, [0.3, 0.2, 0.1, 0.05, 0], 0, 2, 0.5);

    this.dependencies = ["serviceOutputPerCapita", "indicatedServiceOutputPerCapita"];
  }

  set serviceOutputPerCapita(value) {
    this._serviceOutputPerCapita = value;
  }

  set indicatedServiceOutputPerCapita(value) {
    this._indicatedServiceOutputPerCapita = value;
  }

  updateFn() {
    return this._serviceOutputPerCapita.k / this._indicatedServiceOutputPerCapita.k;
  }
}
