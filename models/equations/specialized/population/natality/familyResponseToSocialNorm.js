import { Table } from "../../../table.js";

export class FamilyResponseToSocialNorm extends Table {
  constructor() {
    super("familyResponseToSocialNorm", 41, [0.5, 0.6, 0.7, 0.85, 1.0], -0.2, 0.2, 0.1);

    this.dependencies = ["familyIncomeExpectation"];
    this.plottable = true;
    this.sequenceNumber = 35;
  }

  set familyIncomeExpectation(value) {
    this._familyIncomeExpectation = value;
  }

  updateFn(t, dt) {
    return this._familyIncomeExpectation.k;
  }
}
