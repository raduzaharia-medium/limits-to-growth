import { Level } from "./models/level.js";
import { Rate } from "./models/rate.js";
import { Aux } from "./models/aux.js";
import { Smooth } from "./models/smooth.js";
import { Delay3 } from "./models/delay.js";
import { Table } from "./models/table.js";
import { clip } from "./tools.js";
import { Population } from "./models/population/population.js";
import { Population0To14 } from "./models/population/population0To14.js";
import { Population15To44 } from "./models/population/population15To44.js";
import { Population45To64 } from "./models/population/population45To64.js";
import { Population65AndOver } from "./models/population/population65AndOver.js";
import { DeathsPerYear0To14 } from "./models/population/deathsPerYear0To14.js";
import { Mortality0To14 } from "./models/population/mortality0To14.js";
import { MaturationsPerYear14To15 } from "./models/population/maturationsPerYear14To15.js";
import { DeathsPerYear15To44 } from "./models/population/deathsPerYear15To44.js";
import { Mortality15To44 } from "./models/population/mortality15To44.js";
import { MaturationsPerYear44To45 } from "./models/population/maturationsPerYear44To45.js";
import { DeathsPerYear45To64 } from "./models/population/deathsPerYear45To64.js";
import { Mortality45To64 } from "./models/population/mortality45To64.js";
import { MaturationsPerYear64To65 } from "./models/population/maturationsPerYear64To65.js";
import { DeathsPerYear65AndOver } from "./models/population/deathsPerYear65AndOver.js";
import { Mortality65AndOver } from "./models/population/mortality65AndOver.js";
import { DeathsPerYear } from "./models/population/deathsPerYear.js";
import { CrudeDeathRate } from "./models/population/crudeDeathRate.js";
import { LifeExpectancy } from "./models/population/lifeExpectancy.js";
import { LifetimeMultiplierFromFood } from "./models/population/lifetimeMultiplierFromFood.js";
import { HealthServicesAllocationPerCapita } from "./models/population/healthServicesAllocationsPerCapita.js";
import { EffectiveHealthServicesPerCapita } from "./models/population/effectiveHealthServicesPerCapita.js";
import { LifetimeMultiplierFromHealthServices } from "./models/population/lifetimeMultiplierFromHealthServices.js";

/*  Limits to Growth: This is a re-implementation in JavaScript
    of World3, the social-economic-environmental model created by
    Dennis and Donella Meadows and others circa 1970. The results
    of the modeling exercise were published in The Limits to Growth
    in 1972, and the model itself was more fully documented in
    Dynamics of Growth in a Finite World in 1974. 
*/

// when we create an Equation with qNumber n, it becomes element qArray[n]
// note that there is no qArray[0]
var qArray = new Array();

// Equations with qClass "Level" are pushed onto this Array
var levelArray = new Array();

// Equations with qClass "Rate" are pushed onto this Array
var rateArray = new Array();

// Equations with qClass "Aux" are pushed onto this Array
var auxArray = new Array();

// sort the Aux equations into an order such that each one will
// not be executed until all of its dependencies have been satisfied

var gatherDependencies = function () {
  var depArray = [];
  for (var i = 0; i < auxArray.length; i++) {
    var d = new Object();
    d[auxArray[i].qName] = auxArray[i].dependencies;
    depArray[i] = d;
  }
  return depArray;
};

var printDeps = function () {
  for (var i = 0; i < auxArray.length; i++) {
    document.writeln(auxArray[i].qName + "<br/>");
    for (var j = 0; j < auxArray[i].dependencies.length; j++) {
      document.writeln("____" + auxArray[i].dependencies[j] + "<br/>");
    }
  }
};

var qNameToQNumber = function (theName) {
  for (var i = 1; i < qArray.length; i++) {
    if (qArray[i].qName === theName) return qArray[i].qNumber;
  }
};

var printQNumberDependencies = function () {
  for (var i = 0; i < auxArray.length; i++) {
    document.write(auxArray[i].qNumber, " ");
    for (var j = 0; j < auxArray[i].dependencies.length; j++) {
      var qN = qNameToQNumber(auxArray[i].dependencies[j]);
      //      console.log(i, j, auxArray[i].qNumber, qN);
      document.write(qN, " ");
    }
    document.write("</br>");
  }
};

var printQNameDependencies = function () {
  for (var i = 0; i < auxArray.length; i++) {
    document.write(auxArray[i].qName, " ");
    for (var j = 0; j < auxArray[i].dependencies.length; j++) {
      document.write(auxArray[i].dependencies[j], " ");
    }
    document.write("</br>");
  }
};

var auxSequence = [
  "population",
  "deathsPerYear",
  "lifetimeMultiplierFromCrowding",
  "industrialCapitalOutputRatio",
  "averageLifetimeOfIndustrialCapital",
  "averageLifetimeOfServiceCapital",
  "serviceCapitalOutputRatio",
  "laborForce",
  "landFractionCultivated",
  "developmentCostPerHectare",
  "landYieldFactor",
  "nonrenewableResourceUsageFactor",
  "nonrenewableResourceFractionRemaining",
  "persistentPollutionGenerationFactor",
  "indexOfPersistentPollution",
  "fractionOfIndustrialOutputAllocatedToConsumptionConstant",
  "averageLifetimeOfAgriculturalInputs",
  "laborUtilizationFractionDelayed",
  "agriculturalInputs",
  "perceivedFoodRatio",
  "fractionOfPopulationUrban",
  "crudeDeathRate",
  "crudeBirthRate",
  "fractionOfCapitalAllocatedToObtainingResourcesBefore",
  "fractionOfCapitalAllocatedToObtainingResourcesAfter",
  "fractionOfCapitalAllocatedToObtainingResources",
  "lifetimeMultiplierFromPollution",
  "landFertilityDegradationRate",
  "capitalUtilizationFraction",
  "industrialOutput",
  "industrialOutputPerCapita",
  "delayedIndustrialOutputPerCapita",
  "socialFamilySizeNorm",
  "averageIndustrialOutputPerCapita",
  "familyIncomeExpectation",
  "familyResponseToSocialNorm",
  "desiredCompletedFamilySize",
  "crowdingMultiplierFromIndustrialization",
  "indicatedServiceOutputPerCapitaBefore",
  "indicatedServiceOutputPerCapitaAfter",
  "indicatedServiceOutputPerCapita",
  "fractionOfIndustrialOutputAllocatedToConsumptionVariable",
  "fractionOfIndustrialOutputAllocatedToConsumption",
  "jobsPerIndustrialCapitalUnit",
  "potentialJobsInIndustrialSector",
  "serviceOutput",
  "serviceOutputPerCapita",
  "fractionOfIndustrialOutputAllocatedToServicesBefore",
  "fractionOfIndustrialOutputAllocatedToServicesAfter",
  "fractionOfIndustrialOutputAllocatedToServices",
  "jobsPerServiceCapitalUnit",
  "potentialJobsInServiceSector",
  "healthServicesAllocationsPerCapita",
  "effectiveHealthServicesPerCapita",
  "lifetimeMultiplierFromHealthServicesBefore",
  "lifetimeMultiplierFromHealthServicesAfter",
  "lifetimeMultiplierFromHealthServices",
  "fractionOfInputsAllocatedToLandMaintenance",
  "agriculturalInputsPerHectare",
  "jobsPerHectare",
  "potentialJobsInAgriculturalSector",
  "jobs",
  "laborUtilizationFraction",
  "landYieldMultiplierFromCapital",
  "landYieldMultiplierFromAirPollutionBefore",
  "landYieldMultiplierFromAirPollutionAfter",
  "landYieldMultiplierFromAirPollution",
  "landYield",
  "marginalProductivityOfLandDevelopment",
  "marginalLandYieldMultiplierFromCapital",
  "marginalProductivityOfAgriculturalInputs",
  "fractionOfInputsAllocatedToLandDevelopment",
  "food",
  "foodPerCapita",
  "indicatedFoodPerCapitaBefore",
  "indicatedFoodPerCapitaAfter",
  "indicatedFoodPerCapita",
  "fractionOfIndustrialOutputAllocatedToAgricultureBefore",
  "fractionOfIndustrialOutputAllocatedToAgricultureAfter",
  "fractionOfIndustrialOutputAllocatedToAgriculture",
  "totalAgriculturalInvestment",
  "currentAgriculturalInputs",
  "foodRatio",
  "landFertilityRegenerationTime",
  "lifetimeMultiplierFromFood",
  "lifeExpectancy",
  "mortality0To14",
  "mortality15To44",
  "mortality45To64",
  "mortality65AndOver",
  "fecundityMultiplier",
  "perceivedLifeExpectancy",
  "compensatoryMultiplierFromPerceivedLifeExpectancy",
  "maxTotalFertility",
  "desiredTotalFertility",
  "needForFertilityControl",
  "fractionOfServicesAllocatedToFertilityControl",
  "fertilityControlAllocationPerCapita",
  "fertilityControlFacilitiesPerCapita",
  "fertilityControlEffectiveness",
  "totalFertility",
  "landLifeMultiplierFromYieldBefore",
  "landLifeMultiplierFromYieldAfter",
  "landLifeMultiplierFromYield",
  "averageLifeOfLand",
  "urbanIndustrialLandPerCapita",
  "urbanIndustrialLandRequired",
  "perCapitaResourceUsageMultiplier",
  "persistentPollutionGeneratedByIndustrialOutput",
  "persistentPollutionGeneratedByAgriculturalOutput",
  "assimilationHalfLifeMultiplier",
  "assimilationHalfLife",
  "fractionOfIndustrialOutputAllocatedToIndustry",
  "fractionOfOutputInAgriculture",
  "fractionOfOutputInIndustry",
  "fractionOfOutputInServices",
];

var sortAuxEqns = function () {
  for (var i = 0; i < auxSequence.length; i++) {
    eval(auxSequence[i]).sequenceNumber = i;
  }
  auxArray.sort(function (left, right) {
    if (left.sequenceNumber < right.sequenceNumber) {
      return -1;
    } else {
      return 1;
    }
  });
};

// PARAMETERS THAT GOVERN THE RUNNING OF THE MODEL

var startTime = 1900;
var stopTime = 2100;
var t = 1900;
var dt = 1.0;
var policyYear = 1975; // eqn 150.1
var plotInterval = Math.max(dt, 1);

export const resetModel = () => {
  t = startTime;
  for (var i = 1; i < qArray.length; i++) {
    qArray[i].reset();
  }
  setUpGraph();
};

var initSmoothsAndDelay3s = function () {
  for (var i = 1; i < qArray.length; i++) {
    var q = qArray[i];
    if (q.constructor === Smooth || q.constructor === Delay3) {
      q.init();
    }
  }
};

var updateAuxen = function () {
  for (var i = 0; i < auxArray.length; i++) {
    auxArray[i].update(t, startTime, stopTime, gLeft, gRight, gBottom, gTop, dt);
  }
};

var updateRates = function () {
  for (var i = 0; i < rateArray.length; i++) {
    rateArray[i].update(t, startTime, stopTime, gLeft, gRight, gBottom, gTop, dt);
  }
};

var updateLevels = function () {
  for (var i = 0; i < levelArray.length; i++) {
    levelArray[i].update(t, startTime, stopTime, gLeft, gRight, gBottom, gTop, dt);
  }
};

var warmupAuxen = function () {
  for (var i = 0; i < auxArray.length; i++) {
    auxArray[i].warmup();
  }
};

var warmupRates = function () {
  for (var i = 0; i < rateArray.length; i++) {
    rateArray[i].warmup();
  }
};

var warmupLevels = function () {
  for (var i = 0; i < levelArray.length; i++) {
    levelArray[i].warmup();
  }
};

var tock = function () {
  for (var i = 1; i < qArray.length; i++) {
    qArray[i].tick();
  }
};

var initModel = function () {
  initSmoothsAndDelay3s();
  sortAuxEqns();
  t = startTime;
};

var timeStep = function () {
  updateLevels();
  updateAuxen();
  updateRates();
  tock();

  t += dt;
  lifetimeMultiplierFromHealthServices.t = t;
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
  resetModel();
  initModel();
  setUpGraph();
  for (var i = 1; i <= 3; i++) {
    warmupAuxen();
    warmupRates();
    tock();
  }
  for (var i = 1; i <= 10; i++) {
    warmupAuxen();
    warmupRates();
    warmupLevels();
    tock();
  }
  for (var i = 0; i < levelArray.length; i++) {
    levelArray[i].reset(startTime);
  }
  plotTimer = setInterval(animationStep, plotDelay); // note GLOBAL
};

export const fastRun = () => {
  resetModel();
  initModel();
  setUpGraph();
  for (var i = 1; i <= 100; i++) {
    warmupAuxen();
    warmupRates();
    tock();
  }
  while (t <= stopTime) {
    timeStep();
  }
};

var checkForNaNs = function () {
  for (var i = 1; i < qArray.length; i++) {
    if (isNaN(qArray[i].k)) console.log(qArray[i].qName);
  }
};

