import { Level } from "../level.js";

export class Population45To64 extends Level {
  constructor(startTime) {
    super("population45To64", 10, 1.9e8, startTime);

    this.units = "persons";
  }
}
