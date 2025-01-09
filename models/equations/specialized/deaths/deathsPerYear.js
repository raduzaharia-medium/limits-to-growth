import { Aux } from "../../aux.js";

export class DeathsPerYear extends Aux {
  constructor() {
    super("deathsPerYear", 17);

    this.units = "persons per year";
    this.sequenceNumber = 1;
    this.dependencies = ["deathsPerYear0To14", "deathsPerYear15To44", "deathsPerYear45To64", "deathsPerYear65AndOver"];
  }

  set deathsPerYear0To14(value) {
    this._deathsPerYear0To14 = value;
  }

  set deathsPerYear15To44(value) {
    this._deathsPerYear15To44 = value;
  }

  set deathsPerYear45To64(value) {
    this._deathsPerYear45To64 = value;
  }

  set deathsPerYear65AndOver(value) {
    this._deathsPerYear65AndOver = value;
  }

  updateFn(t, dt) {
    return this._deathsPerYear0To14.j + this._deathsPerYear15To44.j + this._deathsPerYear45To64.j + this._deathsPerYear65AndOver.j;
  }
}
