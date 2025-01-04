import { Level } from "../level.js";

export class Population65AndOver extends Level {
  constructor(startTime) {
    super("population65AndOver", 14, 6.0e7, startTime);

    this.units = "persons";
  }
}