var dumpVars = function () {
  for (var i = 1; i < qArray.length; i++) {
    console.log(t, qArray[i].qType, qArray[i].qName, qArray[i].j, qArray[i].k);
  }
};

var debugRun = function () {
  initModel();
  //  logData();
  for (var i = 1; i <= 100; i++) {
    warmupAuxen();
    warmupRates();
    tock();
    //    logData();
  }
  while (t <= stopTime) {
    updateLevels();
    //    if (t < 1904) { dumpVars(); console.log("****") };
    updateAuxen();
    //    if (t == 1911) { dumpVars(); };
    updateRates();
    //    if (t == 1911) { dumpVars(); };
    tock();
    //    if (t == 1911) { dumpVars(); };
    t += dt;
    logData();
  }
};

//THE POPULATION SECTOR

const population = new Population();
qArray[1] = population;
auxArray.push(population);

const population0To14 = new Population0To14(startTime, dt);
qArray[2] = population0To14;
levelArray.push(population0To14);
population.population0To14 = population0To14;

const deathsPerYear0To14 = new DeathsPerYear0To14();
qArray[3] = deathsPerYear0To14;
rateArray.push(deathsPerYear0To14);
population0To14.deathsPerYear0To14 = deathsPerYear0To14;
deathsPerYear0To14.population0To14 = population0To14;

const mortality0To14 = new Mortality0To14();
qArray[4] = mortality0To14;
auxArray.push(mortality0To14);
deathsPerYear0To14.mortality0To14 = mortality0To14;

const maturationsPerYear14to15 = new MaturationsPerYear14To15();
qArray[5] = maturationsPerYear14to15;
rateArray.push(maturationsPerYear14to15);
population0To14.maturationsPerYear14to15 = maturationsPerYear14to15;
maturationsPerYear14to15.population0To14 = population0To14;
maturationsPerYear14to15.mortality0To14 = mortality0To14;

const population15To44 = new Population15To44(startTime, dt);
qArray[6] = population15To44;
levelArray.push(population15To44);
population15To44.maturationsPerYear14to15 = maturationsPerYear14to15;
population.population15To44 = population15To44;

const deathsPerYear15To44 = new DeathsPerYear15To44();
qArray[7] = deathsPerYear15To44;
rateArray.push(deathsPerYear15To44);
population15To44.deathsPerYear15To44 = deathsPerYear15To44;
deathsPerYear15To44.population15To44 = population15To44;

const mortality15To44 = new Mortality15To44();
qArray[8] = mortality15To44;
auxArray.push(mortality15To44);
deathsPerYear15To44.mortality15To44 = mortality15To44;

const maturationsPerYear44to45 = new MaturationsPerYear44To45();
qArray[9] = maturationsPerYear44to45;
rateArray.push(maturationsPerYear44to45);
population15To44.maturationsPerYear44to45 = maturationsPerYear44to45;
maturationsPerYear44to45.population15To44 = population15To44;
maturationsPerYear44to45.mortality15To44 = mortality15To44;

const population45To64 = new Population45To64(startTime, dt);
qArray[10] = population45To64;
levelArray.push(population45To64);
population.population45To64 = population45To64;
population45To64.maturationsPerYear44to45 = maturationsPerYear44to45;

const deathsPerYear45To64 = new DeathsPerYear45To64();
qArray[11] = deathsPerYear45To64;
rateArray.push(deathsPerYear45To64);
population45To64.deathsPerYear45To64 = deathsPerYear45To64;
deathsPerYear45To64.population45To64 = population45To64;

const mortality45To64 = new Mortality45To64();
qArray[12] = mortality45To64;
auxArray.push(mortality45To64);
deathsPerYear45To64.mortality45To64 = mortality45To64;

const maturationsPerYear64to65 = new MaturationsPerYear64To65();
qArray[13] = maturationsPerYear64to65;
rateArray.push(maturationsPerYear64to65);
population45To64.maturationsPerYear64to65 = maturationsPerYear64to65;
maturationsPerYear64to65.population45To64 = population45To64;
maturationsPerYear64to65.mortality45To64 = mortality45To64;

const population65AndOver = new Population65AndOver(startTime, dt);
qArray[14] = population65AndOver;
levelArray.push(population65AndOver);
population.population65AndOver = population65AndOver;
population65AndOver.maturationsPerYear64To65 = maturationsPerYear64to65;

const deathsPerYear65AndOver = new DeathsPerYear65AndOver();
qArray[15] = deathsPerYear65AndOver;
rateArray.push(deathsPerYear65AndOver);
population65AndOver.deathsPerYear65AndOver = deathsPerYear65AndOver;
deathsPerYear65AndOver.population65AndOver = population65AndOver;

const mortality65AndOver = new Mortality65AndOver();
qArray[16] = mortality65AndOver;
auxArray.push(mortality65AndOver);
deathsPerYear65AndOver.mortality65AndOver = mortality65AndOver;

// The Death-Rate Subsector

const deathsPerYear = new DeathsPerYear();
qArray[17] = deathsPerYear;
auxArray.push(deathsPerYear);
deathsPerYear.deathsPerYear0To14 = deathsPerYear0To14;
deathsPerYear.deathsPerYear15To44 = deathsPerYear15To44;
deathsPerYear.deathsPerYear45To64 = deathsPerYear45To64;
deathsPerYear.deathsPerYear65AndOver = deathsPerYear65AndOver;

const crudeDeathRate = new CrudeDeathRate();
qArray[18] = crudeDeathRate;
auxArray.push(crudeDeathRate);
crudeDeathRate.deathsPerYear = deathsPerYear;
crudeDeathRate.population = population;

const lifeExpectancy = new LifeExpectancy();
qArray[19] = lifeExpectancy;
auxArray.push(lifeExpectancy);
mortality0To14.lifeExpectancy = lifeExpectancy;
mortality15To44.lifeExpectancy = lifeExpectancy;
mortality45To64.lifeExpectancy = lifeExpectancy;
mortality65AndOver.lifeExpectancy = lifeExpectancy;

const subsistenceFoodPerCapitaK = 230; // kilograms per person-year, used in eqns 20, 127
const lifetimeMultiplierFromFood = new LifetimeMultiplierFromFood(subsistenceFoodPerCapitaK);
qArray[20] = lifetimeMultiplierFromFood;
auxArray.push(lifetimeMultiplierFromFood);
lifeExpectancy.lifetimeMultiplierFromFood = lifetimeMultiplierFromFood;

const healthServicesAllocationsPerCapita = new HealthServicesAllocationPerCapita();
qArray[21] = healthServicesAllocationsPerCapita;
auxArray.push(healthServicesAllocationsPerCapita);

const effectiveHealthServicesPerCapitaImpactDelay = 20; // years, used in eqn 22
const effectiveHealthServicesPerCapita = new EffectiveHealthServicesPerCapita(effectiveHealthServicesPerCapitaImpactDelay);
qArray[22] = effectiveHealthServicesPerCapita;
auxArray.push(effectiveHealthServicesPerCapita);
effectiveHealthServicesPerCapita.healthServicesAllocationsPerCapita = healthServicesAllocationsPerCapita;

const lifetimeMultiplierFromHealthServices = new LifetimeMultiplierFromHealthServices();
qArray[23] = lifetimeMultiplierFromHealthServices;
auxArray.push(lifetimeMultiplierFromHealthServices);
lifeExpectancy.lifetimeMultiplierFromHealthServices = lifetimeMultiplierFromHealthServices;
lifetimeMultiplierFromHealthServices.t = t;

var lifetimeMultiplierFromHealthServicesBefore = new Table("lifetimeMultiplierFromHealthServicesBefore", 24, [1, 1.1, 1.4, 1.6, 1.7, 1.8], 0, 100, 20);
lifetimeMultiplierFromHealthServicesBefore.units = "dimensionless";
lifetimeMultiplierFromHealthServicesBefore.dependencies = ["effectiveHealthServicesPerCapita"];
lifetimeMultiplierFromHealthServicesBefore.updateFn = function () {
  return effectiveHealthServicesPerCapita.k;
};
qArray[24] = lifetimeMultiplierFromHealthServicesBefore;
auxArray.push(lifetimeMultiplierFromHealthServicesBefore);
lifetimeMultiplierFromHealthServices.lifetimeMultiplierFromHealthServicesBefore = lifetimeMultiplierFromHealthServicesBefore;

var lifetimeMultiplierFromHealthServicesAfter = new Table("lifetimeMultiplierFromHealthServicesAfter", 25, [1, 1.4, 1.6, 1.8, 1.95, 2.0], 0, 100, 20);
lifetimeMultiplierFromHealthServicesAfter.units = "dimensionless";
lifetimeMultiplierFromHealthServicesAfter.dependencies = ["effectiveHealthServicesPerCapita"];
lifetimeMultiplierFromHealthServicesAfter.updateFn = function () {
  return effectiveHealthServicesPerCapita.k;
};
qArray[25] = lifetimeMultiplierFromHealthServicesAfter;
auxArray.push(lifetimeMultiplierFromHealthServicesAfter);
lifetimeMultiplierFromHealthServices.lifetimeMultiplierFromHealthServicesAfter = lifetimeMultiplierFromHealthServicesAfter;

var fractionOfPopulationUrban = new Table("fractionOfPopulationUrban", 26, [0, 0.2, 0.4, 0.5, 0.58, 0.65, 0.72, 0.78, 0.8], 0, 1.6e10, 2.0e9);
fractionOfPopulationUrban.units = "dimensionless";
fractionOfPopulationUrban.dependencies = ["population"];
fractionOfPopulationUrban.updateFn = function () {
  return population.k;
};
qArray[26] = fractionOfPopulationUrban;
auxArray.push(fractionOfPopulationUrban);

var crowdingMultiplierFromIndustrialization = new Table(
  "crowdingMultiplierFromIndustrialization",
  27,
  [0.5, 0.05, -0.1, -0.08, -0.02, 0.05, 0.1, 0.15, 0.2],
  0,
  1600,
  200
);
crowdingMultiplierFromIndustrialization.units = "dimensionless";
crowdingMultiplierFromIndustrialization.dependencies = ["industrialOutputPerCapita"];
crowdingMultiplierFromIndustrialization.updateFn = function () {
  return industrialOutputPerCapita.k;
};
qArray[27] = crowdingMultiplierFromIndustrialization;
auxArray.push(crowdingMultiplierFromIndustrialization);

var lifetimeMultiplierFromCrowding = new Aux("lifetimeMultiplierFromCrowding", 28);
lifetimeMultiplierFromCrowding.units = "dimensionless";
lifetimeMultiplierFromCrowding.updateFn = function () {
  return 1 - crowdingMultiplierFromIndustrialization.k * fractionOfPopulationUrban.k;
};
qArray[28] = lifetimeMultiplierFromCrowding;
auxArray.push(lifetimeMultiplierFromCrowding);
lifeExpectancy.lifetimeMultiplierFromCrowding = lifetimeMultiplierFromCrowding;

var lifetimeMultiplierFromPollution = new Table(
  "lifetimeMultiplierFromPollution",
  29,
  [1.0, 0.99, 0.97, 0.95, 0.9, 0.85, 0.75, 0.65, 0.55, 0.4, 0.2],
  0,
  100,
  10
);
lifetimeMultiplierFromPollution.units = "dimensionless";
lifetimeMultiplierFromPollution.dependencies = ["indexOfPersistentPollution"];
lifetimeMultiplierFromPollution.updateFn = function () {
  return indexOfPersistentPollution.k;
};
qArray[29] = lifetimeMultiplierFromPollution;
auxArray.push(lifetimeMultiplierFromPollution);
lifeExpectancy.lifetimeMultiplierFromPollution = lifetimeMultiplierFromPollution;

// The Birth-Rate Subsector

let birthsPerYear = new Rate("birthsPerYear", 30);
birthsPerYear.units = "persons per year";
birthsPerYear.plotThisVar = true;
birthsPerYear.reproductiveLifetime = 30; // years
birthsPerYear.populationEquilibriumTime = 4000; // year
birthsPerYear.updateFn = function () {
  var after = deathsPerYear.k;
  var before = (totalFertility.k * population15To44.k * 0.5) / birthsPerYear.reproductiveLifetime;
  return clip(after, before, t, birthsPerYear.populationEquilibriumTime);
};
qArray[30] = birthsPerYear;
rateArray.push(birthsPerYear);
population0To14.birthsPerYear = birthsPerYear;

var crudeBirthRate = new Aux("crudeBirthRate", 31);
crudeBirthRate.units = "births per 1000 person-years";
crudeBirthRate.dependencies = ["population"];
crudeBirthRate.plotColor = "#f6f648";
crudeBirthRate.plotMin = 0;
crudeBirthRate.plotMax = 50;
crudeBirthRate.updateFn = function () {
  return (1000 * birthsPerYear.j) / population.k;
};
qArray[31] = crudeBirthRate;
auxArray.push(crudeBirthRate);

