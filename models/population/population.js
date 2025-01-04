import { Aux } from "../aux.js";

export class Population extends Aux {
  constructor() {
    super("population", 1);

    this.units = "persons";
    this.plotColor = "#e07154";
    this.plotMin = 0;
    this.plotMax = 1.6e10;
  }
}
