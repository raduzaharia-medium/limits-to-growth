import { Smooth } from "../../../smooth.js";

export class PerceivedFoodRatio extends Smooth {
  constructor(foodShortagePerceptionDelayK) {
    super("perceivedFoodRatio", 128, foodShortagePerceptionDelayK);

    this.dependencies = ["foodRatio"];
    this.initVal = 1.0;
    this.plottable = true;
    this.sequenceNumber = 19;
  }

  set foodRatio(value) {
    this._foodRatio = value;
  }

  initFn() {
    return this._foodRatio;
  }

  //   init() {
  //     this.theInput = this.initFn;
  //     this.j = this.k = 1.0;
  //   }

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
