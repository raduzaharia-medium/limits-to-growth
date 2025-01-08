import { Aux } from "../../../aux.js";

export class PotentialJobsInAgriculturalSector extends Aux {
  constructor() {
    super("potentialJobsInAgriculturalSector", 78);

    this.units = "persons";
    this.dependencies = ["jobsPerHectare"];
  }

  set arableLand(value) {
    this._arableLand = value;
  }

  set jobsPerHectare(value) {
    this._jobsPerHectare = value;
  }

  updateFn() {
    return this._arableLand.k * this._jobsPerHectare.k;
  }
}