import { Simulation } from "./models/simulation.js";
import { scaleX, scaleY } from "./tools.js";

/*  Limits to Growth: This is a re-implementation in JavaScript of World3, the social-economic-environmental model created by
    Dennis and Donella Meadows and others circa 1970. The results of the modeling exercise were published in The Limits to Growth
    in 1972, and the model itself was more fully documented in Dynamics of Growth in a Finite World in 1974. 
*/

// PARAMETERS THAT GOVERN THE RUNNING OF THE MODEL

let plotTimer = null;
const timeStepSlider = document.getElementById("dt-slider");
const timeStep = Math.pow(2, parseFloat(timeStepSlider.value));
const simulation = new Simulation(1900, 2100, timeStep, 1975);

const cvWidth = 800;
const cvHeight = 450;
const gLeft = 50;
const gRight = cvWidth - 50;
const gTop = 25;
const gBottom = cvHeight - 50;

var animationStep = function () {
  simulation.step();

  simulation.equations
    .filter((e) => e.plotThisVar)
    .forEach((e) => plot(simulation.startYear, simulation.stopYear, gLeft, gRight, gBottom, gTop, e.data, e.color, e.min, e.max));
  if (simulation.currentYear > simulation.stopYear) stop();
};

const toggleSimulation = () => {
  if (document.getElementById("run").innerHTML === "Run") start();
  else stop();
};

const stop = () => {
  clearInterval(plotTimer);

  enableControls();
  document.getElementById("run").innerHTML = "Run";
};

const start = () => {
  document.getElementById("run").innerHTML = "Stop";

  disableControls();
  setUpGraph();

  simulation.restart();
  simulation.warmup();

  plotTimer = setInterval(animationStep, 0);
};

const fastRun = () => {
  setUpGraph();

  simulation.restart();
  simulation.quickWarmup();

  while (simulation.currentYear <= simulation.stopYear) {
    simulation.step();
    simulation.equations
      .filter((e) => e.plotThisVar)
      .forEach((e) => plot(simulation.startYear, simulation.stopYear, gLeft, gRight, gBottom, gTop, e.data, e.color, e.min, e.max));
  }
};

const resetModel = () => {};

// ENTRY POINT: called by body.onload

const setUpModel = () => {
  setUpGraph();
  setDefaults();

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
  document.getElementById("reset").addEventListener("click", resetModel);
  document.getElementById("fast-run").addEventListener("click", fastRun);
  document.getElementById("defaults").addEventListener("click", setDefaults);
};

