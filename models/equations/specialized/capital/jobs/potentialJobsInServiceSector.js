import { Aux } from "../../../aux.js";

export class PotentialJobsInServiceSector extends Aux {
  constructor() {
    super("potentialJobsInServiceSector", 76);

    this.units = "persons";
    this.dependencies = ["jobsPerServiceCapitalUnit"];
    this.plottable = true;
    this.sequenceNumber = 51;
  }

  set serviceCapital(value) {
    this._serviceCapital = value;
  }

  set jobsPerServiceCapitalUnit(value) {
    this._jobsPerServiceCapitalUnit = value;
  }

  updateFn() {
    return this._serviceCapital.k * this._jobsPerServiceCapitalUnit.k;
  }
}