var totalFertility = new Aux("totalFertility", 32);
totalFertility.units = "dimensionless";
totalFertility.dependencies = ["maxTotalFertility", "fertilityControlEffectiveness", "desiredTotalFertility"];
totalFertility.updateFn = function () {
  return Math.min(maxTotalFertility.k, maxTotalFertility.k * (1 - fertilityControlEffectiveness.k) + desiredTotalFertility.k * fertilityControlEffectiveness.k);
};
qArray[32] = totalFertility;
auxArray.push(totalFertility);

var maxTotalFertility = new Aux("maxTotalFertility", 33);
maxTotalFertility.units = "dimensionless";
maxTotalFertility.dependencies = ["fecundityMultiplier"];
maxTotalFertility.normal = 12; // dimensionless
maxTotalFertility.updateFn = function () {
  return maxTotalFertility.normal * fecundityMultiplier.k;
};
qArray[33] = maxTotalFertility;
auxArray.push(maxTotalFertility);

var fecundityMultiplier = new Table("fecundityMultiplier", 34, [0.0, 0.2, 0.4, 0.6, 0.8, 0.9, 1.0, 1.05, 1.1], 0, 80, 10);
fecundityMultiplier.units = "dimensionless";
fecundityMultiplier.dependencies = ["lifeExpectancy"];
fecundityMultiplier.updateFn = function () {
  return lifeExpectancy.k;
};
qArray[34] = fecundityMultiplier;
auxArray.push(fecundityMultiplier);

var desiredTotalFertility = new Aux("desiredTotalFertility", 35);
desiredTotalFertility.units = "dimensionless";
desiredTotalFertility.dependencies = ["desiredCompletedFamilySize", "compensatoryMultiplierFromPerceivedLifeExpectancy"];
desiredTotalFertility.updateFn = function () {
  return desiredCompletedFamilySize.k * compensatoryMultiplierFromPerceivedLifeExpectancy.k;
};
qArray[35] = desiredTotalFertility;
auxArray.push(desiredTotalFertility);

var compensatoryMultiplierFromPerceivedLifeExpectancy = new Table(
  "compensatoryMultiplierFromPerceivedLifeExpectancy",
  36,
  [3.0, 2.1, 1.6, 1.4, 1.3, 1.2, 1.1, 1.05, 1.0],
  0,
  80,
  10
);
compensatoryMultiplierFromPerceivedLifeExpectancy.units = "dimensionless";
compensatoryMultiplierFromPerceivedLifeExpectancy.dependencies = ["perceivedLifeExpectancy"];
compensatoryMultiplierFromPerceivedLifeExpectancy.updateFn = function () {
  return perceivedLifeExpectancy.k;
};
qArray[36] = compensatoryMultiplierFromPerceivedLifeExpectancy;
auxArray.push(compensatoryMultiplierFromPerceivedLifeExpectancy);

var lifetimePerceptionDelayK = 20; // years, used in eqn 37

var perceivedLifeExpectancy = new Delay3("perceivedLifeExpectancy", 37, lifetimePerceptionDelayK);
perceivedLifeExpectancy.units = "years";
perceivedLifeExpectancy.dependencies = ["lifeExpectancy"];
perceivedLifeExpectancy.initFn = function () {
  return lifeExpectancy;
};
qArray[37] = perceivedLifeExpectancy;
auxArray.push(perceivedLifeExpectancy);

var desiredCompletedFamilySize = new Aux("desiredCompletedFamilySize", 38);
desiredCompletedFamilySize.units = "dimensionless"; // not persons?
desiredCompletedFamilySize.dependencies = ["familyResponseToSocialNorm", "socialFamilySizeNorm"];
desiredCompletedFamilySize.normal = 4.0;
qArray[38] = desiredCompletedFamilySize;
auxArray.push(desiredCompletedFamilySize);

const zeroPopulationGrowthTargetYear = 4000;

desiredCompletedFamilySize.updateFn = function () {
  return clip(2.0, desiredCompletedFamilySize.normal * familyResponseToSocialNorm.k * socialFamilySizeNorm.k, t, zeroPopulationGrowthTargetYear);
};

var socialFamilySizeNorm = new Table("socialFamilySizeNorm", 39, [1.25, 1, 0.9, 0.8, 0.75], 0, 800, 200);
socialFamilySizeNorm.units = "dimensionless";
socialFamilySizeNorm.dependencies = ["delayedIndustrialOutputPerCapita"];
socialFamilySizeNorm.updateFn = function () {
  return delayedIndustrialOutputPerCapita.k;
};
qArray[39] = socialFamilySizeNorm;
auxArray.push(socialFamilySizeNorm);

var socialAdjustmentDelayK = 20; // years, used in eqn 40

var delayedIndustrialOutputPerCapita = new Delay3("delayedIndustrialOutputPerCapita", 40, socialAdjustmentDelayK);
delayedIndustrialOutputPerCapita.units = "dollars per person-year";
delayedIndustrialOutputPerCapita.dependencies = ["industrialOutputPerCapita"];
delayedIndustrialOutputPerCapita.initFn = function () {
  return industrialOutputPerCapita;
};
qArray[40] = delayedIndustrialOutputPerCapita;
auxArray.push(delayedIndustrialOutputPerCapita);

var familyResponseToSocialNorm = new Table("familyResponseToSocialNorm", 41, [0.5, 0.6, 0.7, 0.85, 1.0], -0.2, 0.2, 0.1);
familyResponseToSocialNorm.units = "dimensionless";
familyResponseToSocialNorm.dependencies = ["familyIncomeExpectation"];
familyResponseToSocialNorm.updateFn = function () {
  return familyIncomeExpectation.k;
};
qArray[41] = familyResponseToSocialNorm;
auxArray.push(familyResponseToSocialNorm);

var familyIncomeExpectation = new Aux("familyIncomeExpectation", 42);
familyIncomeExpectation.units = "dimensionless";
familyIncomeExpectation.dependencies = ["industrialOutputPerCapita", "averageIndustrialOutputPerCapita"];
familyIncomeExpectation.updateFn = function () {
  return (industrialOutputPerCapita.k - averageIndustrialOutputPerCapita.k) / averageIndustrialOutputPerCapita.k;
};
qArray[42] = familyIncomeExpectation;
auxArray.push(familyIncomeExpectation);

var incomeExpectationAveragingTimeK = 3; // years, used in eqn 43

var averageIndustrialOutputPerCapita = new Smooth("averageIndustrialOutputPerCapita", 43, incomeExpectationAveragingTimeK);
averageIndustrialOutputPerCapita.units = "dollars per person-year";
averageIndustrialOutputPerCapita.dependencies = ["industrialOutputPerCapita"];
averageIndustrialOutputPerCapita.initFn = function () {
  return industrialOutputPerCapita;
};
qArray[43] = averageIndustrialOutputPerCapita;
auxArray.push(averageIndustrialOutputPerCapita);

var needForFertilityControl = new Aux("needForFertilityControl", 44);
needForFertilityControl.units = "dimensionless";
needForFertilityControl.dependencies = ["maxTotalFertility", "desiredTotalFertility"];
needForFertilityControl.updateFn = function () {
  return maxTotalFertility.k / desiredTotalFertility.k - 1;
};
qArray[44] = needForFertilityControl;
auxArray.push(needForFertilityControl);

var fertilityControlEffectiveness = new Table("fertilityControlEffectiveness", 45, [0.75, 0.85, 0.9, 0.95, 0.98, 0.99, 1.0], 0, 3, 0.5);
fertilityControlEffectiveness.units = "dimensionless";
fertilityControlEffectiveness.dependencies = ["fertilityControlFacilitiesPerCapita"];
fertilityControlEffectiveness.updateFn = function () {
  return fertilityControlFacilitiesPerCapita.k;
};
qArray[45] = fertilityControlEffectiveness;
auxArray.push(fertilityControlEffectiveness);

var healthServicesImpactDelayK = 20; // years, for eqn 46

var fertilityControlFacilitiesPerCapita = new Delay3("fertilityControlFacilitiesPerCapita", 46, healthServicesImpactDelayK);
fertilityControlFacilitiesPerCapita.units = "dollars per person-year";
fertilityControlFacilitiesPerCapita.dependencies = ["fertilityControlAllocationPerCapita"];
fertilityControlFacilitiesPerCapita.initFn = function () {
  return fertilityControlAllocationPerCapita;
};
qArray[46] = fertilityControlFacilitiesPerCapita;
auxArray.push(fertilityControlFacilitiesPerCapita);

var fertilityControlAllocationPerCapita = new Aux("fertilityControlAllocationPerCapita", 47);
fertilityControlAllocationPerCapita.units = "dollars per person-year";
fertilityControlAllocationPerCapita.dependencies = ["serviceOutputPerCapita", "fractionOfServicesAllocatedToFertilityControl"];
fertilityControlAllocationPerCapita.updateFn = function () {
  return fractionOfServicesAllocatedToFertilityControl.k * serviceOutputPerCapita.k;
};
qArray[47] = fertilityControlAllocationPerCapita;
auxArray.push(fertilityControlAllocationPerCapita);

var fractionOfServicesAllocatedToFertilityControl = new Table(
  "fractionOfServicesAllocatedToFertilityControl",
  48,
  [0.0, 0.005, 0.015, 0.025, 0.03, 0.035],
  0,
  10,
  2
);
fractionOfServicesAllocatedToFertilityControl.units = "dimensionless";
fractionOfServicesAllocatedToFertilityControl.dependencies = ["needForFertilityControl"];
fractionOfServicesAllocatedToFertilityControl.updateFn = function () {
  return needForFertilityControl.k;
};
qArray[48] = fractionOfServicesAllocatedToFertilityControl;
auxArray.push(fractionOfServicesAllocatedToFertilityControl);

// THE CAPITAL SECTOR

// The Industrial Subsector

var industrialOutputPerCapita = new Aux("industrialOutputPerCapita", 49);
industrialOutputPerCapita.units = "dollars per person-year";
industrialOutputPerCapita.dependencies = ["industrialOutput", "population"];
industrialOutputPerCapita.plotColor = "#4a6892";
industrialOutputPerCapita.plotMin = 0;
industrialOutputPerCapita.plotMax = 500;
industrialOutputPerCapita.updateFn = function () {
  return industrialOutput.k / population.k;
};
qArray[49] = industrialOutputPerCapita;
auxArray.push(industrialOutputPerCapita);

var industrialOutput = new Aux("industrialOutput", 50);
industrialOutput.units = "dollars per year";
industrialOutput.valueIn1970 = 7.9e11; // for eqns 106 and 107
industrialOutput.dependencies = ["fractionOfCapitalAllocatedToObtainingResources", "capitalUtilizationFraction", "industrialCapitalOutputRatio"];
industrialOutput.updateFn = function () {
  return (industrialCapital.k * (1 - fractionOfCapitalAllocatedToObtainingResources.k) * capitalUtilizationFraction.k) / industrialCapitalOutputRatio.k;
};
qArray[50] = industrialOutput;
auxArray.push(industrialOutput);

var industrialCapitalOutputRatio = new Aux("industrialCapitalOutputRatio", 51);
industrialCapitalOutputRatio.units = "years";
industrialCapitalOutputRatio.before = 3;
industrialCapitalOutputRatio.after = 3;
industrialCapitalOutputRatio.updateFn = function () {
  return clip(industrialCapitalOutputRatio.after, industrialCapitalOutputRatio.before, t, policyYear);
};
qArray[51] = industrialCapitalOutputRatio;
auxArray.push(industrialCapitalOutputRatio);

var industrialCapital = new Level("industrialCapital", 52, 2.1e11, startTime, qArray, levelArray);
industrialCapital.units = "dollars";
industrialCapital.updateFn = function () {
  return industrialCapital.j + dt * (industrialCapitalInvestmentRate.j - industrialCapitalDepreciationRate.j);
};
qArray[52] = industrialCapital;
levelArray.push(industrialCapital);

var industrialCapitalDepreciationRate = new Rate("industrialCapitalDepreciationRate", 53);
industrialCapitalDepreciationRate.units = "dollars per year";
industrialCapitalDepreciationRate.updateFn = function () {
  return industrialCapital.k / averageLifetimeOfIndustrialCapital.k;
};
qArray[53] = industrialCapitalDepreciationRate;
rateArray.push(industrialCapitalDepreciationRate);

var averageLifetimeOfIndustrialCapital = new Aux("averageLifetimeOfIndustrialCapital", 54);
averageLifetimeOfIndustrialCapital.units = "years";
averageLifetimeOfIndustrialCapital.before = 14;
averageLifetimeOfIndustrialCapital.after = 14;
averageLifetimeOfIndustrialCapital.updateFn = function () {
  return clip(averageLifetimeOfIndustrialCapital.after, averageLifetimeOfIndustrialCapital.before, t, policyYear);
};
qArray[54] = averageLifetimeOfIndustrialCapital;
auxArray.push(averageLifetimeOfIndustrialCapital);

var industrialCapitalInvestmentRate = new Rate("industrialCapitalInvestmentRate", 55);
industrialCapitalInvestmentRate.units = "dollars per year";
industrialCapitalInvestmentRate.updateFn = function () {
  return industrialOutput.k * fractionOfIndustrialOutputAllocatedToIndustry.k;
};
qArray[55] = industrialCapitalInvestmentRate;
rateArray.push(industrialCapitalInvestmentRate);

