import { Aux } from "./aux.js";

// third-order exponential delay for Rate variables
export class Delay3 extends Aux {
  constructor(qName, qNumber, delay) {
    super(qName, qNumber);

    this.delayPerStage = delay / 3;
    this.firstCall = true;

    this.alpha = { j: null, k: null };
    this.beta = { j: null, k: null };
    this.gamma = { j: null, k: null };
  }

  init() {
    this.theInput = this.initFn();
    this.j = this.k = this.theInput.k;
    this.alpha.j = this.alpha.k = this.theInput.j;
    this.beta.j = this.beta.k = this.theInput.j;
    this.gamma.j = this.gamma.k = this.theInput.j;
  }

  reset() {
    this.firstCall = true;
    this.j = this.k = null;
    this.alpha = { j: null, k: null };
    this.beta = { j: null, k: null };
    this.gamma = { j: null, k: null };
  }

  update(t, startTime, stopTime, gLeft, gRight, gBottom, gTop, dt) {
    if (this.firstCall) {
      this.j = this.k = this.theInput.k;
      this.alpha.j = this.alpha.k = this.theInput.k;
      this.beta.j = this.beta.k = this.theInput.k;
      this.gamma.j = this.gamma.k = this.theInput.k;
      this.firstCall = false;

      return this.k;
    } else {
      this.alpha.k = this.alpha.j + (dt * (this.theInput.j - this.alpha.j)) / this.delayPerStage;
      this.beta.k = this.beta.j + (dt * (this.alpha.j - this.beta.j)) / this.delayPerStage;
      this.gamma.k = this.gamma.j + (dt * (this.beta.j - this.gamma.j)) / this.delayPerStage;
      this.alpha.j = this.alpha.k;
      this.beta.j = this.beta.k;
      this.gamma.j = this.gamma.k;
      this.k = this.gamma.k;

      return this.k;
    }
  }

  warmup() {
    this.theInput = this.initFn();
    this.j = this.k = this.theInput.k;
    this.alpha.j = this.alpha.k = this.theInput.j;
    this.beta.j = this.beta.k = this.theInput.j;
    this.gamma.j = this.gamma.k = this.theInput.j;
  }
}
