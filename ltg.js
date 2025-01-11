import { Simulation } from "./models/simulation.js";
import { scaleX, scaleY } from "./tools.js";

/*  Limits to Growth: This is a re-implementation in JavaScript of World3, the social-economic-environmental model created by
    Dennis and Donella Meadows and others circa 1970. The results of the modeling exercise were published in The Limits to Growth
    in 1972, and the model itself was more fully documented in Dynamics of Growth in a Finite World in 1974. */

let plotTimer = null;
const startYear = 1900;
let simulation = null;

const cvWidth = 800;
const cvHeight = 450;
const gLeft = 50;
const gRight = cvWidth - 50;
const gTop = 25;
const gBottom = cvHeight - 50;

const animationStep = function () {
  const variablesToPlot = [...document.querySelectorAll(".checkbox-line input:checked")].map((e) => e.name);

  simulation.step();
  simulation.equations
    .filter((e) => variablesToPlot.includes(e.qName))
    .forEach((e) =>
      plot(
        simulation.startYear,
        simulation.stopYear,
        gLeft,
        gRight,
        gBottom,
        gTop,
        e.data,
        document.querySelector("[name='" + e.qName + "']").dataset.color,
        e.min,
        e.max
      )
    );

  if (simulation.currentYear > simulation.stopYear) stop();
};

const toggleSimulation = () => {
  if (document.getElementById("run").innerHTML === "Run") start();
  else stop();
};

const start = () => {
  simulation = createSimulation();

  document.getElementById("run").innerHTML = "Stop";
  document.querySelectorAll("input, button:not(#run)").forEach((e) => e.setAttribute("disabled", ""));

  setUpGraph();

  simulation.restart();
  simulation.warmup();

  plotTimer = setInterval(animationStep, 0);
};

const stop = () => {
  clearInterval(plotTimer);

  document.querySelectorAll("input, button").forEach((e) => e.removeAttribute("disabled"));
  document.getElementById("run").innerHTML = "Run";
};

const fastRun = () => {
  simulation = createSimulation();
  const variablesToPlot = [...document.querySelectorAll(".checkbox-line input:checked")].map((e) => e.name);

  setUpGraph();

  simulation.restart();
  simulation.quickWarmup();

  while (simulation.currentYear <= simulation.stopYear) {
    simulation.step();
    simulation.equations
      .filter((e) => variablesToPlot.includes(e.qName))
      .forEach((e) =>
        plot(
          simulation.startYear,
          simulation.stopYear,
          gLeft,
          gRight,
          gBottom,
          gTop,
          e.data,
          document.querySelector("[name='" + e.qName + "']").dataset.color,
          e.min,
          e.max
        )
      );
  }
};

const setDefaults = () => {
  const defaultPlotVariables = ["population-ck", "resources-ck", "food-ck", "industry-ck", "pollution-ck", "life-expect-ck"];

  document.querySelectorAll(".checkbox-line input").forEach((e) => (e.checked = false));
  defaultPlotVariables.forEach((e) => (document.getElementById(e).checked = true));
  document.getElementById("checkboxes").dispatchEvent(new Event("click"));

  document.getElementById("duration-slider").value = 200;
  document.getElementById("duration-slider").dispatchEvent(new Event("input"));

  document.getElementById("resource-slider").value = 0;
  document.getElementById("resource-slider").dispatchEvent(new Event("input"));

  document.getElementById("consumption-slider").value = 0.43;
  document.getElementById("consumption-slider").dispatchEvent(new Event("input"));

  document.getElementById("dt-slider").value = -1;
  document.getElementById("dt-slider").dispatchEvent(new Event("input"));
};

const toggleSampleColors = () => {
  const selection = document.querySelectorAll(".checkbox-line");

  for (var i = 0; i < selection.length; i++) {
    const input = selection[i].querySelector("input");
    const colorSample = selection[i].querySelector(".color-sample");

    if (input.checked == true) colorSample.classList.remove("hidden");
    else colorSample.classList.add("hidden");
  }
};

