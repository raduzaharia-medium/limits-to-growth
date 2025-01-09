import { scaleX, scaleY } from "../tools.js";

export class Equation {
  constructor(qName, qNumber) {
    this.qName = qName;
    this.qNumber = qNumber;

    this.units = "dimensionless";
    this.data = [];
    this.j = null;
    this.k = null;

    this.plotThisVar = false;
    this.plotColor = "transparent";
    this.plotMin = 0;
    this.plotMax = 1000;
  }

  warmup(t, dt) {
    this.k = this.updateFn(t, dt);
  }

  reset() {
    this.j = null;
    this.k = null;
    this.data = [];
  }

  update(t, startTime, stopTime, gLeft, gRight, gBottom, gTop, dt) {
    this.k = this.updateFn(t, dt);

    if (this.plotThisVar) {
      this.data.push({ x: t, y: this.k });
      this.plot(startTime, stopTime, gLeft, gRight, gBottom, gTop);
    }

    return this.k;
  }

  tick() {
    this.j = this.k;
  }

  plot(startTime, stopTime, gLeft, gRight, gBottom, gTop) {
    const canvas = document.getElementById("cv");
    const context = canvas.getContext("2d");

    context.strokeStyle = this.plotColor;
    context.lineWidth = 2;
    context.beginPath();

    var leftPoint = this.data[0];
    context.moveTo(scaleX(leftPoint.x, startTime, stopTime, gLeft, gRight), scaleY(leftPoint.y, this.plotMin, this.plotMax, gBottom, gTop));

    for (var i = 1; i < this.data.length; i++) {
      var p = this.data[i];
      context.lineTo(scaleX(p.x, startTime, stopTime, gLeft, gRight), scaleY(p.y, this.plotMin, this.plotMax, gBottom, gTop));
    }

    context.stroke();
    context.closePath();
  }

  updateFn(t, dt) {
    return this.j;
  }
}