var fractionOfIndustrialOutputAllocatedToIndustry = new Aux("fractionOfIndustrialOutputAllocatedToIndustry", 56);
fractionOfIndustrialOutputAllocatedToIndustry.units = "dimensionless";
fractionOfIndustrialOutputAllocatedToIndustry.dependencies = [
  "fractionOfIndustrialOutputAllocatedToAgriculture",
  "fractionOfIndustrialOutputAllocatedToServices",
  "fractionOfIndustrialOutputAllocatedToConsumption",
];
fractionOfIndustrialOutputAllocatedToIndustry.updateFn = function () {
  return (
    1 -
    fractionOfIndustrialOutputAllocatedToAgriculture.k -
    fractionOfIndustrialOutputAllocatedToServices.k -
    fractionOfIndustrialOutputAllocatedToConsumption.k
  );
};
qArray[56] = fractionOfIndustrialOutputAllocatedToIndustry;
auxArray.push(fractionOfIndustrialOutputAllocatedToIndustry);

var fractionOfIndustrialOutputAllocatedToConsumption = new Aux("fractionOfIndustrialOutputAllocatedToConsumption", 57);
fractionOfIndustrialOutputAllocatedToConsumption.units = "dimensionless";
fractionOfIndustrialOutputAllocatedToConsumption.dependencies = ["fractionOfIndustrialOutputAllocatedToConsumptionVariable"];
fractionOfIndustrialOutputAllocatedToConsumption.industrialEquilibriumTime = 4000; // year
fractionOfIndustrialOutputAllocatedToConsumption.updateFn = function () {
  return clip(
    fractionOfIndustrialOutputAllocatedToConsumptionVariable.k,
    fractionOfIndustrialOutputAllocatedToConsumptionConstant.k,
    t,
    fractionOfIndustrialOutputAllocatedToConsumption.industrialEquilibriumTime
  );
};
qArray[57] = fractionOfIndustrialOutputAllocatedToConsumption;
auxArray.push(fractionOfIndustrialOutputAllocatedToConsumption);

var fractionOfIndustrialOutputAllocatedToConsumptionConstant = new Aux("fractionOfIndustrialOutputAllocatedToConsumptionConstant", 58);
fractionOfIndustrialOutputAllocatedToConsumptionConstant.units = "dimensionless";
fractionOfIndustrialOutputAllocatedToConsumptionConstant.before = 0.43;
fractionOfIndustrialOutputAllocatedToConsumptionConstant.after = 0.43;
fractionOfIndustrialOutputAllocatedToConsumptionConstant.updateFn = function () {
  return clip(fractionOfIndustrialOutputAllocatedToConsumptionConstant.after, fractionOfIndustrialOutputAllocatedToConsumptionConstant.before, t, policyYear);
};
qArray[58] = fractionOfIndustrialOutputAllocatedToConsumptionConstant;
auxArray.push(fractionOfIndustrialOutputAllocatedToConsumptionConstant);

var fractionOfIndustrialOutputAllocatedToConsumptionVariable = new Table(
  "fractionOfIndustrialOutputAllocatedToConsumptionVariable",
  59,
  [0.3, 0.32, 0.34, 0.36, 0.38, 0.43, 0.73, 0.77, 0.81, 0.82, 0.83],
  0,
  2,
  0.2
);
fractionOfIndustrialOutputAllocatedToConsumptionVariable.units = "dimensionless";
fractionOfIndustrialOutputAllocatedToConsumptionVariable.dependencies = ["industrialOutputPerCapita"];
fractionOfIndustrialOutputAllocatedToConsumptionVariable.industrialOutputPerCapitaDesired = 400;
fractionOfIndustrialOutputAllocatedToConsumptionVariable.updateFn = function () {
  return industrialOutputPerCapita.k / fractionOfIndustrialOutputAllocatedToConsumptionVariable.industrialOutputPerCapitaDesired;
};
qArray[59] = fractionOfIndustrialOutputAllocatedToConsumptionVariable;
auxArray.push(fractionOfIndustrialOutputAllocatedToConsumptionVariable);

// The Service Subsector

var indicatedServiceOutputPerCapita = new Aux("indicatedServiceOutputPerCapita", 60);
indicatedServiceOutputPerCapita.units = "dollars per person-year";
indicatedServiceOutputPerCapita.dependencies = ["indicatedServiceOutputPerCapitaAfter", "indicatedServiceOutputPerCapitaBefore"];
indicatedServiceOutputPerCapita.updateFn = function () {
  return clip(indicatedServiceOutputPerCapitaAfter.k, indicatedServiceOutputPerCapitaBefore.k, t, policyYear);
};
qArray[60] = indicatedServiceOutputPerCapita;
auxArray.push(indicatedServiceOutputPerCapita);

var indicatedServiceOutputPerCapitaBefore = new Table(
  "indicatedServiceOutputPerCapitaBefore",
  61,
  [40, 300, 640, 1000, 1220, 1450, 1650, 1800, 2000],
  0,
  1600,
  200
);
indicatedServiceOutputPerCapitaBefore.units = "dollars per person-year";
indicatedServiceOutputPerCapitaBefore.dependencies = ["industrialOutputPerCapita"];
indicatedServiceOutputPerCapitaBefore.updateFn = function () {
  return industrialOutputPerCapita.k;
};
qArray[61] = indicatedServiceOutputPerCapitaBefore;
auxArray.push(indicatedServiceOutputPerCapitaBefore);

var indicatedServiceOutputPerCapitaAfter = new Table(
  "indicatedServiceOutputPerCapitaAfter",
  62,
  [40, 300, 640, 1000, 1220, 1450, 1650, 1800, 2000],
  0,
  1600,
  200
);
indicatedServiceOutputPerCapitaAfter.units = "dollars per person-year";
indicatedServiceOutputPerCapitaAfter.dependencies = ["industrialOutputPerCapita"];
indicatedServiceOutputPerCapitaAfter.updateFn = function () {
  return industrialOutputPerCapita.k;
};
qArray[62] = indicatedServiceOutputPerCapitaAfter;
auxArray.push(indicatedServiceOutputPerCapitaAfter);

var fractionOfIndustrialOutputAllocatedToServices = new Aux("fractionOfIndustrialOutputAllocatedToServices", 63);
fractionOfIndustrialOutputAllocatedToServices.units = "dimensionless";
fractionOfIndustrialOutputAllocatedToServices.dependencies = [
  "fractionOfIndustrialOutputAllocatedToServicesBefore",
  "fractionOfIndustrialOutputAllocatedToServicesAfter",
];
fractionOfIndustrialOutputAllocatedToServices.updateFn = function () {
  return clip(fractionOfIndustrialOutputAllocatedToServicesAfter.k, fractionOfIndustrialOutputAllocatedToServicesBefore.k, t, policyYear);
};
qArray[63] = fractionOfIndustrialOutputAllocatedToServices;
auxArray.push(fractionOfIndustrialOutputAllocatedToServices);

var fractionOfIndustrialOutputAllocatedToServicesBefore = new Table(
  "fractionOfIndustrialOutputAllocatedToServicesBefore",
  64,
  [0.3, 0.2, 0.1, 0.05, 0],
  0,
  2,
  0.5
);
fractionOfIndustrialOutputAllocatedToServicesBefore.units = "dimensionless";
fractionOfIndustrialOutputAllocatedToServicesBefore.dependencies = ["serviceOutputPerCapita", "indicatedServiceOutputPerCapita"];
fractionOfIndustrialOutputAllocatedToServicesBefore.updateFn = function () {
  return serviceOutputPerCapita.k / indicatedServiceOutputPerCapita.k;
};
qArray[64] = fractionOfIndustrialOutputAllocatedToServicesBefore;
auxArray.push(fractionOfIndustrialOutputAllocatedToServicesBefore);

var fractionOfIndustrialOutputAllocatedToServicesAfter = new Table(
  "fractionOfIndustrialOutputAllocatedToServicesAfter",
  65,
  [0.3, 0.2, 0.1, 0.05, 0],
  0,
  2,
  0.5
);
fractionOfIndustrialOutputAllocatedToServicesAfter.units = "dimensionless";
fractionOfIndustrialOutputAllocatedToServicesAfter.dependencies = ["serviceOutputPerCapita", "indicatedServiceOutputPerCapita"];
fractionOfIndustrialOutputAllocatedToServicesAfter.updateFn = function () {
  return serviceOutputPerCapita.k / indicatedServiceOutputPerCapita.k;
};
qArray[65] = fractionOfIndustrialOutputAllocatedToServicesAfter;
auxArray.push(fractionOfIndustrialOutputAllocatedToServicesAfter);

var serviceCapitalInvestmentRate = new Rate("serviceCapitalInvestmentRate", 66);
serviceCapitalInvestmentRate.units = "dollars per year";
serviceCapitalInvestmentRate.updateFn = function () {
  return industrialOutput.k * fractionOfIndustrialOutputAllocatedToServices.k;
};
qArray[66] = serviceCapitalInvestmentRate;
rateArray.push(serviceCapitalInvestmentRate);

var serviceCapital = new Level("serviceCapital", 67, 1.44e11, startTime, qArray, levelArray);
serviceCapital.units = "dollars";
serviceCapital.updateFn = function () {
  return serviceCapital.j + dt * (serviceCapitalInvestmentRate.j - serviceCapitalDepreciationRate.j);
};
qArray[67] = serviceCapital;
levelArray.push(serviceCapital);

var serviceCapitalDepreciationRate = new Rate("serviceCapitalDepreciationRate", 68);
serviceCapitalDepreciationRate.units = "dollars per year";
serviceCapitalDepreciationRate.updateFn = function () {
  return serviceCapital.k / averageLifetimeOfServiceCapital.k;
};
qArray[68] = serviceCapitalDepreciationRate;
rateArray.push(serviceCapitalDepreciationRate);

var averageLifetimeOfServiceCapital = new Aux("averageLifetimeOfServiceCapital", 69);
averageLifetimeOfServiceCapital.units = "years";
averageLifetimeOfServiceCapital.before = 20; // years
averageLifetimeOfServiceCapital.after = 20; // years
averageLifetimeOfServiceCapital.updateFn = function () {
  return clip(averageLifetimeOfServiceCapital.after, averageLifetimeOfServiceCapital.before, t, policyYear);
};
qArray[69] = averageLifetimeOfServiceCapital;
auxArray.push(averageLifetimeOfServiceCapital);

var serviceOutput = new Aux("serviceOutput", 70);
serviceOutput.units = "dollars per year";
serviceOutput.plotColor = "#4a8a91";
serviceOutput.plotMin = 0;
serviceOutput.plotMax = 1.0e13;
serviceOutput.dependencies = ["capitalUtilizationFraction", "serviceCapitalOutputRatio"];
serviceOutput.updateFn = function () {
  return (serviceCapital.k * capitalUtilizationFraction.k) / serviceCapitalOutputRatio.k;
};
qArray[70] = serviceOutput;
auxArray.push(serviceOutput);

var serviceOutputPerCapita = new Aux("serviceOutputPerCapita", 71);
serviceOutputPerCapita.units = "dollars per person-year";
serviceOutputPerCapita.dependencies = ["serviceOutput", "population"];
serviceOutputPerCapita.updateFn = function () {
  return serviceOutput.k / population.k;
};
qArray[71] = serviceOutputPerCapita;
auxArray.push(serviceOutputPerCapita);
healthServicesAllocationsPerCapita.serviceOutputPerCapita = serviceOutputPerCapita;

var serviceCapitalOutputRatio = new Aux("serviceCapitalOutputRatio", 72);
serviceCapitalOutputRatio.units = "years";
serviceCapitalOutputRatio.before = 1;
serviceCapitalOutputRatio.after = 1;
serviceCapitalOutputRatio.updateFn = function () {
  return clip(serviceCapitalOutputRatio.after, serviceCapitalOutputRatio.before, t, policyYear);
};
qArray[72] = serviceCapitalOutputRatio;
auxArray.push(serviceCapitalOutputRatio);

// The Jobs Subsector

var jobs = new Aux("jobs", 73);
jobs.units = "persons";
jobs.dependencies = ["potentialJobsInIndustrialSector", "potentialJobsInAgriculturalSector", "potentialJobsInServiceSector"];
jobs.updateFn = function () {
  return potentialJobsInIndustrialSector.k + potentialJobsInAgriculturalSector.k + potentialJobsInServiceSector.k;
};
qArray[73] = jobs;
auxArray.push(jobs);

var potentialJobsInIndustrialSector = new Aux("potentialJobsInIndustrialSector", 74);
potentialJobsInIndustrialSector.units = "persons";
potentialJobsInIndustrialSector.dependencies = ["jobsPerIndustrialCapitalUnit"];
potentialJobsInIndustrialSector.updateFn = function () {
  return industrialCapital.k * jobsPerIndustrialCapitalUnit.k;
};
qArray[74] = potentialJobsInIndustrialSector;
auxArray.push(potentialJobsInIndustrialSector);

