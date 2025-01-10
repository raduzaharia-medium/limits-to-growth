import { Table } from "../../../table.js";

export class LifetimeMultiplierFromHealthServicesAfter extends Table {
  constructor() {
    super("lifetimeMultiplierFromHealthServicesAfter", 25, [1, 1.4, 1.6, 1.8, 1.95, 2.0], 0, 100, 20);

    this.dependencies = ["effectiveHealthServicesPerCapita"];
    this.sequenceNumber = 55;
  }

  set effectiveHealthServicesPerCapita(value) {
    this._effectiveHealthServicesPerCapita = value;
  }

  updateFn(t, dt) {
    return this._effectiveHealthServicesPerCapita.k;
  }
}
