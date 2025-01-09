import { Table } from "../../../../table.js";

export class LandYieldMultiplierFromAirPollutionAfter extends Table {
  constructor() {
    super("landYieldMultiplierFromAirPollutionAfter", 107, [1, 1, 0.7, 0.4], 0, 30, 10);

    this.dependencies = ["industrialOutput"];
    this.sequenceNumber = 65;
  }

  set industrialOutput(value) {
    this._industrialOutput = value;
  }

  updateFn(t, dt) {
    return this._industrialOutput.k / this._industrialOutput.valueIn1970;
  }
}