var jobsPerIndustrialCapitalUnit = new Table("jobsPerIndustrialCapitalUnit", 75, [0.00037, 0.00018, 0.00012, 0.00009, 0.00007, 0.00006], 50, 800, 150);
jobsPerIndustrialCapitalUnit.units = "persons per dollar";
jobsPerIndustrialCapitalUnit.dependencies = ["industrialOutputPerCapita"];
jobsPerIndustrialCapitalUnit.updateFn = function () {
  return industrialOutputPerCapita.k;
};
qArray[75] = jobsPerIndustrialCapitalUnit;
auxArray.push(jobsPerIndustrialCapitalUnit);

var potentialJobsInServiceSector = new Aux("potentialJobsInServiceSector", 76);
potentialJobsInServiceSector.units = "persons";
potentialJobsInServiceSector.dependencies = ["jobsPerServiceCapitalUnit"];
potentialJobsInServiceSector.updateFn = function () {
  return serviceCapital.k * jobsPerServiceCapitalUnit.k;
};
qArray[76] = potentialJobsInServiceSector;
auxArray.push(potentialJobsInServiceSector);

var jobsPerServiceCapitalUnit = new Table("jobsPerServiceCapitalUnit", 77, [0.0011, 0.0006, 0.00035, 0.0002, 0.00015, 0.00015], 50, 800, 150);
jobsPerServiceCapitalUnit.units = "persons per dollar";
jobsPerServiceCapitalUnit.dependencies = ["serviceOutputPerCapita"];
jobsPerServiceCapitalUnit.updateFn = function () {
  return serviceOutputPerCapita.k;
};
qArray[77] = jobsPerServiceCapitalUnit;
auxArray.push(jobsPerServiceCapitalUnit);

var potentialJobsInAgriculturalSector = new Aux("potentialJobsInAgriculturalSector", 78);
potentialJobsInAgriculturalSector.units = "persons";
potentialJobsInAgriculturalSector.dependencies = ["jobsPerHectare"];
potentialJobsInAgriculturalSector.updateFn = function () {
  return arableLand.k * jobsPerHectare.k;
};
qArray[78] = potentialJobsInAgriculturalSector;
auxArray.push(potentialJobsInAgriculturalSector);

var jobsPerHectare = new Table("jobsPerHectare", 79, [2, 0.5, 0.4, 0.3, 0.27, 0.24, 0.2, 0.2], 2, 30, 4);
jobsPerHectare.units = "persons per hectare";
jobsPerHectare.dependencies = ["agriculturalInputsPerHectare"];
jobsPerHectare.updateFn = function () {
  return agriculturalInputsPerHectare.k;
};
qArray[79] = jobsPerHectare;
auxArray.push(jobsPerHectare);

var laborForce = new Aux("laborForce", 80);
laborForce.units = "persons";
laborForce.participationFraction = 0.75; // dimensionless
laborForce.updateFn = function () {
  return (population15To44.k + population45To64.k) * laborForce.participationFraction;
};
qArray[80] = laborForce;
auxArray.push(laborForce);

var laborUtilizationFraction = new Aux("laborUtilizationFraction", 81);
laborUtilizationFraction.units = "dimensionless";
laborUtilizationFraction.dependencies = ["jobs", "laborForce"];
laborUtilizationFraction.updateFn = function () {
  return jobs.k / laborForce.k;
};
qArray[81] = laborUtilizationFraction;
auxArray.push(laborUtilizationFraction);

var laborUtilizationFractionDelayedDelayTime = 2; // years, eqn 82

var laborUtilizationFractionDelayed = new Smooth("laborUtilizationFractionDelayed", 82, laborUtilizationFractionDelayedDelayTime);
laborUtilizationFractionDelayed.units = "dimensionless";
laborUtilizationFractionDelayed.dependencies = ["laborUtilizationFraction"];
laborUtilizationFractionDelayed.initFn = function () {
  return laborUtilizationFraction;
};
qArray[82] = laborUtilizationFractionDelayed;
auxArray.push(laborUtilizationFractionDelayed);

var capitalUtilizationFraction = new Table("capitalUtilizationFraction", 83, [1.0, 0.9, 0.7, 0.3, 0.1, 0.1], 1, 11, 2);
capitalUtilizationFraction.units = "dimensionless";
capitalUtilizationFraction.dependencies = []; // "laborUtilizationFractionDelayed" removed to break cycle
capitalUtilizationFraction.updateFn = function () {
  return laborUtilizationFractionDelayed.k || 1.0; // to break circularity
};
qArray[83] = capitalUtilizationFraction;
auxArray.push(capitalUtilizationFraction);

// THE AGRICULTURAL SECTOR

// Loop 1: Food from Investment in Land Development

var landFractionCultivated = new Aux("landFractionCultivated", 84);
landFractionCultivated.units = "dimensionless";
landFractionCultivated.potentiallyArableLandTotal = 3.2e9; // hectares, used here and in eqn 97
landFractionCultivated.updateFn = function () {
  return arableLand.k / landFractionCultivated.potentiallyArableLandTotal;
};
qArray[84] = landFractionCultivated;
auxArray.push(landFractionCultivated);

var arableLand = new Level("arableLand", 85, 0.9e9, startTime, qArray, levelArray);
arableLand.units = "hectares";
arableLand.plotColor = "#513210";
arableLand.plotMin = 0;
arableLand.plotMax = 3.0e9;
arableLand.updateFn = function () {
  return arableLand.j + dt * (landDevelopmentRate.j - landErosionRate.j - landRemovalForUrbanIndustrialUse.j);
};
qArray[85] = arableLand;
levelArray.push(arableLand);

var potentiallyArableLand = new Level("potentiallyArableLand", 86, 2.3e9, startTime, qArray, levelArray);
potentiallyArableLand.units = "hectares";
potentiallyArableLand.updateFn = function () {
  return potentiallyArableLand.j + dt * -landDevelopmentRate.j;
};
qArray[86] = potentiallyArableLand;
levelArray.push(potentiallyArableLand);

var food = new Aux("food", 87);
food.units = "kilograms per year";
food.dependencies = ["landYield"];
food.landFractionHarvestedK = 0.7; // dimensionless
food.processingLossK = 0.1; // dimensionless
food.updateFn = function () {
  return landYield.k * arableLand.k * food.landFractionHarvestedK * (1 - food.processingLossK);
};
qArray[87] = food;
auxArray.push(food);

var foodPerCapita = new Aux("foodPerCapita", 88);
foodPerCapita.units = "kilograms per person-year";
foodPerCapita.dependencies = ["food", "population"];
foodPerCapita.plotColor = "#a8c3a5";
foodPerCapita.plotMin = 0;
foodPerCapita.plotMax = 1000;
foodPerCapita.updateFn = function () {
  return food.k / population.k;
};
qArray[88] = foodPerCapita;
auxArray.push(foodPerCapita);
lifetimeMultiplierFromFood.foodPerCapita = foodPerCapita;

var indicatedFoodPerCapita = new Aux("indicatedFoodPerCapita", 89);
indicatedFoodPerCapita.units = "kilograms per person-year";
indicatedFoodPerCapita.dependencies = ["indicatedFoodPerCapitaBefore", "indicatedFoodPerCapitaAfter"];
indicatedFoodPerCapita.updateFn = function () {
  return clip(indicatedFoodPerCapitaAfter.k, indicatedFoodPerCapitaBefore.k, t, policyYear);
};
qArray[89] = indicatedFoodPerCapita;
auxArray.push(indicatedFoodPerCapita);

var indicatedFoodPerCapitaBefore = new Table("indicatedFoodPerCapitaBefore", 90, [230, 480, 690, 850, 970, 1070, 1150, 1210, 1250], 0, 1600, 200);
indicatedFoodPerCapitaBefore.units = "kilograms per person-year";
indicatedFoodPerCapitaBefore.dependencies = ["industrialOutputPerCapita"];
indicatedFoodPerCapitaBefore.updateFn = function () {
  return industrialOutputPerCapita.k;
};
qArray[90] = indicatedFoodPerCapitaBefore;
auxArray.push(indicatedFoodPerCapitaBefore);

var indicatedFoodPerCapitaAfter = new Table("indicatedFoodPerCapitaAfter", 91, [230, 480, 690, 850, 970, 1070, 1150, 1210, 1250], 0, 1600, 200);
indicatedFoodPerCapitaAfter.units = "kilograms per person-year";
indicatedFoodPerCapitaAfter.dependencies = ["industrialOutputPerCapita"];
indicatedFoodPerCapitaAfter.updateFn = function () {
  return industrialOutputPerCapita.k;
};
qArray[91] = indicatedFoodPerCapitaAfter;
auxArray.push(indicatedFoodPerCapitaAfter);

var totalAgriculturalInvestment = new Aux("totalAgriculturalInvestment", 92);
totalAgriculturalInvestment.units = "dollars per year";
totalAgriculturalInvestment.dependencies = ["industrialOutput", "fractionOfIndustrialOutputAllocatedToAgriculture"];
totalAgriculturalInvestment.updateFn = function () {
  return industrialOutput.k * fractionOfIndustrialOutputAllocatedToAgriculture.k;
};
qArray[92] = totalAgriculturalInvestment;
auxArray.push(totalAgriculturalInvestment);

var fractionOfIndustrialOutputAllocatedToAgriculture = new Aux("fractionOfIndustrialOutputAllocatedToAgriculture", 93);
fractionOfIndustrialOutputAllocatedToAgriculture.units = "dimensionless";
fractionOfIndustrialOutputAllocatedToAgriculture.dependencies = [
  "fractionOfIndustrialOutputAllocatedToAgricultureBefore",
  "fractionOfIndustrialOutputAllocatedToAgricultureAfter",
];
fractionOfIndustrialOutputAllocatedToAgriculture.updateFn = function () {
  return clip(fractionOfIndustrialOutputAllocatedToAgricultureAfter.k, fractionOfIndustrialOutputAllocatedToAgricultureBefore.k, t, policyYear);
};
qArray[93] = fractionOfIndustrialOutputAllocatedToAgriculture;
auxArray.push(fractionOfIndustrialOutputAllocatedToAgriculture);

var fractionOfIndustrialOutputAllocatedToAgricultureBefore = new Table(
  "fractionOfIndustrialOutputAllocatedToAgricultureBefore",
  94,
  [0.4, 0.2, 0.1, 0.025, 0, 0],
  0,
  2.5,
  0.5
);
fractionOfIndustrialOutputAllocatedToAgricultureBefore.units = "dimensionless";
fractionOfIndustrialOutputAllocatedToAgricultureBefore.dependencies = ["foodPerCapita", "indicatedFoodPerCapita"];
fractionOfIndustrialOutputAllocatedToAgricultureBefore.updateFn = function () {
  return foodPerCapita.k / indicatedFoodPerCapita.k;
};
qArray[94] = fractionOfIndustrialOutputAllocatedToAgricultureBefore;
auxArray.push(fractionOfIndustrialOutputAllocatedToAgricultureBefore);

var fractionOfIndustrialOutputAllocatedToAgricultureAfter = new Table(
  "fractionOfIndustrialOutputAllocatedToAgricultureAfter",
  95,
  [0.4, 0.2, 0.1, 0.025, 0, 0],
  0,
  2.5,
  0.5
);
fractionOfIndustrialOutputAllocatedToAgricultureAfter.units = "dimensionless";
fractionOfIndustrialOutputAllocatedToAgricultureAfter.dependencies = ["foodPerCapita", "indicatedFoodPerCapita"];
fractionOfIndustrialOutputAllocatedToAgricultureAfter.updateFn = function () {
  return foodPerCapita.k / indicatedFoodPerCapita.k;
};
qArray[95] = fractionOfIndustrialOutputAllocatedToAgricultureAfter;
auxArray.push(fractionOfIndustrialOutputAllocatedToAgricultureAfter);

var landDevelopmentRate = new Rate("landDevelopmentRate", 96);
landDevelopmentRate.units = "hectares per year";
landDevelopmentRate.updateFn = function () {
  return (totalAgriculturalInvestment.k * fractionOfInputsAllocatedToLandDevelopment.k) / developmentCostPerHectare.k;
};
qArray[96] = landDevelopmentRate;
rateArray.push(landDevelopmentRate);

var developmentCostPerHectare = new Table("developmentCostPerHectare", 97, [100000, 7400, 5200, 3500, 2400, 1500, 750, 300, 150, 75, 50], 0, 1.0, 0.1);
developmentCostPerHectare.units = "dollars per hectare";
developmentCostPerHectare.updateFn = function () {
  return potentiallyArableLand.k / landFractionCultivated.potentiallyArableLandTotal;
};
qArray[97] = developmentCostPerHectare;
auxArray.push(developmentCostPerHectare);

// Loop 2: Food from Investment in Agricultural Inputs

