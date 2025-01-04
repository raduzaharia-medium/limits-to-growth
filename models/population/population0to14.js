import { Level } from "../level.js";

export class Population0To14 extends Level {
  constructor(startTime) {
    super("population0To14", 2, 6.5e8, startTime);

    this.units = "persons";
  }
}
