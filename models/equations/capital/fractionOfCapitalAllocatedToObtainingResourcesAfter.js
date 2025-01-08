import { Table } from "../../table.js";

export class FractionOfCapitalAllocatedToObtainingResourcesAfter extends Table {
  constructor() {
    super("fractionOfCapitalAllocatedToObtainingResourcesAfter", 136, [1, 0.9, 0.7, 0.5, 0.2, 0.1, 0.05, 0.05, 0.05, 0.05, 0.05], 0, 1, 0.1);

    this.dependencies = ["nonrenewableResourceFractionRemaining"];
  }

  set nonRenewableResourceFractionRemaining(value) {
    this._nonRenewableResourceFractionRemaining = value;
  }

  updateFn() {
    return this._nonRenewableResourceFractionRemaining.k;
  }
}