var currentAgriculturalInputs = new Aux("currentAgriculturalInputs", 98);
currentAgriculturalInputs.units = "dollars per year";
currentAgriculturalInputs.dependencies = ["totalAgriculturalInvestment", "fractionOfInputsAllocatedToLandDevelopment"];
currentAgriculturalInputs.updateFn = function () {
  return totalAgriculturalInvestment.k * (1 - fractionOfInputsAllocatedToLandDevelopment.k);
};
qArray[98] = currentAgriculturalInputs;
auxArray.push(currentAgriculturalInputs);

var averageLifetimeOfAgriculturalInputsK = 2; // years, eqn 99 (in lieu of 100)

var agriculturalInputs = new Smooth("agriculturalInputs", 99, averageLifetimeOfAgriculturalInputsK);
agriculturalInputs.units = "dollars per year";
agriculturalInputs.dependencies = []; // "currentAgriculturalInputs" removed to break cycle
agriculturalInputs.initFn = function () {
  return currentAgriculturalInputs;
};
agriculturalInputs.initVal = 5.0e9;
qArray[99] = agriculturalInputs;
auxArray.push(agriculturalInputs);

/*
var agriculturalInputs = new Smooth("agriculturalInputs", 99, averageLifetimeOfAgriculturalInputsK);
  agriculturalInputs.units = "dollars per year";
  agriculturalInputs.dependencies = [];   // "currentAgriculturalInputs" removed to break cycle
  agriculturalInputs.initFn = function() { return currentAgriculturalInputs; }
  agriculturalInputs.initVal = 5.0e9;
   = function() {
    agriculturalInputs.theInput = agriculturalInputs.initFn;
    agriculturalInputs.j = agriculturalInputs.k = 5.0e9;
  }
  agriculturalInputs.update = function() {
    if (agriculturalInputs.firstCall) {
      agriculturalInputs.firstCall = false;
      return agriculturalInputs.k;
    }
    else {
      agriculturalInputs.k = agriculturalInputs.j + dt * (agriculturalInputs.theInput.j - agriculturalInputs.j) / agriculturalInputs.del;
      return agriculturalInputs.k;
    }
  }
    qArray[99] = agriculturalInputs;
    auxArray.push(agriculturalInputs);
*/

// note: output of this equation goes unused
var averageLifetimeOfAgriculturalInputs = new Aux("averageLifetimeOfAgriculturalInputs", 100);
averageLifetimeOfAgriculturalInputs.units = "years";
averageLifetimeOfAgriculturalInputs.before = 2;
averageLifetimeOfAgriculturalInputs.after = 2;
averageLifetimeOfAgriculturalInputs.updateFn = function () {
  return clip(this.after, this.before, t, policyYear);
};
qArray[100] = averageLifetimeOfAgriculturalInputs;
auxArray.push(averageLifetimeOfAgriculturalInputs);

var agriculturalInputsPerHectare = new Aux("agriculturalInputsPerHectare", 101);
agriculturalInputsPerHectare.units = "dollars per hectare-year";
agriculturalInputsPerHectare.dependencies = ["agriculturalInputs", "fractionOfInputsAllocatedToLandMaintenance"];
agriculturalInputsPerHectare.updateFn = function () {
  return (agriculturalInputs.k * (1 - fractionOfInputsAllocatedToLandMaintenance.k)) / arableLand.k;
};
qArray[101] = agriculturalInputsPerHectare;
auxArray.push(agriculturalInputsPerHectare);

var landYieldMultiplierFromCapital = new Table(
  "landYieldMultiplierFromCapital",
  102,
  [1, 3, 3.8, 4.4, 4.9, 5.4, 5.7, 6, 6.3, 6.6, 6.9, 7.2, 7.4, 7.6, 7.8, 8, 8.2, 8.4, 8.6, 8.8, 9, 9.2, 9.4, 9.6, 9.8, 10],
  0,
  1000,
  40
);
landYieldMultiplierFromCapital.units = "dimensionless";
landYieldMultiplierFromCapital.dependencies = ["agriculturalInputsPerHectare"];
landYieldMultiplierFromCapital.updateFn = function () {
  return agriculturalInputsPerHectare.k;
};
qArray[102] = landYieldMultiplierFromCapital;
auxArray.push(landYieldMultiplierFromCapital);

var landYield = new Aux("landYield", 103);
landYield.units = "kilograms per hectare-year";
landYield.plotColor = "#185103";
landYield.plotMin = 0;
landYield.plotMax = 3000;
landYield.dependencies = ["landYieldFactor", "landYieldMultiplierFromCapital", "landYieldMultiplierFromAirPollution"];
landYield.updateFn = function () {
  return landYieldFactor.k * landFertility.k * landYieldMultiplierFromCapital.k * landYieldMultiplierFromAirPollution.k;
};
qArray[103] = landYield;
auxArray.push(landYield);

var landYieldFactor = new Aux("landYieldFactor", 104);
landYieldFactor.units = "dimensionless";
landYieldFactor.before = 1;
landYieldFactor.after = 1;
landYieldFactor.updateFn = function () {
  return clip(this.after, this.before, t, policyYear);
};
qArray[104] = landYieldFactor;
auxArray.push(landYieldFactor);

var landYieldMultiplierFromAirPollution = new Aux("landYieldMultiplierFromAirPollution", 105);
landYieldMultiplierFromAirPollution.units = "dimensionless";
landYieldMultiplierFromAirPollution.dependencies = ["landYieldMultiplierFromAirPollutionBefore", "landYieldMultiplierFromAirPollutionAfter"];
landYieldMultiplierFromAirPollution.updateFn = function () {
  return clip(landYieldMultiplierFromAirPollutionAfter.k, landYieldMultiplierFromAirPollutionBefore.k, t, policyYear);
};
qArray[105] = landYieldMultiplierFromAirPollution;
auxArray.push(landYieldMultiplierFromAirPollution);

var landYieldMultiplierFromAirPollutionBefore = new Table("landYieldMultiplierFromAirPollutionBefore", 106, [1, 1, 0.7, 0.4], 0, 30, 10);
landYieldMultiplierFromAirPollutionBefore.units = "dimensionless";
landYieldMultiplierFromAirPollutionBefore.dependencies = ["industrialOutput"];
landYieldMultiplierFromAirPollutionBefore.updateFn = function () {
  return industrialOutput.k / industrialOutput.valueIn1970;
};
qArray[106] = landYieldMultiplierFromAirPollutionBefore;
auxArray.push(landYieldMultiplierFromAirPollutionBefore);

var landYieldMultiplierFromAirPollutionAfter = new Table("landYieldMultiplierFromAirPollutionAfter", 107, [1, 1, 0.7, 0.4], 0, 30, 10);
landYieldMultiplierFromAirPollutionAfter.units = "dimensionless";
landYieldMultiplierFromAirPollutionAfter.dependencies = ["industrialOutput"];
landYieldMultiplierFromAirPollutionAfter.updateFn = function () {
  return industrialOutput.k / industrialOutput.valueIn1970;
};
qArray[107] = landYieldMultiplierFromAirPollutionAfter;
auxArray.push(landYieldMultiplierFromAirPollutionAfter);

// Loops 1 and 2: The Investment Allocation Decision

var fractionOfInputsAllocatedToLandDevelopment = new Table(
  "fractionOfInputsAllocatedToLandDevelopment",
  108,
  [0, 0.05, 0.15, 0.3, 0.5, 0.7, 0.85, 0.95, 1],
  0,
  2,
  0.25
);
fractionOfInputsAllocatedToLandDevelopment.units = "dimensionless";
fractionOfInputsAllocatedToLandDevelopment.dependencies = ["marginalProductivityOfLandDevelopment", "marginalProductivityOfAgriculturalInputs"];
fractionOfInputsAllocatedToLandDevelopment.updateFn = function () {
  return marginalProductivityOfLandDevelopment.k / marginalProductivityOfAgriculturalInputs.k;
};
qArray[108] = fractionOfInputsAllocatedToLandDevelopment;
auxArray.push(fractionOfInputsAllocatedToLandDevelopment);

var marginalProductivityOfLandDevelopment = new Aux("marginalProductivityOfLandDevelopment", 109);
marginalProductivityOfLandDevelopment.units = "kilograms per dollar";
marginalProductivityOfLandDevelopment.socialDiscount = 0.07;
marginalProductivityOfLandDevelopment.dependencies = ["landYield", "developmentCostPerHectare"];
marginalProductivityOfLandDevelopment.updateFn = function () {
  return landYield.k / (developmentCostPerHectare.k * marginalProductivityOfLandDevelopment.socialDiscount);
};
qArray[109] = marginalProductivityOfLandDevelopment;
auxArray.push(marginalProductivityOfLandDevelopment);

var marginalProductivityOfAgriculturalInputs = new Aux("marginalProductivityOfAgriculturalInputs", 110);
marginalProductivityOfAgriculturalInputs.units = "kilograms per dollar";
marginalProductivityOfAgriculturalInputs.dependencies = [
  "averageLifetimeOfAgriculturalInputs",
  "landYield",
  "marginalLandYieldMultiplierFromCapital",
  "landYieldMultiplierFromCapital",
];
marginalProductivityOfAgriculturalInputs.updateFn = function () {
  return averageLifetimeOfAgriculturalInputsK * landYield.k * (marginalLandYieldMultiplierFromCapital.k / landYieldMultiplierFromCapital.k);
};
qArray[110] = marginalProductivityOfAgriculturalInputs;
auxArray.push(marginalProductivityOfAgriculturalInputs);

var marginalLandYieldMultiplierFromCapital = new Table(
  "marginalLandYieldMultiplierFromCapital",
  111,
  [0.075, 0.03, 0.015, 0.011, 0.009, 0.008, 0.007, 0.006, 0.005, 0.005, 0.005, 0.005, 0.005, 0.005, 0.005, 0.005],
  0,
  600,
  40
);
marginalLandYieldMultiplierFromCapital.units = "hectares per dollar";
marginalLandYieldMultiplierFromCapital.dependencies = ["agriculturalInputsPerHectare"];
marginalLandYieldMultiplierFromCapital.updateFn = function () {
  return agriculturalInputsPerHectare.k;
};
qArray[111] = marginalLandYieldMultiplierFromCapital;
auxArray.push(marginalLandYieldMultiplierFromCapital);

// Loop 3: Land Erosion and Urban-Industrial Use

var averageLifeOfLand = new Aux("averageLifeOfLand", 112);
averageLifeOfLand.units = "years";
averageLifeOfLand.normal = 6000; // years
averageLifeOfLand.dependencies = ["landLifeMultiplierFromYield"];
averageLifeOfLand.updateFn = function () {
  return averageLifeOfLand.normal * landLifeMultiplierFromYield.k;
};
qArray[112] = averageLifeOfLand;
auxArray.push(averageLifeOfLand);

var landLifeMultiplierFromYield = new Aux("landLifeMultiplierFromYield", 113);
landLifeMultiplierFromYield.units = "dimensionless";
landLifeMultiplierFromYield.dependencies = ["landLifeMultiplierFromYieldBefore", "landLifeMultiplierFromYieldAfter"];
landLifeMultiplierFromYield.updateFn = function () {
  return clip(landLifeMultiplierFromYieldAfter.k, landLifeMultiplierFromYieldBefore.k, t, policyYear);
};
qArray[113] = landLifeMultiplierFromYield;
auxArray.push(landLifeMultiplierFromYield);

var inherentLandFertilityK = 600; // kilograms per hectare-year, used in eqns 114, 115 and 124

var landLifeMultiplierFromYieldBefore = new Table(
  "landLifeMultiplierFromYieldBefore",
  114,
  [1.2, 1, 0.63, 0.36, 0.16, 0.055, 0.04, 0.025, 0.015, 0.01],
  0,
  9,
  1
);
landLifeMultiplierFromYieldBefore.units = "dimensionless";
landLifeMultiplierFromYieldBefore.dependencies = ["landYield"];
landLifeMultiplierFromYieldBefore.updateFn = function () {
  return landYield.k / inherentLandFertilityK;
};
qArray[114] = landLifeMultiplierFromYieldBefore;
auxArray.push(landLifeMultiplierFromYieldBefore);

var landLifeMultiplierFromYieldAfter = new Table("landLifeMultiplierFromYieldAfter", 115, [1.2, 1, 0.63, 0.36, 0.16, 0.055, 0.04, 0.025, 0.015, 0.01], 0, 9, 1);
landLifeMultiplierFromYieldAfter.units = "dimensionless";
landLifeMultiplierFromYieldAfter.dependencies = ["landYield"];
landLifeMultiplierFromYieldAfter.updateFn = function () {
  return landYield.k / inherentLandFertilityK;
};
qArray[115] = landLifeMultiplierFromYieldAfter;
auxArray.push(landLifeMultiplierFromYieldAfter);

var landErosionRate = new Rate("landErosionRate", 116);
landErosionRate.units = "hectares per year";
landErosionRate.updateFn = function () {
  return arableLand.k / averageLifeOfLand.k;
};
qArray[116] = landErosionRate;
rateArray.push(landErosionRate);

// 2016-08-09: Neil S. Grant reported an error in the table of values
// for urbanIndustrialLandPerCapita. The third element of the array
// should be 0.015, not 0.15. Corrected.

