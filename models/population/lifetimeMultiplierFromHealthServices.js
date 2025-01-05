import { clip } from "../../tools.js";
import { Aux } from "../aux.js";

export class LifetimeMultiplierFromHealthServices extends Aux {
  constructor(t) {
    super("lifetimeMultiplierFromHealthServices", 23);

    this.units = "dimensionless";
    this.dependencies = ["lifetimeMultiplierFromHealthServicesBefore", "lifetimeMultiplierFromHealthServicesAfter"];
    this.policyYear = 1940;
    this.t = t;
  }

  set lifetimeMultiplierFromHealthServicesBefore(value) {
    this._lifetimeMultiplierFromHealthServicesBefore = value;
  }

  set lifetimeMultiplierFromHealthServicesAfter(value) {
    this._lifetimeMultiplierFromHealthServicesAfter = value;
  }

  updateFn() {
    return clip(this._lifetimeMultiplierFromHealthServicesAfter.k, this._lifetimeMultiplierFromHealthServicesBefore.k, this.t, this.policyYear);
  }
}
