import { Level } from "../level.js";

export class Population15To44 extends Level {
  constructor(startTime) {
    super("population15To44", 6, 7.0e8, startTime);

    this.units = "persons";
  }
}
