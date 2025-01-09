import { Table } from "../../table.js";

export class FractionOfCapitalAllocatedToObtainingResourcesBefore extends Table {
  constructor() {
    super("fractionOfCapitalAllocatedToObtainingResourcesBefore", 135, [1, 0.9, 0.7, 0.5, 0.2, 0.1, 0.05, 0.05, 0.05, 0.05, 0.05], 0, 1, 0.1);

    this.dependencies = ["nonrenewableResourceFractionRemaining"];
    this.sequenceNumber = 23;
  }

  set nonRenewableResourceFractionRemaining(value) {
    this._nonRenewableResourceFractionRemaining = value;
  }

  updateFn() {
    return this._nonRenewableResourceFractionRemaining.k;
  }
}