var setUpGraph = function () {
  var cv = document.getElementById("cv");
  cv.width = cv.width;
  var cvx = cv.getContext("2d");

  // draw horizontal gridlines

  cvx.lineWidth = 1;
  cvx.strokeStyle = "#fff";
  for (var y = 0; y <= 5; y++) {
    cvx.moveTo(scaleX(0, 0, 1, gLeft, gRight), scaleY(y, 0, 5, gTop, gBottom));
    cvx.lineTo(scaleX(1, 0, 1, gLeft, gRight), scaleY(y, 0, 5, gTop, gBottom));
    cvx.stroke();
  }

  // draw vertical gridlines

  cvx.lineWidth = 1;
  cvx.strokeStyle = "#fff";
  for (var x = simulation.startYear; x <= simulation.stopYear; x += 50) {
    cvx.moveTo(scaleX(x, simulation.startYear, simulation.stopYear, gLeft, gRight), scaleY(0, 0, 1, gTop, gBottom));
    cvx.lineTo(scaleX(x, simulation.startYear, simulation.stopYear, gLeft, gRight), scaleY(1, 0, 1, gTop, gBottom));
    cvx.stroke();
  }

  // place labels for time axis

  cvx.font = "1.0em 'Helvetica Neue', Helvetica, Verdana, sans-serif";
  cvx.textAlign = "center";
  cvx.fillStyle = "#000";
  var textY = gBottom + 20;
  for (var textX = simulation.startYear; textX <= simulation.stopYear; textX += 50) {
    cvx.fillText(textX.toString(), scaleX(textX, simulation.startYear, simulation.stopYear, gLeft, gRight), textY);
  }
  cvx.fillText("year", scaleX(1, 0, 2, gLeft, gRight), gBottom + 40);
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

var setUpControls = function () {
  pollCheckBoxes();
  changeDuration();
  changeDt();
  changeResources();
  changeConsumption();
};

export const changeDuration = () => {
  var sliderInput = parseInt(document.getElementById("duration-slider").value);
  var sliderReadOut = document.getElementById("duration-readout");

  sliderReadOut.innerHTML = sliderInput.toString();

  // recreate simulation

  setUpGraph();
};

export const changeResources = () => {
  var sliderInput = parseInt(document.getElementById("resource-slider").value);
  var sliderReadOut = document.getElementById("resource-readout");
  var newResources = Math.pow(2, sliderInput);
  sliderReadOut.innerHTML = newResources.toString();

  //nonrenewableResources.initVal = newResources * 1.0e12;
  //nonrenewableResourcesInitialK = newResources * 1.0e12;
};

export const changeConsumption = () => {
  var sliderInput = parseFloat(document.getElementById("consumption-slider").value);
  var sliderReadOut = document.getElementById("consumption-readout");
  sliderReadOut.innerHTML = sliderInput.toFixed(2);

  //fractionOfIndustrialOutputAllocatedToConsumptionConstant.before = sliderInput;
  //fractionOfIndustrialOutputAllocatedToConsumptionConstant.after = sliderInput;
};

/*
var changeMenuVar = function() {
  var menu = document.getElementById("menuOfVars");
  var menuCheckBox = document.getElementById("select-var-ck");
  var selection = menu.options[menu.selectedIndex].text;
  menuCheckBox.name = selection;

}
*/

var disableControls = function () {
  var ctrls = document.getElementsByTagName("input");
  for (var c = 0; c < ctrls.length; c++) {
    ctrls[c].setAttribute("disabled", "disabled");
  }
  var btns = document.getElementsByTagName("button");
  for (var b = 0; b < btns.length; b++) {
    if (btns[b].getAttribute("id") != "run") {
      btns[b].setAttribute("disabled", "disabled");
    }
  }
};

var enableControls = function () {
  var ctrls = document.getElementsByTagName("input");
  for (var c = 0; c < ctrls.length; c++) {
    ctrls[c].removeAttribute("disabled");
  }
  var btns = document.getElementsByTagName("button");
  for (var b = 0; b < btns.length; b++) {
    if (btns[b].getAttribute("id") != "run") {
      btns[b].removeAttribute("disabled");
    }
  }
};

export const pollCheckBoxes = () => {
  var ckx = document.getElementsByClassName("checkbox-line");
  for (var i = 0; i < ckx.length; i++) {
    var theInput = ckx[i].getElementsByTagName("input")[0];
    var theEqn = simulation.equations.find((e) => e.qName === theInput.getAttribute("name"));
    var theSample = ckx[i].getElementsByClassName("color-sample")[0];
    var theHue = theEqn.color;
    if (theInput.checked == true) {
      theSample.style.backgroundColor = theHue;
      theEqn.plotThisVar = true;
    } else {
      theSample.style.backgroundColor = "transparent";
      theEqn.plotThisVar = false;
    }
  }
};

export const setDefaults = () => {
  var plotVars = ["population-ck", "resources-ck", "food-ck", "industry-ck", "pollution-ck", "life-expect-ck"];
  var ckx = document.getElementsByClassName("checkbox-line");
  for (var i = 0; i < ckx.length; i++) {
    var theInput = ckx[i].getElementsByTagName("input")[0];
    theInput.checked = false;
  }

  for (var id in plotVars) {
    var ckBox = document.getElementById(plotVars[id]);
    ckBox.checked = true;
  }
  pollCheckBoxes();

  var duration = document.getElementById("duration-slider");
  duration.value = 200;
  changeDuration();

  var res = document.getElementById("resource-slider");
  res.value = 0;
  changeResources();

  var cons = document.getElementById("consumption-slider");
  cons.value = 0.43;
  changeConsumption();
};

function plot(startTime, stopTime, gLeft, gRight, gBottom, gTop, data, color, min, max) {
  const canvas = document.getElementById("cv");
  const context = canvas.getContext("2d");

  context.strokeStyle = color;
  context.lineWidth = 2;
  context.beginPath();

  var leftPoint = data[0];
  context.moveTo(scaleX(leftPoint.x, startTime, stopTime, gLeft, gRight), scaleY(leftPoint.y, min, max, gTop, gBottom));

  for (var i = 1; i < data.length; i++) {
    var p = data[i];
    context.lineTo(scaleX(p.x, startTime, stopTime, gLeft, gRight), scaleY(p.y, min, max, gTop, gBottom));
  }

  context.stroke();
  context.closePath();
}

setUpModel();
