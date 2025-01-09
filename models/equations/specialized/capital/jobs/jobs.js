import { Aux } from "../../../aux.js";

export class Jobs extends Aux {
  constructor() {
    super("jobs", 73);

    this.units = "persons";
    this.dependencies = ["potentialJobsInIndustrialSector", "potentialJobsInAgriculturalSector", "potentialJobsInServiceSector"];
    this.plottable = true;
    this.sequenceNumber = 61;
  }

  set potentialJobsInIndustrialSector(value) {
    this._potentialJobsInIndustrialSector = value;
  }

  set potentialJobsInAgriculturalSector(value) {
    this._potentialJobsInAgriculturalSector = value;
  }

  set potentialJobsInServiceSector(value) {
    this._potentialJobsInServiceSector = value;
  }

  updateFn() {
    return this._potentialJobsInIndustrialSector.k + this._potentialJobsInAgriculturalSector.k + this._potentialJobsInServiceSector.k;
  }
}
