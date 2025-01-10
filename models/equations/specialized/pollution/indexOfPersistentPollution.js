import { Aux } from "../../aux.js";

export class IndexOfPersistentPollution extends Aux {
  constructor() {
    super("indexOfPersistentPollution", 143);

    this.pollutionValueIn1970 = 1.36e8; // pollution units, used in eqn 143
    this.plotColor = "#a25563";
    this.plotMin = 0;
    this.plotMax = 32;
    this.sequenceNumber = 14;
    this.dependencies = ["persistentPollution"];
  }

  set persistentPollution(value) {
    this._persistentPollution = value;
  }

  updateFn(t, dt) {
    return this._persistentPollution.k / this.pollutionValueIn1970;
  }
}