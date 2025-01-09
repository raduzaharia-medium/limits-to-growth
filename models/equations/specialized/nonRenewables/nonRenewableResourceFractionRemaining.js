import { Aux } from "../../aux.js";

export class NonRenewableResourceFractionRemaining extends Aux {
  constructor(nonRenewableResourcesInitialK) {
    super("nonrenewableResourceFractionRemaining", 133);

    this.plotColor = "#b0875e";
    this.plotMin = 0.0;
    this.plotMax = 1.0;
    this.nonRenewableResourcesInitialK = nonRenewableResourcesInitialK;
    this.sequenceNumber = 12;
  }

  set nonRenewableResources(value) {
    this._nonRenewableResources = value;
  }

  updateFn(t, dt) {
    return this._nonRenewableResources.k / this.nonRenewableResourcesInitialK;
  }
}
