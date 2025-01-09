import { Delay3 } from "../../../delay.js";

export class DelayedIndustrialOutputPerCapita extends Delay3 {
  constructor(socialAdjustmentDelayK) {
    super("delayedIndustrialOutputPerCapita", 40, socialAdjustmentDelayK);

    this.units = "dollars per person-year";
    this.dependencies = ["industrialOutputPerCapita"];
    this.sequenceNumber = 31;
  }

  set industrialOutputPerCapita(value) {
    this._industrialOutputPerCapita = value;
  }

  initFn() {
    return this._industrialOutputPerCapita;
  }
}
