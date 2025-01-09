import { Aux } from "../../../aux.js";

export class ServiceOutputPerCapita extends Aux {
  constructor() {
    super("serviceOutputPerCapita", 71);

    this.units = "dollars per person-year";
    this.dependencies = ["serviceOutput", "population"];
    this.sequenceNumber = 46;
  }

  set serviceOutput(value) {
    this._serviceOutput = value;
  }

  set population(value) {
    this._population = value;
  }

  updateFn() {
    return this._serviceOutput.k / this._population.k;
  }
}
