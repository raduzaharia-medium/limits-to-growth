import { clip } from "../../../tools.js";
import { Aux } from "../../aux.js";

export class LifetimeMultiplierFromHealthServices extends Aux {
  constructor() {
    super("lifetimeMultiplierFromHealthServices", 23);

    this.dependencies = ["lifetimeMultiplierFromHealthServicesBefore", "lifetimeMultiplierFromHealthServicesAfter"];
    this.policyYear = 1940;
  }

  set lifetimeMultiplierFromHealthServicesBefore(value) {
    this._lifetimeMultiplierFromHealthServicesBefore = value;
  }

  set lifetimeMultiplierFromHealthServicesAfter(value) {
    this._lifetimeMultiplierFromHealthServicesAfter = value;
  }

  set t(value) {
    this._t = value;
  }

  updateFn() {
    return clip(this._lifetimeMultiplierFromHealthServicesAfter.k, this._lifetimeMultiplierFromHealthServicesBefore.k, this._t, this.policyYear);
  }
}
