import { Smooth } from "../../smooth.js";

export class AgriculturalInputs extends Smooth {
  constructor(averageLifetimeOfAgriculturalInputsK) {
    super("agriculturalInputs", 99, averageLifetimeOfAgriculturalInputsK);

    this.units = "dollars per year";
    this.dependencies = ["currentAgriculturalInputs"];
    this.initVal = 5.0e9;
    this.plottable = true;
    this.sequenceNumber = 18;
  }

  set currentAgriculturalInputs(value) {
    this._currentAgriculturalInputs = value;
  }

  initFn() {
    return this._currentAgriculturalInputs;
  }

  //   update() {
  //     if (this.firstCall) {
  //       this.firstCall = false;
  //       return this.k;
  //     } else {
  //       this.k = this.j + (dt * (this.theInput.j - this.j)) / this.del;
  //       return this.k;
  //     }
  //   }
}
