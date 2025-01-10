import { Simulation } from "./models/simulation.js";

/*  Limits to Growth: This is a re-implementation in JavaScript of World3, the social-economic-environmental model created by
    Dennis and Donella Meadows and others circa 1970. The results of the modeling exercise were published in The Limits to Growth
    in 1972, and the model itself was more fully documented in Dynamics of Growth in a Finite World in 1974. 
*/

// PARAMETERS THAT GOVERN THE RUNNING OF THE MODEL

var startTime = 1900;
var stopTime = 2100;
var t = 1900;
var dt = 1.0;
var policyYear = 1975; // eqn 150.1

const simulation = new Simulation(startTime, stopTime, dt, policyYear);
const qArray = simulation.equations;
const levelArray = simulation.levelArray;
const rateArray = simulation.rateArray;
const auxArray = simulation.auxArray;

var timeStep = function () {
  levelArray.forEach((e) => e.update(t, startTime, stopTime, gLeft, gRight, gBottom, gTop, dt));
  auxArray.forEach((e) => e.update(t, startTime, stopTime, gLeft, gRight, gBottom, gTop, dt));
  rateArray.forEach((e) => e.update(t, startTime, stopTime, gLeft, gRight, gBottom, gTop, dt));

  qArray.forEach((e) => e.tick());

  t += dt;
};

var animationStep = function () {
  timeStep();
  if (t > stopTime) {
    clearInterval(plotTimer);
    enableControls();
    setRunButton();
  }
};

export const stopModel = () => {
  clearInterval(plotTimer);
  enableControls();
  setRunButton();
};

const plotDelay = 0 * dt; // milliseconds
let plotTimer = null;

export const runModel = () => {
  disableControls();
  setStopButton();
  setUpGraph();

  t = startTime;
  simulation.restart();
  simulation.warmup(t, dt);

  plotTimer = setInterval(animationStep, plotDelay); // note GLOBAL
};

export const fastRun = () => {
  t = startTime;

  simulation.restart();

  setUpGraph();

  for (var i = 1; i <= 100; i++) {
    auxArray.forEach((e) => e.warmup(t, dt));
    rateArray.forEach((e) => e.warmup(t, dt));

    qArray.forEach((e) => e.tick());
  }

  while (t <= stopTime) {
    timeStep();
  }
};

// ENTRY POINT: called by body.onload

export const setUpModel = () => {
  setUpGraph();
  setUpControls();
  setDefaults();
};

// GRAPHICS

// some basic dimensions

var cvWidth = 800;
var cvHeight = 450;
var gLeft = 50;
var gRight = cvWidth - 50;
var gTop = 25;
var gBottom = cvHeight - 50;

// RGB colors associated with the polttable variables

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
  for (var x = startTime; x <= stopTime; x += 50) {
    cvx.moveTo(scaleX(x, startTime, stopTime), scaleY(0, 0, 1));
    cvx.lineTo(scaleX(x, startTime, stopTime), scaleY(1, 0, 1));
    cvx.stroke();
  }

  // place labels for time axis

  cvx.font = "1.0em 'Helvetica Neue', Helvetica, Verdana, sans-serif";
  cvx.textAlign = "center";
  cvx.fillStyle = "#000";
  var textY = gBottom + 20;
  for (var textX = startTime; textX <= stopTime; textX += 50) {
    cvx.fillText(textX.toString(), scaleX(textX, startTime, stopTime), textY);
  }
  cvx.fillText("year", scaleX(1, 0, 2), gBottom + 40);
};

// CONTROLS
// add variables to the pop-up menu
var populateMenu = function () {
  const plottable = qArray.filter((e) => e.plottable == true);
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
  stopTime = startTime + sliderInput;

  t = startTime;
  setUpGraph();
};

export const changeDt = () => {
  var sliderInput = parseInt(document.getElementById("dt-slider").value);
  var sliderReadOut = document.getElementById("dt-readout");
  var newDt = Math.pow(2, sliderInput);
  sliderReadOut.innerHTML = newDt.toString();
  dt = newDt;

  t = startTime;
};

export const changeResources = () => {
  var sliderInput = parseInt(document.getElementById("resource-slider").value);
  var sliderReadOut = document.getElementById("resource-readout");
  var newResources = Math.pow(2, sliderInput);
  sliderReadOut.innerHTML = newResources.toString();

  //nonrenewableResources.initVal = newResources * 1.0e12;
  //nonrenewableResourcesInitialK = newResources * 1.0e12;

  t = startTime;
};

export const changeConsumption = () => {
  var sliderInput = parseFloat(document.getElementById("consumption-slider").value);
  var sliderReadOut = document.getElementById("consumption-readout");
  sliderReadOut.innerHTML = sliderInput.toFixed(2);

  //fractionOfIndustrialOutputAllocatedToConsumptionConstant.before = sliderInput;
  //fractionOfIndustrialOutputAllocatedToConsumptionConstant.after = sliderInput;

  t = startTime;
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
  btn.setAttribute("onclick", "stopModel()");
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
    var theEqn = qArray.find((e) => e.qName === theInput.getAttribute("name"));
    var theSample = ckx[i].getElementsByClassName("color-sample")[0];
    var theHue = theEqn.plotColor;
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
