import { Table } from "../../table.js";

export class FractionOfPopulationUrban extends Table {
  constructor() {
    super("fractionOfPopulationUrban", 26, [0, 0.2, 0.4, 0.5, 0.58, 0.65, 0.72, 0.78, 0.8], 0, 1.6e10, 2.0e9);

    this.dependencies = ["population"];
    this.plottable = true;
    this.sequenceNumber = 20;
  }

  set population(value) {
    this._population = value;
  }

  updateFn(t, dt) {
    return this._population.k;
  }
}
