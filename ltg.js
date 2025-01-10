import { Simulation } from "./models/simulation.js";

/*  Limits to Growth: This is a re-implementation in JavaScript of World3, the social-economic-environmental model created by
    Dennis and Donella Meadows and others circa 1970. The results of the modeling exercise were published in The Limits to Growth
    in 1972, and the model itself was more fully documented in Dynamics of Growth in a Finite World in 1974. 
*/

// PARAMETERS THAT GOVERN THE RUNNING OF THE MODEL

let plotTimer = null;

const simulation = new Simulation(1900, 2100, 0.5, 1975);

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
  if (simulation.currentYear > simulation.stopYear) stopModel();
};

export const stopModel = () => {
  clearInterval(plotTimer);

  enableControls();
  setRunButton();
};

export const runModel = () => {
  disableControls();
  setStopButton();
  setUpGraph();

  simulation.restart();
  simulation.warmup();

  plotTimer = setInterval(animationStep, 0);
};

export const fastRun = () => {
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

// ENTRY POINT: called by body.onload

export const setUpModel = () => {
  setUpGraph();
  setUpControls();
  setDefaults();
};

var scaleX = function (x, xMin, xMax) {
  var sx = (x - xMin) / (xMax - xMin);
  var px = gLeft + sx * (gRight - gLeft);
  return px;
};

var scaleY = function (y, yMin, yMax) {
  var sy = (y - yMin) / (yMax - yMin);
  var py = gTop + (1 - sy) * (gBottom - gTop);
  return py;
};

var setUpGraph = function () {
  var cv = document.getElementById("cv");
  cv.width = cv.width;
  var cvx = cv.getContext("2d");

  // draw horizontal gridlines

  cvx.lineWidth = 1;
  cvx.strokeStyle = "#fff";
  for (var y = 0; y <= 5; y++) {
    cvx.moveTo(scaleX(0, 0, 1), scaleY(y, 0, 5));
    cvx.lineTo(scaleX(1, 0, 1), scaleY(y, 0, 5));
    cvx.stroke();
  }

  // draw vertical gridlines

  cvx.lineWidth = 1;
  cvx.strokeStyle = "#fff";
  for (var x = simulation.startYear; x <= simulation.stopYear; x += 50) {
    cvx.moveTo(scaleX(x, simulation.startYear, simulation.stopYear), scaleY(0, 0, 1));
    cvx.lineTo(scaleX(x, simulation.startYear, simulation.stopYear), scaleY(1, 0, 1));
    cvx.stroke();
  }

  // place labels for time axis

  cvx.font = "1.0em 'Helvetica Neue', Helvetica, Verdana, sans-serif";
  cvx.textAlign = "center";
  cvx.fillStyle = "#000";
  var textY = gBottom + 20;
  for (var textX = simulation.startYear; textX <= simulation.stopYear; textX += 50) {
    cvx.fillText(textX.toString(), scaleX(textX, simulation.startYear, simulation.stopYear), textY);
  }
  cvx.fillText("year", scaleX(1, 0, 2), gBottom + 40);
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

export const changeDt = () => {
  var sliderInput = parseInt(document.getElementById("dt-slider").value);
  var sliderReadOut = document.getElementById("dt-readout");
  var newDt = Math.pow(2, sliderInput);

  sliderReadOut.innerHTML = newDt.toString();

  // recreate simulation
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

var setStopButton = function () {
  var btn = document.getElementById("run");
  btn.setAttribute("onclick", stopModel());
  btn.innerHTML = "Stop";
};

var setRunButton = function () {
  var btn = document.getElementById("run");
  btn.setAttribute("onclick", "runModel()");
  btn.innerHTML = "Run";
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
  var dtx = document.getElementById("dt-slider");
  dtx.value = -1;
  changeDt();
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
  context.moveTo(scaleX(leftPoint.x, startTime, stopTime, gLeft, gRight), scaleY(leftPoint.y, min, max, gBottom, gTop));

  for (var i = 1; i < data.length; i++) {
    var p = data[i];
    context.lineTo(scaleX(p.x, startTime, stopTime, gLeft, gRight), scaleY(p.y, min, max, gBottom, gTop));
  }

  context.stroke();
  context.closePath();
}
