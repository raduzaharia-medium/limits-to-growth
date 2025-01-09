import { Aux } from "../../../aux.js";

export class PotentialJobsInIndustrialSector extends Aux {
  constructor() {
    super("potentialJobsInIndustrialSector", 74);

    this.units = "persons";
    this.dependencies = ["jobsPerIndustrialCapitalUnit"];
    this.plottable = true;
    this.sequenceNumber = 44;
  }

  set industrialCapital(value) {
    this._industrialCapital = value;
  }

  set jobsPerIndustrialCapitalUnit(value) {
    this._jobsPerIndustrialCapitalUnit = value;
  }

  updateFn() {
    return this._industrialCapital.k * this._jobsPerIndustrialCapitalUnit.k;
  }
}
