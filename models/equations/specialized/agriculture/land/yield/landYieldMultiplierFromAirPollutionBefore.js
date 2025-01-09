import { Table } from "../../../../table.js";

export class LandYieldMultiplierFromAirPollutionBefore extends Table {
  constructor() {
    super("landYieldMultiplierFromAirPollutionBefore", 106, [1, 1, 0.7, 0.4], 0, 30, 10);

    this.dependencies = ["industrialOutput"];
    this.sequenceNumber = 64;
  }

  set industrialOutput(value) {
    this._industrialOutput = value;
  }

  updateFn() {
    return this._industrialOutput.k / this._industrialOutput.valueIn1970;
  }
}
