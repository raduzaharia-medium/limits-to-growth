import { Aux } from "../../aux.js";

export class Population extends Aux {
  constructor() {
    super("population", 1);

    this.units = "persons";
    this.color = "#e07154";
    this.max = 1.6e10;
    this.sequenceNumber = 0;

    this.dependencies = ["population0To14", "population15To44", "population45To64", "population65AndOver"];
  }

  set population0To14(value) {
    this._population0To14 = value;
  }

  set population15To44(value) {
    this._population15To44 = value;
  }

  set population45To64(value) {
    this._population45To64 = value;
  }

  set population65AndOver(value) {
    this._population65AndOver = value;
  }

  updateFn(t, dt) {
    return this._population0To14.k + this._population15To44.k + this._population45To64.k + this._population65AndOver.k;
  }
}
