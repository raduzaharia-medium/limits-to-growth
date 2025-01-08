import { Table } from "../../table.js";

export class FertilityControlEffectiveness extends Table {
  constructor() {
    super("fertilityControlEffectiveness", 45, [0.75, 0.85, 0.9, 0.95, 0.98, 0.99, 1.0], 0, 3, 0.5);

    this.dependencies = ["fertilityControlFacilitiesPerCapita"];
  }

  set fertilityControlFacilitiesPerCapita(value) {
    this._fertilityControlFacilitiesPerCapita = value;
  }

  updateFn() {
    return this._fertilityControlFacilitiesPerCapita.k;
  }
}
