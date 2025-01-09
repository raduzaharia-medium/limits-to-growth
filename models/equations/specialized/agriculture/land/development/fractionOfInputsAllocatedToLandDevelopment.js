import { Table } from "../../../../table.js";

export class FractionOfInputsAllocatedToLandDevelopment extends Table {
  constructor() {
    super("fractionOfInputsAllocatedToLandDevelopment", 108, [0, 0.05, 0.15, 0.3, 0.5, 0.7, 0.85, 0.95, 1], 0, 2, 0.25);

    this.dependencies = ["marginalProductivityOfLandDevelopment", "marginalProductivityOfAgriculturalInputs"];
    this.plottable = true;
    this.sequenceNumber = 71;
  }

  set marginalProductivityOfLandDevelopment(value) {
    this._marginalProductivityOfLandDevelopment = value;
  }

  set marginalProductivityOfAgriculturalInputs(value) {
    this._marginalProductivityOfAgriculturalInputs = value;
  }

  updateFn(t, dt) {
    return this._marginalProductivityOfLandDevelopment.k / this._marginalProductivityOfAgriculturalInputs.k;
  }
}
