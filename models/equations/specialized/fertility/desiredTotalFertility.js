import { Aux } from "../../aux.js";

export class DesiredTotalFertility extends Aux {
  constructor() {
    super("desiredTotalFertility", 35);

    this.dependencies = ["desiredCompletedFamilySize", "compensatoryMultiplierFromPerceivedLifeExpectancy"];
    this.sequenceNumber = 94;
  }

  set desiredCompletedFamilySize(value) {
    this._desiredCompletedFamilySize = value;
  }

  set compensatoryMultiplierFromPerceivedLifeExpectancy(value) {
    this._compensatoryMultiplierFromPerceivedLifeExpectancy = value;
  }

  updateFn() {
    return this._desiredCompletedFamilySize.k * this._compensatoryMultiplierFromPerceivedLifeExpectancy.k;
  }
}
