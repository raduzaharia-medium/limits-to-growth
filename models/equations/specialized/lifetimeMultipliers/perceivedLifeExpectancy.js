import { Delay3 } from "../../delay.js";

export class PerceivedLifeExpectancy extends Delay3 {
  constructor(lifetimePerceptionDelayK) {
    super("perceivedLifeExpectancy", 37, lifetimePerceptionDelayK);

    this.units = "years";
    this.dependencies = ["lifeExpectancy"];
    this.plottable = true;
    this.sequenceNumber = 91;
  }

  set lifeExpectancy(value) {
    this._lifeExpectancy = value;
  }

  initFn() {
    return this._lifeExpectancy;
  }
}
