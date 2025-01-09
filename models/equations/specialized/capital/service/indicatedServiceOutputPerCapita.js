import { clip } from "../../../../../tools.js";
import { Aux } from "../../../aux.js";

export class IndicatedServiceOutputPerCapita extends Aux {
  constructor(policyYear) {
    super("indicatedServiceOutputPerCapita", 60);

    this.units = "dollars per person-year";
    this.dependencies = ["indicatedServiceOutputPerCapitaAfter", "indicatedServiceOutputPerCapitaBefore"];
    this.policyYear = policyYear;
    this.sequenceNumber = 40;
  }

  set indicatedServiceOutputPerCapitaAfter(value) {
    this._indicatedServiceOutputPerCapitaAfter = value;
  }

  set indicatedServiceOutputPerCapitaBefore(value) {
    this._indicatedServiceOutputPerCapitaBefore = value;
  }

  updateFn(t, dt) {
    return clip(this._indicatedServiceOutputPerCapitaAfter.k, this._indicatedServiceOutputPerCapitaBefore.k, t, this.policyYear);
  }
}
