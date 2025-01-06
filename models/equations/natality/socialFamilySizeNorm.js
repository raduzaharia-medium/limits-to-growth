import { Table } from "../../table.js";

export class SocialFamilySizeNorm extends Table {
  constructor() {
    super("socialFamilySizeNorm", 39, [1.25, 1, 0.9, 0.8, 0.75], 0, 800, 200);

    this.dependencies = ["delayedIndustrialOutputPerCapita"];
  }

  set delayedIndustrialOutputPerCapita(value) {
    this._delayedIndustrialOutputPerCapita = value;
  }

  updateFn() {
    return this._delayedIndustrialOutputPerCapita.k;
  }
}