const setUpControls = () => {
  const timeStepSlider = document.getElementById("dt-slider");
  timeStepSlider.addEventListener("input", () => {
    const timeStepReadout = document.getElementById("dt-readout");
    const timeStep = Math.pow(2, parseFloat(timeStepSlider.value));

    timeStepReadout.innerHTML = timeStep;
  });

  const durationSlider = document.getElementById("duration-slider");
  durationSlider.addEventListener("input", () => {
    const durationReadout = document.getElementById("duration-readout");

    durationReadout.innerHTML = durationSlider.value;
    setUpGraph();
  });

  const resourceSlider = document.getElementById("resource-slider");
  resourceSlider.addEventListener("input", () => {
    const resourceReadout = document.getElementById("resource-readout");
    const resource = Math.pow(2, parseFloat(resourceSlider.value));

    resourceReadout.innerHTML = resource;
  });

  const consumptionSlider = document.getElementById("consumption-slider");
  consumptionSlider.addEventListener("input", () => {
    const consumptionReadout = document.getElementById("consumption-readout");
    consumptionReadout.innerHTML = consumptionSlider.value;
  });

  document.getElementById("run").addEventListener("click", toggleSimulation);
  document.getElementById("reset").addEventListener("click", setUpGraph);
  document.getElementById("fast-run").addEventListener("click", fastRun);
  document.getElementById("defaults").addEventListener("click", setDefaults);
  document.getElementById("checkboxes").addEventListener("click", toggleSampleColors);
};

const setUpGraph = function () {
  const duration = parseInt(document.getElementById("duration-slider").value);
  const canvas = document.getElementById("cv");
  const context = canvas.getContext("2d");

  canvas.width = canvas.width;

  // draw horizontal gridlines
  context.lineWidth = 1;
  context.strokeStyle = "#fff";

  for (let y = 0; y <= 5; y++) {
    context.moveTo(scaleX(0, 0, 1, gLeft, gRight), scaleY(y, 0, 5, gTop, gBottom));
    context.lineTo(scaleX(1, 0, 1, gLeft, gRight), scaleY(y, 0, 5, gTop, gBottom));
    context.stroke();
  }

  // draw vertical gridlines
  context.lineWidth = 1;
  context.strokeStyle = "#fff";

  for (let x = startYear; x <= startYear + duration; x += 50) {
    context.moveTo(scaleX(x, startYear, startYear + duration, gLeft, gRight), scaleY(0, 0, 1, gTop, gBottom));
    context.lineTo(scaleX(x, startYear, startYear + duration, gLeft, gRight), scaleY(1, 0, 1, gTop, gBottom));
    context.stroke();
  }

  // place labels for time axis
  context.font = "1.0em 'Helvetica Neue', Helvetica, Verdana, sans-serif";
  context.textAlign = "center";
  context.fillStyle = "#000";

  for (var textX = startYear; textX <= startYear + duration; textX += 50) {
    context.fillText(textX.toString(), scaleX(textX, startYear, startYear + duration, gLeft, gRight), gBottom + 20);
  }

  context.fillText("year", scaleX(1, 0, 2, gLeft, gRight), gBottom + 40);
};

// CONTROLS
// add variables to the pop-up menu
var populateMenu = function () {
  const plottable = simulation.equations.filter((e) => e.plottable == true);
  const menu = document.getElementById("menuOfVars");

  for (var i of plottable) {
    const newOption = new Option();

    newOption.text = plottable[i].qName;
    menu.options.push(newOption);
  }
};

/*
var changeMenuVar = function() {
  var menu = document.getElementById("menuOfVars");
  var menuCheckBox = document.getElementById("select-var-ck");
  var selection = menu.options[menu.selectedIndex].text;
  menuCheckBox.name = selection;

}
*/

const plot = (startTime, stopTime, gLeft, gRight, gBottom, gTop, data, color, min, max) => {
  const canvas = document.getElementById("cv");
  const context = canvas.getContext("2d");

  context.strokeStyle = color;
  context.lineWidth = 2;
  context.beginPath();
  context.moveTo(scaleX(data[0].x, startTime, stopTime, gLeft, gRight), scaleY(data[0].y, min, max, gTop, gBottom));

  for (var i = 1; i < data.length; i++) {
    context.lineTo(scaleX(data[i].x, startTime, stopTime, gLeft, gRight), scaleY(data[i].y, min, max, gTop, gBottom));
  }

  context.stroke();
  context.closePath();
};

const createSimulation = () => {
  const timeStepSlider = document.getElementById("dt-slider");
  const timeStep = Math.pow(2, parseFloat(timeStepSlider.value));
  const duration = parseInt(document.getElementById("duration-slider").value);
  const resourcesSlider = document.getElementById("resource-slider");
  const resources = Math.pow(2, parseInt(resourcesSlider.value)); // 1.0e12
  const consumptionSlider = document.getElementById("consumption-slider");
  const consumption = parseFloat(consumptionSlider.value);

  return new Simulation(startYear, startYear + duration, timeStep, 1975, resources, consumption);
};

setUpGraph();
setUpControls();
