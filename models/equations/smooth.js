import { Aux } from "./aux.js";

export class Smooth extends Aux {
  constructor(qName, qNumber, delay) {
    super(qName, qNumber);

    this.del = delay;
    this.firstCall = true;
    this.qType = "Aux";
  }

  init() {
    this.theInput = this.initFn();
    this.j = this.k = this.theInput.k || this.initVal;
  }

  warmup() {
    this.theInput = this.initFn();
    this.j = this.k = this.theInput.k || this.initVal;
  }

  reset() {
    this.firstCall = true;
    this.j = this.k = this.null;
  }

  update(t, dt) {
    if (this.firstCall) {
      this.j = this.k = this.theInput.k || this.initVal;
      this.firstCall = false;

      return this.k;
    } else {
      this.k = this.j + (dt * (this.theInput.j - this.j)) / this.del;
      return this.k;
    }
  }
}