var urbanIndustrialLandPerCapita = new Table("urbanIndustrialLandPerCapita", 117, [0.005, 0.008, 0.015, 0.025, 0.04, 0.055, 0.07, 0.08, 0.09], 0, 1600, 200);
urbanIndustrialLandPerCapita.units = "hectares per person";
urbanIndustrialLandPerCapita.dependencies = ["industrialOutputPerCapita"];
urbanIndustrialLandPerCapita.updateFn = function () {
  return industrialOutputPerCapita.k;
};
qArray[117] = urbanIndustrialLandPerCapita;
auxArray.push(urbanIndustrialLandPerCapita);

var urbanIndustrialLandRequired = new Aux("urbanIndustrialLandRequired", 118);
urbanIndustrialLandRequired.units = "hectares";
urbanIndustrialLandRequired.dependencies = ["urbanIndustrialLandPerCapita", "population"];
urbanIndustrialLandRequired.updateFn = function () {
  return urbanIndustrialLandPerCapita.k * population.k;
};
qArray[118] = urbanIndustrialLandRequired;
auxArray.push(urbanIndustrialLandRequired);

var landRemovalForUrbanIndustrialUse = new Rate("landRemovalForUrbanIndustrialUse", 119);
landRemovalForUrbanIndustrialUse.units = "hectares per year";
landRemovalForUrbanIndustrialUse.developmentTime = 10; // years
landRemovalForUrbanIndustrialUse.updateFn = function () {
  return Math.max(0, (urbanIndustrialLandRequired.k - urbanIndustrialLand.k) / landRemovalForUrbanIndustrialUse.developmentTime);
};
qArray[119] = landRemovalForUrbanIndustrialUse;
rateArray.push(landRemovalForUrbanIndustrialUse);

var urbanIndustrialLand = new Level("urbanIndustrialLand", 120, 8.2e6, startTime, qArray, levelArray);
urbanIndustrialLand.units = "hectares";
urbanIndustrialLand.updateFn = function () {
  return urbanIndustrialLand.j + dt * landRemovalForUrbanIndustrialUse.j;
};
qArray[120] = urbanIndustrialLand;
levelArray.push(urbanIndustrialLand);

// Loop 4: Land fertility degradation

var landFertility = new Level("landFertility", 121, 600, startTime, qArray, levelArray);
landFertility.units = "kilograms per hectare-year";
landFertility.updateFn = function () {
  return landFertility.j + dt * (landFertilityRegeneration.j - landFertilityDegradation.j);
};
qArray[121] = landFertility;
levelArray.push(landFertility);

var landFertilityDegradationRate = new Table("landFertilityDegradationRate", 122, [0, 0.1, 0.3, 0.5], 0, 30, 10);
landFertilityDegradationRate.units = "inverse years";
landFertilityDegradationRate.dependencies = ["indexOfPersistentPollution"];
landFertilityDegradationRate.updateFn = function () {
  return indexOfPersistentPollution.k;
};
qArray[122] = landFertilityDegradationRate;
auxArray.push(landFertilityDegradationRate);

var landFertilityDegradation = new Rate("landFertilityDegradation", 123);
landFertilityDegradation.units = "kilograms per hectare-year-year";
landFertilityDegradation.updateFn = function () {
  return landFertility.k * landFertilityDegradationRate.k;
};
qArray[123] = landFertilityDegradation;
rateArray.push(landFertilityDegradation);

// Loop 5: Land fertility regeneration

var landFertilityRegeneration = new Rate("landFertilityRegeneration", 124);
landFertilityRegeneration.units = "kilograms per hectare-year-year";
landFertilityRegeneration.updateFn = function () {
  return (inherentLandFertilityK - landFertility.k) / landFertilityRegenerationTime.k;
};
qArray[124] = landFertilityRegeneration;
rateArray.push(landFertilityRegeneration);

var landFertilityRegenerationTime = new Table("landFertilityRegenerationTime", 125, [20, 13, 8, 4, 2, 2], 0, 0.1, 0.02);
landFertilityRegenerationTime.units = "years";
landFertilityRegenerationTime.dependencies = ["fractionOfInputsAllocatedToLandMaintenance"];
landFertilityRegenerationTime.updateFn = function () {
  return fractionOfInputsAllocatedToLandMaintenance.k;
};
qArray[125] = landFertilityRegenerationTime;
auxArray.push(landFertilityRegenerationTime);

// Loop 6: Discontinuing land maintenance

var fractionOfInputsAllocatedToLandMaintenance = new Table("fractionOfInputsAllocatedToLandMaintenance", 126, [0, 0.04, 0.07, 0.09, 0.1], 0, 4, 1);
fractionOfInputsAllocatedToLandMaintenance.units = "dimensionless";
fractionOfInputsAllocatedToLandMaintenance.dependencies = ["perceivedFoodRatio"];
fractionOfInputsAllocatedToLandMaintenance.updateFn = function () {
  return perceivedFoodRatio.k;
};
qArray[126] = fractionOfInputsAllocatedToLandMaintenance;
auxArray.push(fractionOfInputsAllocatedToLandMaintenance);

var foodRatio = new Aux("foodRatio", 127);
foodRatio.units = "dimensionless";
foodRatio.dependencies = ["foodPerCapita"];
foodRatio.updateFn = function () {
  return foodPerCapita.k / subsistenceFoodPerCapitaK;
};
qArray[127] = foodRatio;
auxArray.push(foodRatio);

var foodShortagePerceptionDelayK = 2; // years, used in eqn 128

var perceivedFoodRatio = new Smooth("perceivedFoodRatio", 128, foodShortagePerceptionDelayK);
perceivedFoodRatio.units = "dimensionless";
perceivedFoodRatio.dependencies = []; // "foodRatio" removed to break cycle
perceivedFoodRatio.initFn = function () {
  return foodRatio;
};
perceivedFoodRatio.initVal = 1.0;
qArray[128] = perceivedFoodRatio;
auxArray.push(perceivedFoodRatio);

/*
var perceivedFoodRatio = new Smooth("perceivedFoodRatio", 128, foodShortagePerceptionDelayK);
  perceivedFoodRatio.units = "dimensionless";
  perceivedFoodRatio.dependencies = [];   // "foodRatio" removed to break cycle
  perceivedFoodRatio.initFn = function() { return foodRatio; }
  perceivedFoodRatio.init = function() {
    perceivedFoodRatio.theInput = perceivedFoodRatio.initFn;
    perceivedFoodRatio.j = perceivedFoodRatio.k = 1.0;    
  }
  perceivedFoodRatio.update = function() {
    if (perceivedFoodRatio.firstCall) {
      perceivedFoodRatio.firstCall = false;
      return perceivedFoodRatio.k;
    }
    else {
      perceivedFoodRatio.k = perceivedFoodRatio.j + dt * (perceivedFoodRatio.theInput.j - perceivedFoodRatio.j) / perceivedFoodRatio.del;
      return perceivedFoodRatio.k;
    }
  }
    qArray[128] = perceivedFoodRatio;
    auxArray.push(perceivedFoodRatio);
*/

// NONRENEWABLE RESOURCE SECTOR

var nonrenewableResourcesInitialK = 1.0e12; // resource units, used in eqns 129 and 133

var nonrenewableResources = new Level("nonrenewableResources", 129, nonrenewableResourcesInitialK, startTime, qArray, levelArray);
nonrenewableResources.units = "resource units";
nonrenewableResources.updateFn = function () {
  return nonrenewableResources.j + dt * -nonrenewableResourceUsageRate.j;
};
qArray[129] = nonrenewableResources;
levelArray.push(nonrenewableResources);

var nonrenewableResourceUsageRate = new Rate("nonrenewableResourceUsageRate", 130);
nonrenewableResourceUsageRate.units = "resource units per year";
nonrenewableResourceUsageRate.updateFn = function () {
  return population.k * perCapitaResourceUsageMultiplier.k * nonrenewableResourceUsageFactor.k;
};
qArray[130] = nonrenewableResourceUsageRate;
rateArray.push(nonrenewableResourceUsageRate);

var nonrenewableResourceUsageFactor = new Aux("nonrenewableResourceUsageFactor", 131);
nonrenewableResourceUsageFactor.units = "dimensionless";
nonrenewableResourceUsageFactor.before = 1;
nonrenewableResourceUsageFactor.after = 1;
nonrenewableResourceUsageFactor.updateFn = function () {
  return clip(this.after, this.before, t, policyYear);
};
qArray[131] = nonrenewableResourceUsageFactor;
auxArray.push(nonrenewableResourceUsageFactor);

var perCapitaResourceUsageMultiplier = new Table("perCapitaResourceUsageMultiplier", 132, [0, 0.85, 2.6, 4.4, 5.4, 6.2, 6.8, 7, 7], 0, 1600, 200);
perCapitaResourceUsageMultiplier.units = "resource units per person-year";
perCapitaResourceUsageMultiplier.dependencies = ["industrialOutputPerCapita"];
perCapitaResourceUsageMultiplier.updateFn = function () {
  return industrialOutputPerCapita.k;
};
qArray[132] = perCapitaResourceUsageMultiplier;
auxArray.push(perCapitaResourceUsageMultiplier);

var nonrenewableResourceFractionRemaining = new Aux("nonrenewableResourceFractionRemaining", 133);
nonrenewableResourceFractionRemaining.units = "dimensionless";
nonrenewableResourceFractionRemaining.plotColor = "#b0875e";
nonrenewableResourceFractionRemaining.plotMin = 0.0;
nonrenewableResourceFractionRemaining.plotMax = 1.0;
nonrenewableResourceFractionRemaining.updateFn = function () {
  return nonrenewableResources.k / nonrenewableResourcesInitialK;
};
qArray[133] = nonrenewableResourceFractionRemaining;
auxArray.push(nonrenewableResourceFractionRemaining);

var fractionOfCapitalAllocatedToObtainingResources = new Aux("fractionOfCapitalAllocatedToObtainingResources", 134);
fractionOfCapitalAllocatedToObtainingResources.units = "dimensionless";
fractionOfCapitalAllocatedToObtainingResources.dependencies = [
  "fractionOfCapitalAllocatedToObtainingResourcesBefore",
  "fractionOfCapitalAllocatedToObtainingResourcesAfter",
];
fractionOfCapitalAllocatedToObtainingResources.updateFn = function () {
  return clip(fractionOfCapitalAllocatedToObtainingResourcesAfter.k, fractionOfCapitalAllocatedToObtainingResourcesBefore.k, t, policyYear);
};
qArray[134] = fractionOfCapitalAllocatedToObtainingResources;
auxArray.push(fractionOfCapitalAllocatedToObtainingResources);

var fractionOfCapitalAllocatedToObtainingResourcesBefore = new Table(
  "fractionOfCapitalAllocatedToObtainingResourcesBefore",
  135,
  [1, 0.9, 0.7, 0.5, 0.2, 0.1, 0.05, 0.05, 0.05, 0.05, 0.05],
  0,
  1,
  0.1
);
fractionOfCapitalAllocatedToObtainingResourcesBefore.units = "dimensionless";
fractionOfCapitalAllocatedToObtainingResourcesBefore.dependencies = ["nonrenewableResourceFractionRemaining"];
fractionOfCapitalAllocatedToObtainingResourcesBefore.updateFn = function () {
  return nonrenewableResourceFractionRemaining.k;
};
qArray[135] = fractionOfCapitalAllocatedToObtainingResourcesBefore;
auxArray.push(fractionOfCapitalAllocatedToObtainingResourcesBefore);

var fractionOfCapitalAllocatedToObtainingResourcesAfter = new Table(
  "fractionOfCapitalAllocatedToObtainingResourcesAfter",
  136,
  [1, 0.9, 0.7, 0.5, 0.2, 0.1, 0.05, 0.05, 0.05, 0.05, 0.05],
  0,
  1,
  0.1
);
fractionOfCapitalAllocatedToObtainingResourcesAfter.units = "dimensionless";
fractionOfCapitalAllocatedToObtainingResourcesAfter.dependencies = ["nonrenewableResourceFractionRemaining"];
fractionOfCapitalAllocatedToObtainingResourcesAfter.updateFn = function () {
  return nonrenewableResourceFractionRemaining.k;
};
qArray[136] = fractionOfCapitalAllocatedToObtainingResourcesAfter;
auxArray.push(fractionOfCapitalAllocatedToObtainingResourcesAfter);

// PERSISTENT POLLUTION SECTOR

var persistentPollutionGenerationRate = new Rate("persistentPollutionGenerationRate", 137);
persistentPollutionGenerationRate.units = "pollution units per year";
persistentPollutionGenerationRate.updateFn = function () {
  return (persistentPollutionGeneratedByIndustrialOutput.k + persistentPollutionGeneratedByAgriculturalOutput.k) * persistentPollutionGenerationFactor.k;
};
qArray[137] = persistentPollutionGenerationRate;
rateArray.push(persistentPollutionGenerationRate);

