import { Rate } from "../rate.js";

export class DeathsPerYear extends Rate {
  constructor() {
    super("deathsPerYear0To14", 3);

    this.units = "persons per year";
  }
}
