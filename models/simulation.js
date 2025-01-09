export class Simulation {
  constructor(startYear, stopYear, stepSize, policyYear) {
    this.startYear = startYear;
    this.stopYear = stopYear;
    this.stepSize = stepSize;
    this.policyYear = policyYear;
    this.currentYear = startYear;

    this.equations = [];
  }

  get equations() {
    return this.equations;
  }

  step() {
    this.equations.forEach((e) => e.update());
  }
}
