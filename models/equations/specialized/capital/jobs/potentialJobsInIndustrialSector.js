import { Aux } from "../../../aux.js";

export class PotentialJobsInIndustrialSector extends Aux {
  constructor() {
    super("potentialJobsInIndustrialSector", 74);

    this.units = "persons";
    this.dependencies = ["jobsPerIndustrialCapitalUnit", "industrialCapital"];
    this.plottable = true;
    this.sequenceNumber = 44;
  }

  set industrialCapital(value) {
    this._industrialCapital = value;
  }

  set jobsPerIndustrialCapitalUnit(value) {
    this._jobsPerIndustrialCapitalUnit = value;
  }

  updateFn(t, dt) {
    return this._industrialCapital.k * this._jobsPerIndustrialCapitalUnit.k;
  }
}
