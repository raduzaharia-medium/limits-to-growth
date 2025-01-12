import { Table } from "../../../table.js";

export class LifetimeMultiplierFromHealthServicesBefore extends Table {
  constructor() {
    super("lifetimeMultiplierFromHealthServicesBefore", 24, [1, 1.1, 1.4, 1.6, 1.7, 1.8], 0, 100, 20);

    this.dependencies = ["effectiveHealthServicesPerCapita"];
    this.sequenceNumber = 54;
  }

  set effectiveHealthServicesPerCapita(value) {
    this._effectiveHealthServicesPerCapita = value;
  }

  updateFn(t, dt) {
    return this._effectiveHealthServicesPerCapita.k;
  }
}
