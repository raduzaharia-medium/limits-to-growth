import { Table } from "../../../table.js";

export class JobsPerHectare extends Table {
  constructor() {
    super("jobsPerHectare", 79, [2, 0.5, 0.4, 0.3, 0.27, 0.24, 0.2, 0.2], 2, 30, 4);

    this.units = "persons per hectare";
    this.dependencies = ["agriculturalInputsPerHectare"];
    this.plottable = true;
  }

  set agriculturalInputsPerHectare(value) {
    this._agriculturalInputsPerHectare = value;
  }

  updateFn() {
    return this._agriculturalInputsPerHectare.k;
  }
}
