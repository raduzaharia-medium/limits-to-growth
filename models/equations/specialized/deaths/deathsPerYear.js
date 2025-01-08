import { Aux } from "../../aux.js";

export class DeathsPerYear extends Aux {
  constructor() {
    super("deathsPerYear", 17);

    this.units = "persons per year";
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

  updateFn() {
    return this._deathsPerYear0To14.j + this._deathsPerYear15To44.j + this._deathsPerYear45To64.j + this._deathsPerYear65AndOver.j;
  }
}
