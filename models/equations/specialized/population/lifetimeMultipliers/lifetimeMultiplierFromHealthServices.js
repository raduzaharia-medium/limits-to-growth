import { clip } from "../../../../../tools.js";
import { Aux } from "../../../aux.js";

export class LifetimeMultiplierFromHealthServices extends Aux {
  constructor() {
    super("lifetimeMultiplierFromHealthServices", 23);

    this.dependencies = ["lifetimeMultiplierFromHealthServicesBefore", "lifetimeMultiplierFromHealthServicesAfter"];
    this.policyYear = 1940;
    this.plottable = true;
    this.sequenceNumber = 56;
  }

  set lifetimeMultiplierFromHealthServicesBefore(value) {
    this._lifetimeMultiplierFromHealthServicesBefore = value;
  }

  set lifetimeMultiplierFromHealthServicesAfter(value) {
    this._lifetimeMultiplierFromHealthServicesAfter = value;
  }

  updateFn(t, dt) {
    return clip(this._lifetimeMultiplierFromHealthServicesAfter.k, this._lifetimeMultiplierFromHealthServicesBefore.k, t, this.policyYear);
  }
}
