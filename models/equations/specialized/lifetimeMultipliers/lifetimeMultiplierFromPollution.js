import { Table } from "../../table.js";

export class LifetimeMultiplierFromPollution extends Table {
  constructor() {
    super("lifetimeMultiplierFromPollution", 29, [1.0, 0.99, 0.97, 0.95, 0.9, 0.85, 0.75, 0.65, 0.55, 0.4, 0.2], 0, 100, 10);

    this.dependencies = ["indexOfPersistentPollution"];
    this.plottable = true;
  }

  set indexOfPersistentPollution(value) {
    this._indexOfPersistentPollution = value;
  }

  updateFn() {
    return this._indexOfPersistentPollution.k;
  }
}
