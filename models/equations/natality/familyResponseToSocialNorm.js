import { Table } from "../../table.js";

export class FamilyResponseToSocialNorm extends Table {
  constructor() {
    super("familyResponseToSocialNorm", 41, [0.5, 0.6, 0.7, 0.85, 1.0], -0.2, 0.2, 0.1);

    this.dependencies = ["familyIncomeExpectation"];
  }

  set familyIncomeExpectation(value) {
    this._familyIncomeExpectation = value;
  }

  updateFn() {
    return this._familyIncomeExpectation.k;
  }
}
