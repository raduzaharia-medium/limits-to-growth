import { Aux } from "../../../aux.js";

export class IndustrialOutputPerCapita extends Aux {
  constructor() {
    super("industrialOutputPerCapita", 49);

    this.units = "dollars per person-year";
    this.dependencies = ["industrialOutput", "population"];
    this.color = "#4a6892";
    this.max = 500;
    this.sequenceNumber = 30;
  }

  set industrialOutput(value) {
    this._industrialOutput = value;
  }

  set population(value) {
    this._population = value;
  }

  updateFn = function () {
    return this._industrialOutput.k / this._population.k;
  };
}