var persistentPollutionGenerationFactor = new Aux("persistentPollutionGenerationFactor", 138);
persistentPollutionGenerationFactor.units = "dimensionless";
persistentPollutionGenerationFactor.before = 1;
persistentPollutionGenerationFactor.after = 1;
persistentPollutionGenerationFactor.updateFn = function () {
  return clip(this.after, this.before, t, policyYear);
};
qArray[138] = persistentPollutionGenerationFactor;
auxArray.push(persistentPollutionGenerationFactor);

var persistentPollutionGeneratedByIndustrialOutput = new Aux("persistentPollutionGeneratedByIndustrialOutput", 139);
persistentPollutionGeneratedByIndustrialOutput.units = "pollution units per year";
persistentPollutionGeneratedByIndustrialOutput.fractionOfResourcesAsPersistentMaterial = 0.02; // dimensionless
persistentPollutionGeneratedByIndustrialOutput.industrialMaterialsEmissionFactor = 0.1; // dimensionless
persistentPollutionGeneratedByIndustrialOutput.industrialMaterialsToxicityIndex = 10; // pollution units per resource unit
persistentPollutionGeneratedByIndustrialOutput.dependencies = ["perCapitaResourceUsageMultiplier", "population"];
persistentPollutionGeneratedByIndustrialOutput.updateFn = function () {
  return (
    perCapitaResourceUsageMultiplier.k *
    population.k *
    persistentPollutionGeneratedByIndustrialOutput.fractionOfResourcesAsPersistentMaterial *
    persistentPollutionGeneratedByIndustrialOutput.industrialMaterialsEmissionFactor *
    persistentPollutionGeneratedByIndustrialOutput.industrialMaterialsToxicityIndex
  );
};
qArray[139] = persistentPollutionGeneratedByIndustrialOutput;
auxArray.push(persistentPollutionGeneratedByIndustrialOutput);

var persistentPollutionGeneratedByAgriculturalOutput = new Aux("persistentPollutionGeneratedByAgriculturalOutput", 140);
persistentPollutionGeneratedByAgriculturalOutput.units = "pollution units per year";
persistentPollutionGeneratedByAgriculturalOutput.fractionOfInputsAsPersistentMaterial = 0.001; // dimensionless
persistentPollutionGeneratedByAgriculturalOutput.agriculturalMaterialsToxicityIndex = 1; // pollution units per dollar
persistentPollutionGeneratedByAgriculturalOutput.dependencies = ["agriculturalInputsPerHectare"];
persistentPollutionGeneratedByAgriculturalOutput.updateFn = function () {
  return (
    agriculturalInputsPerHectare.k *
    arableLand.k *
    persistentPollutionGeneratedByAgriculturalOutput.fractionOfInputsAsPersistentMaterial *
    persistentPollutionGeneratedByAgriculturalOutput.agriculturalMaterialsToxicityIndex
  );
};
qArray[140] = persistentPollutionGeneratedByAgriculturalOutput;
auxArray.push(persistentPollutionGeneratedByAgriculturalOutput);

var persistentPollutionTransmissionDelayK = 20; // years, used in eqn 141

var persistenPollutionAppearanceRate = new Delay3("persistenPollutionAppearanceRate", 141, persistentPollutionTransmissionDelayK);
persistenPollutionAppearanceRate.units = "pollution units per year";
persistenPollutionAppearanceRate.initFn = function () {
  return persistentPollutionGenerationRate;
};
persistenPollutionAppearanceRate.qType = "Rate";
rateArray.push(auxArray.pop()); // put this among the Rates, not the Auxes
qArray[141] = persistenPollutionAppearanceRate;
auxArray.push(persistenPollutionAppearanceRate);

var persistentPollution = new Level("persistentPollution", 142, 2.5e7, startTime, qArray, levelArray);
persistentPollution.units = "pollution units";
persistentPollution.updateFn = function () {
  return persistentPollution.j + dt * (persistenPollutionAppearanceRate.j - persistenPollutionAssimilationRate.j);
};
qArray[142] = persistentPollution;
levelArray.push(persistentPollution);

var indexOfPersistentPollution = new Aux("indexOfPersistentPollution", 143);
indexOfPersistentPollution.units = "dimensionless";
indexOfPersistentPollution.pollutionValueIn1970 = 1.36e8; // pollution units, used in eqn 143
indexOfPersistentPollution.plotColor = "#a25563";
indexOfPersistentPollution.plotMin = 0;
indexOfPersistentPollution.plotMax = 32;
indexOfPersistentPollution.updateFn = function () {
  return persistentPollution.k / indexOfPersistentPollution.pollutionValueIn1970;
};
qArray[143] = indexOfPersistentPollution;
auxArray.push(indexOfPersistentPollution);

var persistenPollutionAssimilationRate = new Rate("persistenPollutionAssimilationRate", 144);
persistenPollutionAssimilationRate.units = "pollution units per year";
persistenPollutionAssimilationRate.updateFn = function () {
  return persistentPollution.k / (assimilationHalfLife.k * 1.4);
};
qArray[144] = persistenPollutionAssimilationRate;
rateArray.push(persistenPollutionAssimilationRate);

var assimilationHalfLifeMultiplier = new Table("assimilationHalfLifeMultiplier", 145, [1, 11, 21, 31, 41], 1, 1001, 250);
assimilationHalfLifeMultiplier.units = "dimensionless";
assimilationHalfLifeMultiplier.dependencies = ["indexOfPersistentPollution"];
assimilationHalfLifeMultiplier.updateFn = function () {
  return indexOfPersistentPollution.k;
};
qArray[145] = assimilationHalfLifeMultiplier;
auxArray.push(assimilationHalfLifeMultiplier);

var assimilationHalfLife = new Aux("assimilationHalfLife", 146);
assimilationHalfLife.units = "years";
assimilationHalfLife.valueIn1970 = 1.5; // years
assimilationHalfLife.dependencies = ["assimilationHalfLifeMultiplier"];
assimilationHalfLife.updateFn = function () {
  return assimilationHalfLifeMultiplier.k * assimilationHalfLife.valueIn1970;
};
qArray[146] = assimilationHalfLife;
auxArray.push(assimilationHalfLife);

// SUPPLEMENTARY EQUATIONS

var fractionOfOutputInAgriculture = new Aux("fractionOfOutputInAgriculture", 147);
fractionOfOutputInAgriculture.units = "dimensionless";
fractionOfOutputInAgriculture.dependencies = ["food", "serviceOutput", "industrialOutput"];
fractionOfOutputInAgriculture.updateFn = function () {
  return (0.22 * food.k) / (0.22 * food.k + serviceOutput.k + industrialOutput.k);
};
qArray[147] = fractionOfOutputInAgriculture;
auxArray.push(fractionOfOutputInAgriculture);

var fractionOfOutputInIndustry = new Aux("fractionOfOutputInIndustry", 148);
fractionOfOutputInIndustry.units = "dimensionless";
fractionOfOutputInIndustry.dependencies = ["food", "serviceOutput", "industrialOutput"];
fractionOfOutputInIndustry.updateFn = function () {
  return industrialOutput.k / (0.22 * food.k + serviceOutput.k + industrialOutput.k);
};
qArray[148] = fractionOfOutputInIndustry;
auxArray.push(fractionOfOutputInIndustry);

var fractionOfOutputInServices = new Aux("fractionOfOutputInServices", 149);
fractionOfOutputInServices.units = "dimensionless";
fractionOfOutputInServices.dependencies = ["food", "serviceOutput", "industrialOutput"];
fractionOfOutputInServices.updateFn = function () {
  return serviceOutput.k / (0.22 * food.k + serviceOutput.k + industrialOutput.k);
};
qArray[149] = fractionOfOutputInServices;
auxArray.push(fractionOfOutputInServices);

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

var plotLine = function (data, yMin, yMax, color) {
  var cvx = document.getElementById("cv").getContext("2d");
  cvx.strokeStyle = color;
  cvx.beginPath();
  var leftPoint = data.shift();
  cvx.moveTo(scaleX(leftPoint.x, startTime, stopTime), scaleY(leftPoint.y, yMin, yMax));
  for (var i = 0; i < data.length; i++) {
    var p = data[i];
    cvx.lineTo(scaleX(p.x, startTime, stopTime), scaleY(p.y, yMin, yMax));
  }
  cvx.stroke();
  cvx.closePath();
};

var testPlotData = [
  { x: 1900, y: 1.6e9 },
  { x: 1910, y: 1.7e9 },
  { x: 1920, y: 1.9e9 },
  { x: 2100, y: 1.1e9 },
];

// CONTROLS

// array of plottable variables

var plottable = [
  "agriculturalInputs",
  "agriculturalInputsPerHectare",
  "assimilationHalfLife",
  "averageLifeOfLand",
  "capitalUtilizationFraction",
  "effectiveHealthServicesPerCapita",
  "familyIncomeExpectation",
  "familyResponseToSocialNorm",
  "fecundityMultiplier",
  "fertilityControlAllocationPerCapita",
  "food",
  "fractionOfCapitalAllocatedToObtainingResources",
  "fractionOfIndustrialOutputAllocatedToAgriculture",
  "fractionOfIndustrialOutputAllocatedToIndustry",
  "fractionOfIndustrialOutputAllocatedToServices",
  "fractionOfInputsAllocatedToLandDevelopment",
  "fractionOfInputsAllocatedToLandMaintenance",
  "fractionOfOutputInAgriculture",
  "fractionOfOutputInIndustry",
  "fractionOfOutputInServices",
  "fractionOfPopulationUrban",
  "fractionOfServicesAllocatedToFertilityControl",
  "healthServicesAllocationsPerCapita",
  "industrialCapital",
  "industrialCapitalDepreciationRate",
  "industrialCapitalInvestmentRate",
  "industrialCapitalOutputRatio",
  "industrialOutput",
  "jobs",
  "jobsPerHectare",
  "jobsPerIndustrialCapitalUnit",
  "jobsPerServiceCapitalUnit",
  "laborForce",
  "laborUtilizationFraction",
  "landDevelopmentRate",
  "landErosionRate",
  "landFertility",
  "landFertilityDegradation",
  "landFertilityDegradationRate",
  "landFertilityRegeneration",
  "landFractionCultivated",
  "landLifeMultiplierFromYield",
  "landRemovalForUrbanIndustrialUse",
  "lifetimeMultiplierFromCrowding",
  "lifetimeMultiplierFromFood",
  "lifetimeMultiplierFromHealthServices",
  "lifetimeMultiplierFromPollution",
  "mortality0To14",
  "mortality15To44",
  "mortality45To64",
  "mortality65AndOver",
  "needForFertilityControl",
  "nonrenewableResourceUsageRate",
  "perCapitaResourceUsageMultiplier",
  "perceivedFoodRatio",
  "perceivedLifeExpectancy",
  "persistenPollutionAppearanceRate",
  "persistenPollutionAssimilationRate",
  "persistentPollutionGenerationRate",
  "potentialJobsInAgriculturalSector",
  "potentialJobsInIndustrialSector",
  "potentialJobsInServiceSector",
  "potentiallyArableLand",
  "serviceCapital",
  "serviceCapitalDepreciationRate",
  "serviceCapitalInvestmentRate",
  "serviceCapitalOutputRatio",
  "serviceOutput",
  "socialFamilySizeNorm",
  "totalAgriculturalInvestment",
  "totalFertility",
  "urbanIndustrialLand",
];

// add variables to the pop-up menu

/*
var populateMenu = function() {
  var menu = document.getElementById("menuOfVars")
  for (var i in plottable) {
    var iOption = new Option();
    iOption.text = plottable[i];
    menu.options[menu.length] = iOption;
  }
}
*/

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
  resetModel();
  setUpGraph();
};

export const changeDt = () => {
  var sliderInput = parseInt(document.getElementById("dt-slider").value);
  var sliderReadOut = document.getElementById("dt-readout");
  var newDt = Math.pow(2, sliderInput);
  sliderReadOut.innerHTML = newDt.toString();
  dt = newDt;
  resetModel();
};

export const changeResources = () => {
  var sliderInput = parseInt(document.getElementById("resource-slider").value);
  var sliderReadOut = document.getElementById("resource-readout");
  var newResources = Math.pow(2, sliderInput);
  sliderReadOut.innerHTML = newResources.toString();
  nonrenewableResources.initVal = newResources * 1.0e12;
  nonrenewableResourcesInitialK = newResources * 1.0e12;
  resetModel();
};

export const changeConsumption = () => {
  var sliderInput = parseFloat(document.getElementById("consumption-slider").value);
  var sliderReadOut = document.getElementById("consumption-readout");
  sliderReadOut.innerHTML = sliderInput.toFixed(2);
  fractionOfIndustrialOutputAllocatedToConsumptionConstant.before = sliderInput;
  fractionOfIndustrialOutputAllocatedToConsumptionConstant.after = sliderInput;
  resetModel();
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
    var theEqn = eval(theInput.getAttribute("name"));
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

// DEBUG LOGGING

var logData = function () {
  var vals = [t, foodRatio.k, perceivedFoodRatio.k];
  var valStr = vals.join("  ");
  console.log(valStr);
};
