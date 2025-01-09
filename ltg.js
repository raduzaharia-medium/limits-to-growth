import { Smooth } from "./models/equations/smooth.js";
import { Delay3 } from "./models/equations/delay.js";
import { clip } from "./tools.js";
import { Population } from "./models/equations/specialized/population/population.js";
import { Population0To14 } from "./models/equations/specialized/population/population0To14.js";
import { Population15To44 } from "./models/equations/specialized/population/population15To44.js";
import { Population45To64 } from "./models/equations/specialized/population/population45To64.js";
import { Population65AndOver } from "./models/equations/specialized/population/population65AndOver.js";
import { DeathsPerYear0To14 } from "./models/equations/specialized/deaths/deathsPerYear0To14.js";
import { Mortality0To14 } from "./models/equations/specialized/mortality/mortality0To14.js";
import { Mortality15To44 } from "./models/equations/specialized/mortality/mortality15To44.js";
import { MaturationsPerYear14To15 } from "./models/equations/specialized/maturations/maturationsPerYear14To15.js";
import { DeathsPerYear15To44 } from "./models/equations/specialized/deaths/deathsPerYear15To44.js";
import { MaturationsPerYear44To45 } from "./models/equations/specialized/maturations/maturationsPerYear44To45.js";
import { DeathsPerYear45To64 } from "./models/equations/specialized/deaths/deathsPerYear45To64.js";
import { Mortality45To64 } from "./models/equations/specialized/mortality/mortality45To64.js";
import { MaturationsPerYear64To65 } from "./models/equations/specialized/maturations/maturationsPerYear64To65.js";
import { DeathsPerYear65AndOver } from "./models/equations/specialized/deaths/deathsPerYear65AndOver.js";
import { Mortality65AndOver } from "./models/equations/specialized/mortality/mortality65AndOver.js";
import { DeathsPerYear } from "./models/equations/specialized/deaths/deathsPerYear.js";
import { CrudeDeathRate } from "./models/equations/specialized/deaths/crudeDeathRate.js";
import { LifeExpectancy } from "./models/equations/specialized/lifetimeMultipliers/lifeExpectancy.js";
import { LifetimeMultiplierFromFood } from "./models/equations/specialized/lifetimeMultipliers/lifetimeMultiplierFromFood.js";
import { HealthServicesAllocationPerCapita } from "./models/equations/specialized/healthServicesAllocationsPerCapita.js";
import { EffectiveHealthServicesPerCapita } from "./models/equations/specialized/effectiveHealthServicesPerCapita.js";
import { LifetimeMultiplierFromHealthServices } from "./models/equations/specialized/lifetimeMultipliers/lifetimeMultiplierFromHealthServices.js";
import { LifetimeMultiplierFromHealthServicesBefore } from "./models/equations/specialized/lifetimeMultipliers/lifetimeMultiplierFromHealthServicesBefore.js";
import { LifetimeMultiplierFromHealthServicesAfter } from "./models/equations/specialized/lifetimeMultipliers/lifetimeMultiplierFromHealthServicesAfter.js";
import { FractionOfPopulationUrban } from "./models/equations/specialized/population/fractionOfPopulationUrban.js";
import { CrowdingMultiplierFromIndustrialization } from "./models/equations/specialized/population/crowdingMultiplierFromIndustrialization.js";
import { LifetimeMultiplierFromCrowding } from "./models/equations/specialized/lifetimeMultipliers/lifetimeMultiplierFromCrowding.js";
import { LifetimeMultiplierFromPollution } from "./models/equations/specialized/lifetimeMultipliers/lifetimeMultiplierFromPollution.js";
import { BirthsPerYear } from "./models/equations/specialized/natality/birthsPerYear.js";
import { CrudeBirthRate } from "./models/equations/specialized/natality/crudeBirthRate.js";
import { TotalFertility } from "./models/equations/specialized/fertility/totalFertility.js";
import { MaxTotalFertility } from "./models/equations/specialized/fertility/maxTotalFertility.js";
import { FecundityMultiplier } from "./models/equations/specialized/natality/fecundityMultiplier.js";
import { DesiredTotalFertility } from "./models/equations/specialized/fertility/desiredTotalFertility.js";
import { CompensatoryMultiplierFromPerceivedLifeExpectancy } from "./models/equations/specialized/compensatoryMultiplierFromPerceivedLifeExpectancy.js";
import { PerceivedLifeExpectancy } from "./models/equations/specialized/lifetimeMultipliers/perceivedLifeExpectancy.js";
import { DesiredCompletedFamilySize } from "./models/equations/specialized/natality/desiredCompletedFamilySize.js";
import { SocialFamilySizeNorm } from "./models/equations/specialized/natality/socialFamilySizeNorm.js";
import { DelayedIndustrialOutputPerCapita } from "./models/equations/specialized/capital/industry/delayedIndustrialOutputPerCapita.js";
import { FamilyResponseToSocialNorm } from "./models/equations/specialized/natality/familyResponseToSocialNorm.js";
import { FamilyIncomeExpectation } from "./models/equations/specialized/familyIncomeExpectation.js";
import { AverageIndustrialOutputPerCapita } from "./models/equations/specialized/capital/industry/averageIndustrialOutputPerCapita.js";
import { NeedForFertilityControl } from "./models/equations/specialized/fertility/needForFertilityControl.js";
import { FertilityControlEffectiveness } from "./models/equations/specialized/fertility/fertilityControlEfectiveness.js";
import { FertilityControlFacilitiesPerCapita } from "./models/equations/specialized/fertility/fertilityControlFacilitiesPerCapita.js";
import { FertilityControlAllocationPerCapita } from "./models/equations/specialized/fertility/fertilityControlAllocationPerCapita.js";
import { FractionOfServicesAllocatedToFertilityControl } from "./models/equations/specialized/fertility/fractionOfServicesAllocatedToFertilityControl.js";
import { IndustrialOutputPerCapita } from "./models/equations/specialized/capital/industry/industrialOutputPerCapita.js";
import { IndustrialOutput } from "./models/equations/specialized/capital/industry/industrialOutput.js";
import { IndustrialCapitalOutputRatio } from "./models/equations/specialized/capital/industry/industrialCapitalOutputRatio.js";
import { IndustrialCapital } from "./models/equations/specialized/capital/industry/industrialCapital.js";
import { IndustrialCapitalDepreciationRate } from "./models/equations/specialized/capital/industry/industrialCapitalDepreciationRate.js";
import { AverageLifetimeOfIndustrialCapital } from "./models/equations/specialized/capital/industry/averageLifetimeOfIndustrialCapital.js";
import { IndustrialCapitalInvestmentRate } from "./models/equations/specialized/capital/industry/industrialCapitalInvestmentRate.js";
import { FractionOfIndustrialOutputAllocatedToIndustry } from "./models/equations/specialized/capital/industry/fractionOfIndustrialOutputAllocatedToIndustry.js";
import { FractionOfIndustrialOutputAllocatedToConsumption } from "./models/equations/specialized/capital/industry/fractionOfIndustrialOutputAllocatedToConsumption.js";
import { FractionOfIndustrialOutputAllocatedToConsumptionConstant } from "./models/equations/specialized/capital/industry/fractionOfIndustrialOutputAllocatedToConsumptionConstant.js";
import { FractionOfIndustrialOutputAllocatedToConsumptionVariable } from "./models/equations/specialized/capital/industry/fractionOfIndustrialOutputAllocatedToConsumptionVariable.js";
import { IndicatedServiceOutputPerCapita } from "./models/equations/specialized/capital/service/indicatedServiceOutputPerCapita.js";
import { IndicatedServiceOutputPerCapitaBefore } from "./models/equations/specialized/capital/service/indicatedServiceOutputPerCapitaBefore.js";
import { IndicatedServiceOutputPerCapitaAfter } from "./models/equations/specialized/capital/service/indicatedServiceOutputPerCapitaAfter.js";
import { FractionOfIndustrialOutputAllocatedToServices } from "./models/equations/specialized/capital/service/fractionOfIndustrialOutputAllocatedToServices.js";
import { FractionOfIndustrialOutputAllocatedToServicesBefore } from "./models/equations/specialized/capital/service/fractionOfIndustrialOutputAllocatedToServicesBefore.js";
import { FractionOfIndustrialOutputAllocatedToServicesAfter } from "./models/equations/specialized/capital/service/fractionOfIndustrialOutputAllocatedToServicesAfter.js";
import { ServiceCapitalInvestmentRate } from "./models/equations/specialized/capital/service/serviceCapitalInvestmentRate.js";
import { ServiceCapital } from "./models/equations/specialized/capital/service/serviceCapital.js";
import { ServiceCapitalDepreciationRate } from "./models/equations/specialized/capital/service/serviceCapitalDepreciationRate.js";
import { AverageLifetimeOfServiceCapital } from "./models/equations/specialized/capital/service/averageLifetimeOfServiceCapital.js";
import { ServiceOutput } from "./models/equations/specialized/capital/service/serviceOutput.js";
import { ServiceOutputPerCapita } from "./models/equations/specialized/capital/service/serviceOutputPerCapita.js";
import { ServiceCapitalOutputRatio } from "./models/equations/specialized/capital/service/serviceCapitalOutputRatio.js";
import { Jobs } from "./models/equations/specialized/capital/jobs/jobs.js";
import { PotentialJobsInIndustrialSector } from "./models/equations/specialized/capital/jobs/potentialJobsInIndustrialSector.js";
import { JobsPerIndustrialCapitalUnit } from "./models/equations/specialized/capital/jobs/jobsPerIndustrialCapitalUnit.js";
import { PotentialJobsInServiceSector } from "./models/equations/specialized/capital/jobs/potentialJobsInServiceSector.js";
import { JobsPerServiceCapitalUnit } from "./models/equations/specialized/capital/jobs/jobsPerServiceCapitalUnit.js";
import { PotentialJobsInAgriculturalSector } from "./models/equations/specialized/capital/jobs/potentialJobsInAgriculturalSector.js";
import { JobsPerHectare } from "./models/equations/specialized/capital/jobs/jobsPerHectare.js";
import { LaborForce } from "./models/equations/specialized/capital/jobs/laborForce.js";
import { LaborUtilizationFraction } from "./models/equations/specialized/capital/jobs/laborUtilizationFraction.js";
import { LaborUtilizationFractionDelayed } from "./models/equations/specialized/capital/jobs/laborUtilizationFractionDelayed.js";
import { CapitalUtilizationFraction } from "./models/equations/specialized/capital/capitalUtilizationFraction.js";
import { LandFractionCultivated } from "./models/equations/specialized/agriculture/land/development/landFractionCultivated.js";
import { ArableLand } from "./models/equations/specialized/agriculture/land/development/arableLand.js";
import { PotentiallyArableLand } from "./models/equations/specialized/agriculture/land/development/potentiallyArableLand.js";
import { Food } from "./models/equations/specialized/agriculture/food/food.js";
import { FoodPerCapita } from "./models/equations/specialized/agriculture/food/foodPerCapita.js";
import { IndicatedFoodPerCapita } from "./models/equations/specialized/agriculture/food/indicatedFoodPerCapita.js";
import { IndicatedFoodPerCapitaBefore } from "./models/equations/specialized/agriculture/food/indicatedFoodPerCapitaBefore.js";
import { IndicatedFoodPerCapitaAfter } from "./models/equations/specialized/agriculture/food/indicatedFoodPerCapitaAfter.js";
import { TotalAgriculturalInvestment } from "./models/equations/specialized/agriculture/totalAgriculturalInvestment.js";
import { FractionOfIndustrialOutputAllocatedToAgriculture } from "./models/equations/specialized/agriculture/fractionOfIndustrialOutputAllocatedToAgriculture.js";
import { FractionOfIndustrialOutputAllocatedToAgricultureBefore } from "./models/equations/specialized/agriculture/fractionOfIndustrialOutputAllocatedToAgricultureBefore.js";
import { FractionOfIndustrialOutputAllocatedToAgricultureAfter } from "./models/equations/specialized/agriculture/fractionOfIndustrialOutputAllocatedToAgricultureAfter.js";
import { LandDevelopmentRate } from "./models/equations/specialized/agriculture/land/development/landDevelopmentRate.js";
import { DevelopmentCostPerHectare } from "./models/equations/specialized/agriculture/land/development/developmentCostPerHectare.js";
import { CurrentAgriculturalInputs } from "./models/equations/specialized/agriculture/currentAgriculturalInputs.js";
import { AgriculturalInputs } from "./models/equations/specialized/agriculture/agriculturalInputs.js";
import { AverageLifetimeOfAgriculturalInputs } from "./models/equations/specialized/agriculture/averageLifetimeOfAgriculturalInputs.js";
import { AgriculturalInputsPerHectare } from "./models/equations/specialized/agriculture/agriculturalInputsPerHectare.js";
import { LandYieldMultiplierFromCapital } from "./models/equations/specialized/agriculture/land/yield/landYieldMultiplierFromCapital.js";
import { LandYield } from "./models/equations/specialized/agriculture/land/yield/landYield.js";
import { LandYieldFactor } from "./models/equations/specialized/agriculture/land/yield/landYieldFactor.js";
import { LandYieldMultiplierFromAirPollution } from "./models/equations/specialized/agriculture/land/yield/landYieldMultiplierFromAirPollution.js";
import { LandYieldMultiplierFromAirPollutionBefore } from "./models/equations/specialized/agriculture/land/yield/landYieldMultiplierFromAirPollutionBefore.js";
import { LandYieldMultiplierFromAirPollutionAfter } from "./models/equations/specialized/agriculture/land/yield/landYieldMultiplierFromAirPollutionAfter.js";
import { FractionOfInputsAllocatedToLandDevelopment } from "./models/equations/specialized/agriculture/land/development/fractionOfInputsAllocatedToLandDevelopment.js";
import { MarginalProductivityOfLandDevelopment } from "./models/equations/specialized/agriculture/land/development/marginalProductivityOfLandDevelopment.js";
import { MarginalProductivityOfAgriculturalInputs } from "./models/equations/specialized/agriculture/marginalProductivityOfAgriculturalInputs.js";
import { MarginalLandYieldMultiplierFromCapital } from "./models/equations/specialized/agriculture/land/yield/marginalLandYieldMultiplierFromCapital.js";
import { AverageLifeOfLand } from "./models/equations/specialized/agriculture/land/life/averageLifeOfLand.js";
import { LandLifeMultiplierFromYield } from "./models/equations/specialized/agriculture/land/life/landLifeMultiplierFromYield.js";
import { LandLifeMultiplierFromYieldBefore } from "./models/equations/specialized/agriculture/land/life/landLifeMultiplierFromYieldBefore.js";
import { LandLifeMultiplierFromYieldAfter } from "./models/equations/specialized/agriculture/land/life/landLifeMultiplierFromYieldAfter.js";
import { LandErosionRate } from "./models/equations/specialized/agriculture/land/life/landErosionRate.js";
import { UrbanIndustrialLandPerCapita } from "./models/equations/specialized/agriculture/land/urbanIndustrialLandPerCapita.js";
import { UrbanIndustrialLandRequired } from "./models/equations/specialized/agriculture/land/urbanIndustrialLandRequired.js";
import { LandRemovalForUrbanIndustrialUse } from "./models/equations/specialized/agriculture/land/landRemovalForUrbanIndustrialUse.js";
import { UrbanIndustrialLand } from "./models/equations/specialized/agriculture/land/urbanIndustrialLand.js";
import { LandFertility } from "./models/equations/specialized/agriculture/land/fertility/landFertility.js";
import { LandFertilityDegradationRate } from "./models/equations/specialized/agriculture/land/fertility/landFertilityDegradationRate.js";
import { LandFertilityDegradation } from "./models/equations/specialized/agriculture/land/fertility/landFertilityDegradation.js";
import { LandFertilityRegeneration } from "./models/equations/specialized/agriculture/land/fertility/landFertilityRegeneration.js";
import { LandFertilityRegenerationTime } from "./models/equations/specialized/agriculture/land/fertility/landFertilityRegenerationTime.js";
import { FractionOfInputsAllocatedToLandMaintenance } from "./models/equations/specialized/agriculture/land/development/fractionOfInputsAllocatedToLandMaintenance.js";
import { FoodRatio } from "./models/equations/specialized/agriculture/food/foodRatio.js";
import { PerceivedFoodRatio } from "./models/equations/specialized/agriculture/food/perceivedFoodRatio.js";
import { NonRenewableResources } from "./models/equations/specialized/nonRenewables/nonRenewableResources.js";
import { NonRenewableResourceUsageRate } from "./models/equations/specialized/nonRenewables/nonRenewableResourceUsageRate.js";
import { NonRenewableResourceUsageFactor } from "./models/equations/specialized/nonRenewables/nonRenewableResourceUsageFactor.js";
import { PerCapitaResourceUsageMultiplier } from "./models/equations/specialized/perCapitaResourceUsageMultiplier.js";
import { NonRenewableResourceFractionRemaining } from "./models/equations/specialized/nonRenewables/nonRenewableResourceFractionRemaining.js";
import { FractionOfCapitalAllocatedToObtainingResources } from "./models/equations/specialized/capital/fractionOfCapitalAllocatedToObtainingResources.js";
import { FractionOfCapitalAllocatedToObtainingResourcesBefore } from "./models/equations/specialized/capital/fractionOfCapitalAllocatedToObtainingResourcesBefore.js";
import { FractionOfCapitalAllocatedToObtainingResourcesAfter } from "./models/equations/specialized/capital/fractionOfCapitalAllocatedToObtainingResourcesAfter.js";
import { PersistentPollutionGenerationRate } from "./models/equations/specialized/pollution/persistentPollutionGenerationRate.js";
import { PersistentPollutionGenerationFactor } from "./models/equations/specialized/pollution/persistentPollutionGenerationFactor.js";
import { PersistentPollutionGeneratedByIndustrialOutput } from "./models/equations/specialized/pollution/persistentPollutionGeneratedByIndustrialOutput.js";
import { PersistentPollutionGeneratedByAgriculturalOutput } from "./models/equations/specialized/pollution/persistentPollutionGeneratedByAgriculturalOutput.js";
import { PersistentPollution } from "./models/equations/specialized/pollution/persistentPollution.js";
import { PersistenPollutionAppearanceRate } from "./models/equations/specialized/pollution/persistenPollutionAppearanceRate.js";
import { IndexOfPersistentPollution } from "./models/equations/specialized/pollution/indexOfPersistentPollution.js";
import { PersistenPollutionAssimilationRate } from "./models/equations/specialized/pollution/persistenPollutionAssimilationRate.js";
import { AssimilationHalfLifeMultiplier } from "./models/equations/specialized/pollution/assimilationHalfLifeMultiplier.js";
import { AssimilationHalfLife } from "./models/equations/specialized/pollution/assimilationHalfLife.js";
import { FractionOfOutputInAgriculture } from "./models/equations/specialized/agriculture/fractionOfOutputInAgriculture.js";
import { FractionOfOutputInIndustry } from "./models/equations/specialized/capital/industry/fractionOfOutputInIndustry.js";
import { FractionOfOutputInServices } from "./models/equations/specialized/capital/service/fractionOfOutputInServices.js";

/*  Limits to Growth: This is a re-implementation in JavaScript of World3, the social-economic-environmental model created by
    Dennis and Donella Meadows and others circa 1970. The results of the modeling exercise were published in The Limits to Growth
    in 1972, and the model itself was more fully documented in Dynamics of Growth in a Finite World in 1974. 
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
population0To14.updateFn = function () {
  return population0To14.j + dt * (birthsPerYear.j - deathsPerYear0To14.j - maturationsPerYear14to15.j);
};
qArray[2] = population0To14;
levelArray.push(population0To14);
population.population0To14 = population0To14;

const deathsPerYear0To14 = new DeathsPerYear0To14();
qArray[3] = deathsPerYear0To14;
rateArray.push(deathsPerYear0To14);
deathsPerYear0To14.population0To14 = population0To14;

const mortality0To14 = new Mortality0To14();
qArray[4] = mortality0To14;
auxArray.push(mortality0To14);
deathsPerYear0To14.mortality0To14 = mortality0To14;

const maturationsPerYear14to15 = new MaturationsPerYear14To15();
qArray[5] = maturationsPerYear14to15;
rateArray.push(maturationsPerYear14to15);
maturationsPerYear14to15.population0To14 = population0To14;
maturationsPerYear14to15.mortality0To14 = mortality0To14;

const population15To44 = new Population15To44(startTime, dt);
population15To44.updateFn = function () {
  return population15To44.j + dt * (maturationsPerYear14to15.j - deathsPerYear15To44.j - maturationsPerYear44to45.j);
};
qArray[6] = population15To44;
levelArray.push(population15To44);
population.population15To44 = population15To44;

const deathsPerYear15To44 = new DeathsPerYear15To44();
qArray[7] = deathsPerYear15To44;
rateArray.push(deathsPerYear15To44);
deathsPerYear15To44.population15To44 = population15To44;

const mortality15To44 = new Mortality15To44();
qArray[8] = mortality15To44;
auxArray.push(mortality15To44);
deathsPerYear15To44.mortality15To44 = mortality15To44;

const maturationsPerYear44to45 = new MaturationsPerYear44To45();
qArray[9] = maturationsPerYear44to45;
rateArray.push(maturationsPerYear44to45);
maturationsPerYear44to45.population15To44 = population15To44;
maturationsPerYear44to45.mortality15To44 = mortality15To44;

const population45To64 = new Population45To64(startTime, dt);
population45To64.updateFn = function () {
  return population45To64.j + dt * (maturationsPerYear44to45.j - deathsPerYear45To64.j - maturationsPerYear64to65.j);
};
qArray[10] = population45To64;
levelArray.push(population45To64);
population.population45To64 = population45To64;

const deathsPerYear45To64 = new DeathsPerYear45To64();
deathsPerYear45To64.units = "persons per year";
deathsPerYear45To64.updateFn = function () {
  return population45To64.k * mortality45To64.k;
};
qArray[11] = deathsPerYear45To64;
rateArray.push(deathsPerYear45To64);
deathsPerYear45To64.population45To64 = population45To64;

const mortality45To64 = new Mortality45To64();
qArray[12] = mortality45To64;
auxArray.push(mortality45To64);
deathsPerYear45To64.mortality45To64 = mortality45To64;

const maturationsPerYear64to65 = new MaturationsPerYear64To65();
qArray[13] = maturationsPerYear64to65;
rateArray.push(maturationsPerYear64to65);
maturationsPerYear64to65.population45To64 = population45To64;
maturationsPerYear64to65.mortality45To64 = mortality45To64;

const population65AndOver = new Population65AndOver(startTime);
population65AndOver.updateFn = function () {
  return population65AndOver.j + dt * (maturationsPerYear64to65.j - deathsPerYear65AndOver.j);
};
qArray[14] = population65AndOver;
levelArray.push(population65AndOver);
population.population65AndOver = population65AndOver;

const deathsPerYear65AndOver = new DeathsPerYear65AndOver();
qArray[15] = deathsPerYear65AndOver;
rateArray.push(deathsPerYear65AndOver);
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
lifetimeMultiplierFromHealthServices.updateFn = function () {
  return clip(lifetimeMultiplierFromHealthServicesAfter.k, lifetimeMultiplierFromHealthServicesBefore.k, t, lifetimeMultiplierFromHealthServices.policyYear);
};
qArray[23] = lifetimeMultiplierFromHealthServices;
auxArray.push(lifetimeMultiplierFromHealthServices);
lifeExpectancy.lifetimeMultiplierFromHealthServices = lifetimeMultiplierFromHealthServices;

const lifetimeMultiplierFromHealthServicesBefore = new LifetimeMultiplierFromHealthServicesBefore();
qArray[24] = lifetimeMultiplierFromHealthServicesBefore;
auxArray.push(lifetimeMultiplierFromHealthServicesBefore);
lifetimeMultiplierFromHealthServices.lifetimeMultiplierFromHealthServicesBefore = lifetimeMultiplierFromHealthServicesBefore;
lifetimeMultiplierFromHealthServicesBefore.effectiveHealthServicesPerCapita = effectiveHealthServicesPerCapita;

const lifetimeMultiplierFromHealthServicesAfter = new LifetimeMultiplierFromHealthServicesAfter();
qArray[25] = lifetimeMultiplierFromHealthServicesAfter;
auxArray.push(lifetimeMultiplierFromHealthServicesAfter);
lifetimeMultiplierFromHealthServices.lifetimeMultiplierFromHealthServicesAfter = lifetimeMultiplierFromHealthServicesAfter;
lifetimeMultiplierFromHealthServicesAfter.effectiveHealthServicesPerCapita = effectiveHealthServicesPerCapita;

const fractionOfPopulationUrban = new FractionOfPopulationUrban();
qArray[26] = fractionOfPopulationUrban;
auxArray.push(fractionOfPopulationUrban);
fractionOfPopulationUrban.population = population;

const crowdingMultiplierFromIndustrialization = new CrowdingMultiplierFromIndustrialization();
qArray[27] = crowdingMultiplierFromIndustrialization;
auxArray.push(crowdingMultiplierFromIndustrialization);

const lifetimeMultiplierFromCrowding = new LifetimeMultiplierFromCrowding();
qArray[28] = lifetimeMultiplierFromCrowding;
auxArray.push(lifetimeMultiplierFromCrowding);
lifeExpectancy.lifetimeMultiplierFromCrowding = lifetimeMultiplierFromCrowding;
lifetimeMultiplierFromCrowding.fractionOfPopulationUrban = fractionOfPopulationUrban;
lifetimeMultiplierFromCrowding.crowdingMultiplierFromIndustrialization = crowdingMultiplierFromIndustrialization;

const lifetimeMultiplierFromPollution = new LifetimeMultiplierFromPollution();
qArray[29] = lifetimeMultiplierFromPollution;
auxArray.push(lifetimeMultiplierFromPollution);
lifeExpectancy.lifetimeMultiplierFromPollution = lifetimeMultiplierFromPollution;

// The Birth-Rate Subsector

const birthsPerYear = new BirthsPerYear();
birthsPerYear.updateFn = function () {
  const after = deathsPerYear.k;
  const before = (totalFertility.k * population15To44.k * 0.5) / birthsPerYear.reproductiveLifetime;

  return clip(after, before, t, birthsPerYear.populationEquilibriumTime);
};
qArray[30] = birthsPerYear;
rateArray.push(birthsPerYear);
birthsPerYear.deathsPerYear = deathsPerYear;
birthsPerYear.population15To44 = population15To44;

const crudeBirthRate = new CrudeBirthRate();
qArray[31] = crudeBirthRate;
auxArray.push(crudeBirthRate);
crudeBirthRate.birthsPerYear = birthsPerYear;
crudeBirthRate.population = population;

const totalFertility = new TotalFertility();
qArray[32] = totalFertility;
auxArray.push(totalFertility);

const maxTotalFertility = new MaxTotalFertility();
qArray[33] = maxTotalFertility;
auxArray.push(maxTotalFertility);
totalFertility.maxTotalFertility = maxTotalFertility;

const fecundityMultiplier = new FecundityMultiplier();
qArray[34] = fecundityMultiplier;
auxArray.push(fecundityMultiplier);
maxTotalFertility.fecundityMultiplier = fecundityMultiplier;
fecundityMultiplier.lifeExpectancy = lifeExpectancy;

const desiredTotalFertility = new DesiredTotalFertility();
qArray[35] = desiredTotalFertility;
auxArray.push(desiredTotalFertility);
totalFertility.desiredTotalFertility = desiredTotalFertility;

const compensatoryMultiplierFromPerceivedLifeExpectancy = new CompensatoryMultiplierFromPerceivedLifeExpectancy();
qArray[36] = compensatoryMultiplierFromPerceivedLifeExpectancy;
auxArray.push(compensatoryMultiplierFromPerceivedLifeExpectancy);
desiredTotalFertility.compensatoryMultiplierFromPerceivedLifeExpectancy = compensatoryMultiplierFromPerceivedLifeExpectancy;

const lifetimePerceptionDelayK = 20; // years, used in eqn 37
const perceivedLifeExpectancy = new PerceivedLifeExpectancy(lifetimePerceptionDelayK);
qArray[37] = perceivedLifeExpectancy;
auxArray.push(perceivedLifeExpectancy);
compensatoryMultiplierFromPerceivedLifeExpectancy.perceivedLifeExpectancy = perceivedLifeExpectancy;
perceivedLifeExpectancy.lifeExpectancy = lifeExpectancy;

const zeroPopulationGrowthTargetYear = 4000;
const desiredCompletedFamilySize = new DesiredCompletedFamilySize(zeroPopulationGrowthTargetYear);
desiredCompletedFamilySize.updateFn = function () {
  return clip(2.0, desiredCompletedFamilySize.normal * familyResponseToSocialNorm.k * socialFamilySizeNorm.k, t, zeroPopulationGrowthTargetYear);
};
qArray[38] = desiredCompletedFamilySize;
auxArray.push(desiredCompletedFamilySize);
desiredTotalFertility.desiredCompletedFamilySize = desiredCompletedFamilySize;

const socialFamilySizeNorm = new SocialFamilySizeNorm();
qArray[39] = socialFamilySizeNorm;
auxArray.push(socialFamilySizeNorm);
desiredCompletedFamilySize.socialFamilySizeNorm = socialFamilySizeNorm;

const socialAdjustmentDelayK = 20; // years, used in eqn 40
const delayedIndustrialOutputPerCapita = new DelayedIndustrialOutputPerCapita(socialAdjustmentDelayK);
qArray[40] = delayedIndustrialOutputPerCapita;
auxArray.push(delayedIndustrialOutputPerCapita);
socialFamilySizeNorm.delayedIndustrialOutputPerCapita = delayedIndustrialOutputPerCapita;

const familyResponseToSocialNorm = new FamilyResponseToSocialNorm();
qArray[41] = familyResponseToSocialNorm;
auxArray.push(familyResponseToSocialNorm);
desiredCompletedFamilySize.familyResponseToSocialNorm = familyResponseToSocialNorm;

const familyIncomeExpectation = new FamilyIncomeExpectation();
qArray[42] = familyIncomeExpectation;
auxArray.push(familyIncomeExpectation);
familyResponseToSocialNorm.familyIncomeExpectation = familyIncomeExpectation;

const incomeExpectationAveragingTimeK = 3; // years, used in eqn 43
const averageIndustrialOutputPerCapita = new AverageIndustrialOutputPerCapita(incomeExpectationAveragingTimeK);
qArray[43] = averageIndustrialOutputPerCapita;
auxArray.push(averageIndustrialOutputPerCapita);
familyIncomeExpectation.averageIndustrialOutputPerCapita = averageIndustrialOutputPerCapita;

const needForFertilityControl = new NeedForFertilityControl();
qArray[44] = needForFertilityControl;
auxArray.push(needForFertilityControl);
needForFertilityControl.maxTotalFertility = maxTotalFertility;
needForFertilityControl.desiredTotalFertility = desiredTotalFertility;

const fertilityControlEffectiveness = new FertilityControlEffectiveness();
qArray[45] = fertilityControlEffectiveness;
auxArray.push(fertilityControlEffectiveness);
totalFertility.fertilityControlEffectiveness = fertilityControlEffectiveness;

const healthServicesImpactDelayK = 20; // years, for eqn 46
const fertilityControlFacilitiesPerCapita = new FertilityControlFacilitiesPerCapita(healthServicesImpactDelayK);
qArray[46] = fertilityControlFacilitiesPerCapita;
auxArray.push(fertilityControlFacilitiesPerCapita);
fertilityControlEffectiveness.fertilityControlFacilitiesPerCapita = fertilityControlFacilitiesPerCapita;

const fertilityControlAllocationPerCapita = new FertilityControlAllocationPerCapita();
qArray[47] = fertilityControlAllocationPerCapita;
auxArray.push(fertilityControlAllocationPerCapita);
fertilityControlFacilitiesPerCapita.fertilityControlAllocationPerCapita = fertilityControlAllocationPerCapita;

const fractionOfServicesAllocatedToFertilityControl = new FractionOfServicesAllocatedToFertilityControl();
qArray[48] = fractionOfServicesAllocatedToFertilityControl;
auxArray.push(fractionOfServicesAllocatedToFertilityControl);
fertilityControlAllocationPerCapita.fractionOfServicesAllocatedToFertilityControl = fractionOfServicesAllocatedToFertilityControl;
fractionOfServicesAllocatedToFertilityControl.needForFertilityControl = needForFertilityControl;

// THE CAPITAL SECTOR

// The Industrial Subsector

const industrialOutputPerCapita = new IndustrialOutputPerCapita();
qArray[49] = industrialOutputPerCapita;
auxArray.push(industrialOutputPerCapita);
crowdingMultiplierFromIndustrialization.industrialOutputPerCapita = industrialOutputPerCapita;
delayedIndustrialOutputPerCapita.industrialOutputPerCapita = industrialOutputPerCapita;
familyIncomeExpectation.industrialOutputPerCapita = industrialOutputPerCapita;
averageIndustrialOutputPerCapita.industrialOutputPerCapita = industrialOutputPerCapita;
industrialOutputPerCapita.population = population;

const industrialOutput = new IndustrialOutput();
qArray[50] = industrialOutput;
auxArray.push(industrialOutput);
industrialOutputPerCapita.industrialOutput = industrialOutput;

const industrialCapitalOutputRatio = new IndustrialCapitalOutputRatio(policyYear);
industrialCapitalOutputRatio.updateFn = function () {
  return clip(industrialCapitalOutputRatio.after, industrialCapitalOutputRatio.before, t, policyYear);
};
qArray[51] = industrialCapitalOutputRatio;
auxArray.push(industrialCapitalOutputRatio);
industrialOutput.industrialCapitalOutputRatio = industrialCapitalOutputRatio;

const industrialCapital = new IndustrialCapital(startTime, dt);
industrialCapital.updateFn = function () {
  return industrialCapital.j + dt * (industrialCapitalInvestmentRate.j - industrialCapitalDepreciationRate.j);
};
qArray[52] = industrialCapital;
levelArray.push(industrialCapital);
industrialOutput.industrialCapital = industrialCapital;

const industrialCapitalDepreciationRate = new IndustrialCapitalDepreciationRate();
qArray[53] = industrialCapitalDepreciationRate;
rateArray.push(industrialCapitalDepreciationRate);
industrialCapital.industrialCapitalDepreciationRate = industrialCapitalDepreciationRate;
industrialCapitalDepreciationRate.industrialCapital = industrialCapital;

const averageLifetimeOfIndustrialCapital = new AverageLifetimeOfIndustrialCapital(policyYear);
averageLifetimeOfIndustrialCapital.updateFn = function () {
  return clip(averageLifetimeOfIndustrialCapital.after, averageLifetimeOfIndustrialCapital.before, t, policyYear);
};
qArray[54] = averageLifetimeOfIndustrialCapital;
auxArray.push(averageLifetimeOfIndustrialCapital);
industrialCapitalDepreciationRate.averageLifetimeOfIndustrialCapital = averageLifetimeOfIndustrialCapital;

const industrialCapitalInvestmentRate = new IndustrialCapitalInvestmentRate();
qArray[55] = industrialCapitalInvestmentRate;
rateArray.push(industrialCapitalInvestmentRate);
industrialCapital.industrialCapitalInvestmentRate = industrialCapitalInvestmentRate;
industrialCapitalInvestmentRate.industrialOutput = industrialOutput;

const fractionOfIndustrialOutputAllocatedToIndustry = new FractionOfIndustrialOutputAllocatedToIndustry();
qArray[56] = fractionOfIndustrialOutputAllocatedToIndustry;
auxArray.push(fractionOfIndustrialOutputAllocatedToIndustry);
industrialCapitalInvestmentRate.fractionOfIndustrialOutputAllocatedToIndustry = fractionOfIndustrialOutputAllocatedToIndustry;

const fractionOfIndustrialOutputAllocatedToConsumption = new FractionOfIndustrialOutputAllocatedToConsumption();
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
fractionOfIndustrialOutputAllocatedToIndustry.fractionOfIndustrialOutputAllocatedToConsumption = fractionOfIndustrialOutputAllocatedToConsumption;

const fractionOfIndustrialOutputAllocatedToConsumptionConstant = new FractionOfIndustrialOutputAllocatedToConsumptionConstant(policyYear);
fractionOfIndustrialOutputAllocatedToConsumptionConstant.updateFn = function () {
  return clip(fractionOfIndustrialOutputAllocatedToConsumptionConstant.after, fractionOfIndustrialOutputAllocatedToConsumptionConstant.before, t, policyYear);
};
qArray[58] = fractionOfIndustrialOutputAllocatedToConsumptionConstant;
auxArray.push(fractionOfIndustrialOutputAllocatedToConsumptionConstant);
fractionOfIndustrialOutputAllocatedToConsumption.fractionOfIndustrialOutputAllocatedToConsumptionConstant =
  fractionOfIndustrialOutputAllocatedToConsumptionConstant;

const fractionOfIndustrialOutputAllocatedToConsumptionVariable = new FractionOfIndustrialOutputAllocatedToConsumptionVariable();
qArray[59] = fractionOfIndustrialOutputAllocatedToConsumptionVariable;
auxArray.push(fractionOfIndustrialOutputAllocatedToConsumptionVariable);
fractionOfIndustrialOutputAllocatedToConsumption.fractionOfIndustrialOutputAllocatedToConsumptionVariable =
  fractionOfIndustrialOutputAllocatedToConsumptionVariable;
fractionOfIndustrialOutputAllocatedToConsumptionVariable.industrialOutputPerCapita = industrialOutputPerCapita;

// The Service Subsector

const indicatedServiceOutputPerCapita = new IndicatedServiceOutputPerCapita(policyYear);
indicatedServiceOutputPerCapita.updateFn = function () {
  return clip(indicatedServiceOutputPerCapitaAfter.k, indicatedServiceOutputPerCapitaBefore.k, t, policyYear);
};
qArray[60] = indicatedServiceOutputPerCapita;
auxArray.push(indicatedServiceOutputPerCapita);

const indicatedServiceOutputPerCapitaBefore = new IndicatedServiceOutputPerCapitaBefore();
qArray[61] = indicatedServiceOutputPerCapitaBefore;
auxArray.push(indicatedServiceOutputPerCapitaBefore);
indicatedServiceOutputPerCapita.indicatedServiceOutputPerCapitaBefore = indicatedServiceOutputPerCapitaBefore;
indicatedServiceOutputPerCapitaBefore.industrialOutputPerCapita = industrialOutputPerCapita;

const indicatedServiceOutputPerCapitaAfter = new IndicatedServiceOutputPerCapitaAfter();
qArray[62] = indicatedServiceOutputPerCapitaAfter;
auxArray.push(indicatedServiceOutputPerCapitaAfter);
indicatedServiceOutputPerCapita.indicatedServiceOutputPerCapitaAfter = indicatedServiceOutputPerCapitaAfter;
indicatedServiceOutputPerCapitaAfter.industrialOutputPerCapita = industrialOutputPerCapita;

const fractionOfIndustrialOutputAllocatedToServices = new FractionOfIndustrialOutputAllocatedToServices(policyYear);
fractionOfIndustrialOutputAllocatedToServices.updateFn = function () {
  return clip(fractionOfIndustrialOutputAllocatedToServicesAfter.k, fractionOfIndustrialOutputAllocatedToServicesBefore.k, t, policyYear);
};
qArray[63] = fractionOfIndustrialOutputAllocatedToServices;
auxArray.push(fractionOfIndustrialOutputAllocatedToServices);
fractionOfIndustrialOutputAllocatedToIndustry.fractionOfIndustrialOutputAllocatedToServices = fractionOfIndustrialOutputAllocatedToServices;

const fractionOfIndustrialOutputAllocatedToServicesBefore = new FractionOfIndustrialOutputAllocatedToServicesBefore();
qArray[64] = fractionOfIndustrialOutputAllocatedToServicesBefore;
auxArray.push(fractionOfIndustrialOutputAllocatedToServicesBefore);
fractionOfIndustrialOutputAllocatedToServices.fractionOfIndustrialOutputAllocatedToServicesBefore = fractionOfIndustrialOutputAllocatedToServicesBefore;
fractionOfIndustrialOutputAllocatedToServicesBefore.indicatedServiceOutputPerCapita = indicatedServiceOutputPerCapita;

const fractionOfIndustrialOutputAllocatedToServicesAfter = new FractionOfIndustrialOutputAllocatedToServicesAfter();
qArray[65] = fractionOfIndustrialOutputAllocatedToServicesAfter;
auxArray.push(fractionOfIndustrialOutputAllocatedToServicesAfter);
fractionOfIndustrialOutputAllocatedToServices.fractionOfIndustrialOutputAllocatedToServicesAfter = fractionOfIndustrialOutputAllocatedToServicesAfter;
fractionOfIndustrialOutputAllocatedToServicesAfter.indicatedServiceOutputPerCapita = indicatedServiceOutputPerCapita;

const serviceCapitalInvestmentRate = new ServiceCapitalInvestmentRate();
qArray[66] = serviceCapitalInvestmentRate;
rateArray.push(serviceCapitalInvestmentRate);
serviceCapitalInvestmentRate.industrialOutput = industrialOutput;
serviceCapitalInvestmentRate.fractionOfIndustrialOutputAllocatedToServices = fractionOfIndustrialOutputAllocatedToServices;

const serviceCapital = new ServiceCapital();
serviceCapital.updateFn = function () {
  return serviceCapital.j + dt * (serviceCapitalInvestmentRate.j - serviceCapitalDepreciationRate.j);
};
qArray[67] = serviceCapital;
levelArray.push(serviceCapital);
serviceCapital.serviceCapitalInvestmentRate = serviceCapitalInvestmentRate;

const serviceCapitalDepreciationRate = new ServiceCapitalDepreciationRate();
qArray[68] = serviceCapitalDepreciationRate;
rateArray.push(serviceCapitalDepreciationRate);
serviceCapital.serviceCapitalDepreciationRate = serviceCapitalDepreciationRate;
serviceCapitalDepreciationRate.serviceCapital = serviceCapital;

const averageLifetimeOfServiceCapital = new AverageLifetimeOfServiceCapital(policyYear);
averageLifetimeOfServiceCapital.updateFn = function () {
  return clip(averageLifetimeOfServiceCapital.after, averageLifetimeOfServiceCapital.before, t, policyYear);
};
qArray[69] = averageLifetimeOfServiceCapital;
auxArray.push(averageLifetimeOfServiceCapital);
serviceCapitalDepreciationRate.averageLifetimeOfServiceCapital = averageLifetimeOfServiceCapital;

const serviceOutput = new ServiceOutput();
qArray[70] = serviceOutput;
auxArray.push(serviceOutput);
serviceOutput.serviceCapital = serviceCapital;

const serviceOutputPerCapita = new ServiceOutputPerCapita();
qArray[71] = serviceOutputPerCapita;
auxArray.push(serviceOutputPerCapita);
healthServicesAllocationsPerCapita.serviceOutputPerCapita = serviceOutputPerCapita;
fertilityControlAllocationPerCapita.serviceOutputPerCapita = serviceOutputPerCapita;
fractionOfIndustrialOutputAllocatedToServicesBefore.serviceOutputPerCapita = serviceOutputPerCapita;
fractionOfIndustrialOutputAllocatedToServicesAfter.serviceOutputPerCapita = serviceOutputPerCapita;
serviceOutputPerCapita.population = population;
serviceOutputPerCapita.serviceOutput = serviceOutput;

const serviceCapitalOutputRatio = new ServiceCapitalOutputRatio(policyYear);
serviceCapitalOutputRatio.updateFn = function () {
  return clip(serviceCapitalOutputRatio.after, serviceCapitalOutputRatio.before, t, policyYear);
};
qArray[72] = serviceCapitalOutputRatio;
auxArray.push(serviceCapitalOutputRatio);
serviceOutput.serviceCapitalOutputRatio = serviceCapitalOutputRatio;

// The Jobs Subsector

const jobs = new Jobs();
qArray[73] = jobs;
auxArray.push(jobs);

const potentialJobsInIndustrialSector = new PotentialJobsInIndustrialSector();
qArray[74] = potentialJobsInIndustrialSector;
auxArray.push(potentialJobsInIndustrialSector);
jobs.potentialJobsInIndustrialSector = potentialJobsInIndustrialSector;
potentialJobsInIndustrialSector.industrialCapital = industrialCapital;

const jobsPerIndustrialCapitalUnit = new JobsPerIndustrialCapitalUnit();
qArray[75] = jobsPerIndustrialCapitalUnit;
auxArray.push(jobsPerIndustrialCapitalUnit);
potentialJobsInIndustrialSector.jobsPerIndustrialCapitalUnit = jobsPerIndustrialCapitalUnit;
jobsPerIndustrialCapitalUnit.industrialOutputPerCapita = industrialOutputPerCapita;

const potentialJobsInServiceSector = new PotentialJobsInServiceSector();
qArray[76] = potentialJobsInServiceSector;
auxArray.push(potentialJobsInServiceSector);
jobs.potentialJobsInServiceSector = potentialJobsInServiceSector;
potentialJobsInServiceSector.serviceCapital = serviceCapital;

const jobsPerServiceCapitalUnit = new JobsPerServiceCapitalUnit();
qArray[77] = jobsPerServiceCapitalUnit;
auxArray.push(jobsPerServiceCapitalUnit);
potentialJobsInServiceSector.jobsPerServiceCapitalUnit = jobsPerServiceCapitalUnit;
jobsPerServiceCapitalUnit.serviceOutputPerCapita = serviceOutputPerCapita;

const potentialJobsInAgriculturalSector = new PotentialJobsInAgriculturalSector();
qArray[78] = potentialJobsInAgriculturalSector;
auxArray.push(potentialJobsInAgriculturalSector);
jobs.potentialJobsInAgriculturalSector = potentialJobsInAgriculturalSector;

const jobsPerHectare = new JobsPerHectare();
qArray[79] = jobsPerHectare;
auxArray.push(jobsPerHectare);
potentialJobsInAgriculturalSector.jobsPerHectare = jobsPerHectare;

const laborForce = new LaborForce();
qArray[80] = laborForce;
auxArray.push(laborForce);
laborForce.population15To44 = population15To44;
laborForce.population45To64 = population45To64;

const laborUtilizationFraction = new LaborUtilizationFraction();
qArray[81] = laborUtilizationFraction;
auxArray.push(laborUtilizationFraction);
laborUtilizationFraction.jobs = jobs;
laborUtilizationFraction.laborForce = laborForce;

const laborUtilizationFractionDelayedDelayTime = 2; // years, eqn 82
const laborUtilizationFractionDelayed = new LaborUtilizationFractionDelayed(laborUtilizationFractionDelayedDelayTime);
qArray[82] = laborUtilizationFractionDelayed;
auxArray.push(laborUtilizationFractionDelayed);
laborUtilizationFractionDelayed.laborUtilizationFraction = laborUtilizationFraction;

const capitalUtilizationFraction = new CapitalUtilizationFraction();
qArray[83] = capitalUtilizationFraction;
auxArray.push(capitalUtilizationFraction);
industrialOutput.capitalUtilizationFraction = capitalUtilizationFraction;
serviceOutput.capitalUtilizationFraction = capitalUtilizationFraction;
capitalUtilizationFraction.laborUtilizationFractionDelayed = laborUtilizationFractionDelayed;

// THE AGRICULTURAL SECTOR

// Loop 1: Food from Investment in Land Development

const potentiallyArableLandTotal = 3.2e9;
const landFractionCultivated = new LandFractionCultivated(potentiallyArableLandTotal);
qArray[84] = landFractionCultivated;
auxArray.push(landFractionCultivated);

const arableLand = new ArableLand();
arableLand.updateFn = function () {
  return arableLand.j + dt * (landDevelopmentRate.j - landErosionRate.j - landRemovalForUrbanIndustrialUse.j);
};
qArray[85] = arableLand;
levelArray.push(arableLand);
potentialJobsInAgriculturalSector.arableLand = arableLand;
landFractionCultivated.arableLand = arableLand;

const potentiallyArableLand = new PotentiallyArableLand();
potentiallyArableLand.updateFn = function () {
  return potentiallyArableLand.j + dt * -landDevelopmentRate.j;
};
qArray[86] = potentiallyArableLand;
levelArray.push(potentiallyArableLand);

const food = new Food();
qArray[87] = food;
auxArray.push(food);
food.arableLand = arableLand;

const foodPerCapita = new FoodPerCapita();
qArray[88] = foodPerCapita;
auxArray.push(foodPerCapita);
lifetimeMultiplierFromFood.foodPerCapita = foodPerCapita;
foodPerCapita.food = food;
foodPerCapita.population = population;

const indicatedFoodPerCapita = new IndicatedFoodPerCapita(policyYear);
indicatedFoodPerCapita.updateFn = function () {
  return clip(indicatedFoodPerCapitaAfter.k, indicatedFoodPerCapitaBefore.k, t, policyYear);
};
qArray[89] = indicatedFoodPerCapita;
auxArray.push(indicatedFoodPerCapita);

const indicatedFoodPerCapitaBefore = new IndicatedFoodPerCapitaBefore();
qArray[90] = indicatedFoodPerCapitaBefore;
auxArray.push(indicatedFoodPerCapitaBefore);
indicatedFoodPerCapita.indicatedFoodPerCapitaBefore = indicatedFoodPerCapitaBefore;
indicatedFoodPerCapitaBefore.industrialOutputPerCapita = industrialOutputPerCapita;

const indicatedFoodPerCapitaAfter = new IndicatedFoodPerCapitaAfter();
qArray[91] = indicatedFoodPerCapitaAfter;
auxArray.push(indicatedFoodPerCapitaAfter);
indicatedFoodPerCapita.indicatedFoodPerCapitaAfter = indicatedFoodPerCapitaAfter;
indicatedFoodPerCapitaAfter.industrialOutputPerCapita = industrialOutputPerCapita;

const totalAgriculturalInvestment = new TotalAgriculturalInvestment();
qArray[92] = totalAgriculturalInvestment;
auxArray.push(totalAgriculturalInvestment);
totalAgriculturalInvestment.industrialOutput = industrialOutput;

const fractionOfIndustrialOutputAllocatedToAgriculture = new FractionOfIndustrialOutputAllocatedToAgriculture(policyYear);
fractionOfIndustrialOutputAllocatedToAgriculture.updateFn = function () {
  return clip(fractionOfIndustrialOutputAllocatedToAgricultureAfter.k, fractionOfIndustrialOutputAllocatedToAgricultureBefore.k, t, policyYear);
};
qArray[93] = fractionOfIndustrialOutputAllocatedToAgriculture;
auxArray.push(fractionOfIndustrialOutputAllocatedToAgriculture);
fractionOfIndustrialOutputAllocatedToIndustry._fractionOfIndustrialOutputAllocatedToAgriculture = fractionOfIndustrialOutputAllocatedToAgriculture;
totalAgriculturalInvestment.fractionOfIndustrialOutputAllocatedToAgriculture = fractionOfIndustrialOutputAllocatedToAgriculture;

const fractionOfIndustrialOutputAllocatedToAgricultureBefore = new FractionOfIndustrialOutputAllocatedToAgricultureBefore();
qArray[94] = fractionOfIndustrialOutputAllocatedToAgricultureBefore;
auxArray.push(fractionOfIndustrialOutputAllocatedToAgricultureBefore);
fractionOfIndustrialOutputAllocatedToAgriculture.fractionOfIndustrialOutputAllocatedToAgricultureBefore =
  fractionOfIndustrialOutputAllocatedToAgricultureBefore;
fractionOfIndustrialOutputAllocatedToAgricultureBefore.foodPerCapita = foodPerCapita;
fractionOfIndustrialOutputAllocatedToAgricultureBefore.indicatedFoodPerCapita = indicatedFoodPerCapita;

const fractionOfIndustrialOutputAllocatedToAgricultureAfter = new FractionOfIndustrialOutputAllocatedToAgricultureAfter();
qArray[95] = fractionOfIndustrialOutputAllocatedToAgricultureAfter;
auxArray.push(fractionOfIndustrialOutputAllocatedToAgricultureAfter);
fractionOfIndustrialOutputAllocatedToAgriculture.fractionOfIndustrialOutputAllocatedToAgricultureAfter = fractionOfIndustrialOutputAllocatedToAgricultureAfter;
fractionOfIndustrialOutputAllocatedToAgricultureAfter.foodPerCapita = foodPerCapita;
fractionOfIndustrialOutputAllocatedToAgricultureAfter.indicatedFoodPerCapita = indicatedFoodPerCapita;

const landDevelopmentRate = new LandDevelopmentRate();
qArray[96] = landDevelopmentRate;
rateArray.push(landDevelopmentRate);
arableLand.landDevelopmentRate = landDevelopmentRate;
potentiallyArableLand.landDevelopmentRate = landDevelopmentRate;
landDevelopmentRate.totalAgriculturalInvestment = totalAgriculturalInvestment;

const developmentCostPerHectare = new DevelopmentCostPerHectare();
qArray[97] = developmentCostPerHectare;
auxArray.push(developmentCostPerHectare);
landDevelopmentRate.developmentCostPerHectare = developmentCostPerHectare;
developmentCostPerHectare.potentiallyArableLand = potentiallyArableLand;
developmentCostPerHectare.potentiallyArableLandTotal = potentiallyArableLandTotal;

// Loop 2: Food from Investment in Agricultural Inputs

const currentAgriculturalInputs = new CurrentAgriculturalInputs();
qArray[98] = currentAgriculturalInputs;
auxArray.push(currentAgriculturalInputs);
currentAgriculturalInputs.totalAgriculturalInvestment = totalAgriculturalInvestment;

const averageLifetimeOfAgriculturalInputsK = 2; // years, eqn 99 (in lieu of 100)
const agriculturalInputs = new AgriculturalInputs(averageLifetimeOfAgriculturalInputsK);
qArray[99] = agriculturalInputs;
auxArray.push(agriculturalInputs);
agriculturalInputs.currentAgriculturalInputs = currentAgriculturalInputs;

// note: output of this equation goes unused
const averageLifetimeOfAgriculturalInputs = new AverageLifetimeOfAgriculturalInputs(policyYear);
averageLifetimeOfAgriculturalInputs.updateFn = function () {
  return clip(this.after, this.before, t, policyYear);
};
qArray[100] = averageLifetimeOfAgriculturalInputs;
auxArray.push(averageLifetimeOfAgriculturalInputs);

const agriculturalInputsPerHectare = new AgriculturalInputsPerHectare();
qArray[101] = agriculturalInputsPerHectare;
auxArray.push(agriculturalInputsPerHectare);
jobsPerHectare.agriculturalInputsPerHectare = agriculturalInputsPerHectare;
agriculturalInputsPerHectare.agriculturalInputs = agriculturalInputs;
agriculturalInputsPerHectare.arableLand = arableLand;

const landYieldMultiplierFromCapital = new LandYieldMultiplierFromCapital();
qArray[102] = landYieldMultiplierFromCapital;
auxArray.push(landYieldMultiplierFromCapital);
landYieldMultiplierFromCapital.agriculturalInputsPerHectare = agriculturalInputsPerHectare;

const landYield = new LandYield();
qArray[103] = landYield;
auxArray.push(landYield);
food.landYield = landYield;
landYield._landYieldMultiplierFromCapital = landYieldMultiplierFromCapital;

const landYieldFactor = new LandYieldFactor();
landYieldFactor.updateFn = function () {
  return clip(this.after, this.before, t, policyYear);
};
qArray[104] = landYieldFactor;
auxArray.push(landYieldFactor);
landYield.landYieldFactor = landYieldFactor;

const landYieldMultiplierFromAirPollution = new LandYieldMultiplierFromAirPollution(policyYear);
landYieldMultiplierFromAirPollution.updateFn = function () {
  return clip(landYieldMultiplierFromAirPollutionAfter.k, landYieldMultiplierFromAirPollutionBefore.k, t, policyYear);
};
qArray[105] = landYieldMultiplierFromAirPollution;
auxArray.push(landYieldMultiplierFromAirPollution);
landYield.landYieldMultiplierFromAirPollution = landYieldMultiplierFromAirPollution;

const landYieldMultiplierFromAirPollutionBefore = new LandYieldMultiplierFromAirPollutionBefore();
qArray[106] = landYieldMultiplierFromAirPollutionBefore;
auxArray.push(landYieldMultiplierFromAirPollutionBefore);
landYieldMultiplierFromAirPollution.landYieldMultiplierFromAirPollutionBefore = landYieldMultiplierFromAirPollutionBefore;
landYieldMultiplierFromAirPollutionBefore.industrialOutput = industrialOutput;

const landYieldMultiplierFromAirPollutionAfter = new LandYieldMultiplierFromAirPollutionAfter();
qArray[107] = landYieldMultiplierFromAirPollutionAfter;
auxArray.push(landYieldMultiplierFromAirPollutionAfter);
landYieldMultiplierFromAirPollution.landYieldMultiplierFromAirPollutionAfter = landYieldMultiplierFromAirPollutionAfter;
landYieldMultiplierFromAirPollutionAfter.industrialOutput = industrialOutput;

// Loops 1 and 2: The Investment Allocation Decision

const fractionOfInputsAllocatedToLandDevelopment = new FractionOfInputsAllocatedToLandDevelopment();
qArray[108] = fractionOfInputsAllocatedToLandDevelopment;
auxArray.push(fractionOfInputsAllocatedToLandDevelopment);
landDevelopmentRate.fractionOfInputsAllocatedToLandDevelopment = fractionOfInputsAllocatedToLandDevelopment;
currentAgriculturalInputs.fractionOfInputsAllocatedToLandDevelopment = fractionOfInputsAllocatedToLandDevelopment;

const marginalProductivityOfLandDevelopment = new MarginalProductivityOfLandDevelopment();
qArray[109] = marginalProductivityOfLandDevelopment;
auxArray.push(marginalProductivityOfLandDevelopment);
fractionOfInputsAllocatedToLandDevelopment.marginalProductivityOfLandDevelopment = marginalProductivityOfLandDevelopment;
marginalProductivityOfLandDevelopment.landYield = landYield;
marginalProductivityOfLandDevelopment.developmentCostPerHectare = developmentCostPerHectare;

const marginalProductivityOfAgriculturalInputs = new MarginalProductivityOfAgriculturalInputs();
qArray[110] = marginalProductivityOfAgriculturalInputs;
auxArray.push(marginalProductivityOfAgriculturalInputs);
fractionOfInputsAllocatedToLandDevelopment.marginalProductivityOfAgriculturalInputs = marginalProductivityOfAgriculturalInputs;
marginalProductivityOfAgriculturalInputs.landYield = landYield;
marginalProductivityOfAgriculturalInputs.averageLifetimeOfAgriculturalInputsK = averageLifetimeOfAgriculturalInputsK;
marginalProductivityOfAgriculturalInputs.landYieldMultiplierFromCapital = landYieldMultiplierFromCapital;

const marginalLandYieldMultiplierFromCapital = new MarginalLandYieldMultiplierFromCapital();
qArray[111] = marginalLandYieldMultiplierFromCapital;
auxArray.push(marginalLandYieldMultiplierFromCapital);
marginalProductivityOfAgriculturalInputs.marginalLandYieldMultiplierFromCapital = marginalLandYieldMultiplierFromCapital;
marginalLandYieldMultiplierFromCapital.agriculturalInputsPerHectare = agriculturalInputsPerHectare;

// Loop 3: Land Erosion and Urban-Industrial Use

const averageLifeOfLand = new AverageLifeOfLand();
qArray[112] = averageLifeOfLand;
auxArray.push(averageLifeOfLand);

const landLifeMultiplierFromYield = new LandLifeMultiplierFromYield();
landLifeMultiplierFromYield.updateFn = function () {
  return clip(landLifeMultiplierFromYieldAfter.k, landLifeMultiplierFromYieldBefore.k, t, policyYear);
};
qArray[113] = landLifeMultiplierFromYield;
auxArray.push(landLifeMultiplierFromYield);
averageLifeOfLand.landLifeMultiplierFromYield = landLifeMultiplierFromYield;

const inherentLandFertilityK = 600; // kilograms per hectare-year, used in eqns 114, 115 and 124
const landLifeMultiplierFromYieldBefore = new LandLifeMultiplierFromYieldBefore(inherentLandFertilityK);
qArray[114] = landLifeMultiplierFromYieldBefore;
auxArray.push(landLifeMultiplierFromYieldBefore);
landLifeMultiplierFromYield.landLifeMultiplierFromYieldBefore = landLifeMultiplierFromYieldBefore;
landLifeMultiplierFromYieldBefore.landYield = landYield;

const landLifeMultiplierFromYieldAfter = new LandLifeMultiplierFromYieldAfter(inherentLandFertilityK);
qArray[115] = landLifeMultiplierFromYieldAfter;
auxArray.push(landLifeMultiplierFromYieldAfter);
landLifeMultiplierFromYield.landLifeMultiplierFromYieldAfter = landLifeMultiplierFromYieldAfter;
landLifeMultiplierFromYieldAfter.landYield = landYield;

const landErosionRate = new LandErosionRate();
qArray[116] = landErosionRate;
rateArray.push(landErosionRate);
arableLand.landErosionRate = landErosionRate;
landErosionRate.arableLand = arableLand;
landErosionRate.averageLifeOfLand = averageLifeOfLand;

const urbanIndustrialLandPerCapita = new UrbanIndustrialLandPerCapita();
qArray[117] = urbanIndustrialLandPerCapita;
auxArray.push(urbanIndustrialLandPerCapita);
urbanIndustrialLandPerCapita.industrialOutputPerCapita = industrialOutputPerCapita;

const urbanIndustrialLandRequired = new UrbanIndustrialLandRequired();
qArray[118] = urbanIndustrialLandRequired;
auxArray.push(urbanIndustrialLandRequired);
urbanIndustrialLandRequired.population = population;
urbanIndustrialLandRequired.urbanIndustrialLandPerCapita = urbanIndustrialLandPerCapita;

const landRemovalForUrbanIndustrialUse = new LandRemovalForUrbanIndustrialUse();
qArray[119] = landRemovalForUrbanIndustrialUse;
rateArray.push(landRemovalForUrbanIndustrialUse);
arableLand.landRemovalForUrbanIndustrialUse = landRemovalForUrbanIndustrialUse;
landRemovalForUrbanIndustrialUse.urbanIndustrialLandRequired = urbanIndustrialLandRequired;

const urbanIndustrialLand = new UrbanIndustrialLand(startTime);
urbanIndustrialLand.updateFn = function () {
  return urbanIndustrialLand.j + dt * landRemovalForUrbanIndustrialUse.j;
};
qArray[120] = urbanIndustrialLand;
levelArray.push(urbanIndustrialLand);
landRemovalForUrbanIndustrialUse.urbanIndustrialLand = urbanIndustrialLand;
urbanIndustrialLand.landRemovalForUrbanIndustrialUse = landRemovalForUrbanIndustrialUse;

// Loop 4: Land fertility degradation

const landFertility = new LandFertility(startTime);
landFertility.updateFn = function () {
  return landFertility.j + dt * (landFertilityRegeneration.j - landFertilityDegradation.j);
};
qArray[121] = landFertility;
levelArray.push(landFertility);
landYield.landFertility = landFertility;

const landFertilityDegradationRate = new LandFertilityDegradationRate();
qArray[122] = landFertilityDegradationRate;
auxArray.push(landFertilityDegradationRate);

const landFertilityDegradation = new LandFertilityDegradation();
qArray[123] = landFertilityDegradation;
rateArray.push(landFertilityDegradation);
landFertility.landFertilityDegradation = landFertilityDegradation;
landFertilityDegradation.landFertility = landFertility;
landFertilityDegradation.landFertilityDegradationRate = landFertilityDegradationRate;

// Loop 5: Land fertility regeneration

const landFertilityRegeneration = new LandFertilityRegeneration();
qArray[124] = landFertilityRegeneration;
rateArray.push(landFertilityRegeneration);
landFertility.landFertilityRegeneration = landFertilityRegeneration;
landFertilityRegeneration.landFertility = landFertility;
landFertilityRegeneration.inherentLandFertilityK = inherentLandFertilityK;

const landFertilityRegenerationTime = new LandFertilityRegenerationTime();
qArray[125] = landFertilityRegenerationTime;
auxArray.push(landFertilityRegenerationTime);
landFertilityRegeneration.landFertilityRegenerationTime = landFertilityRegenerationTime;

// Loop 6: Discontinuing land maintenance

const fractionOfInputsAllocatedToLandMaintenance = new FractionOfInputsAllocatedToLandMaintenance();
qArray[126] = fractionOfInputsAllocatedToLandMaintenance;
auxArray.push(fractionOfInputsAllocatedToLandMaintenance);
agriculturalInputsPerHectare.fractionOfInputsAllocatedToLandMaintenance = fractionOfInputsAllocatedToLandMaintenance;
landFertilityRegenerationTime.fractionOfInputsAllocatedToLandMaintenance = fractionOfInputsAllocatedToLandMaintenance;

const foodRatio = new FoodRatio(subsistenceFoodPerCapitaK);
qArray[127] = foodRatio;
auxArray.push(foodRatio);
foodRatio.foodPerCapita = foodPerCapita;

const foodShortagePerceptionDelayK = 2; // years, used in eqn 128
const perceivedFoodRatio = new PerceivedFoodRatio(foodShortagePerceptionDelayK);
qArray[128] = perceivedFoodRatio;
auxArray.push(perceivedFoodRatio);
fractionOfInputsAllocatedToLandMaintenance.perceivedFoodRatio = perceivedFoodRatio;
perceivedFoodRatio.foodRatio = foodRatio;

// NONRENEWABLE RESOURCE SECTOR

let nonrenewableResourcesInitialK = 1.0e12; // resource units, used in eqns 129 and 133
const nonrenewableResources = new NonRenewableResources(nonrenewableResourcesInitialK, startTime);
nonrenewableResources.updateFn = function () {
  return nonrenewableResources.j + dt * -nonrenewableResourceUsageRate.j;
};
qArray[129] = nonrenewableResources;
levelArray.push(nonrenewableResources);

const nonrenewableResourceUsageRate = new NonRenewableResourceUsageRate();
qArray[130] = nonrenewableResourceUsageRate;
rateArray.push(nonrenewableResourceUsageRate);
nonrenewableResources.nonRenewableResourceUsageRate = nonrenewableResourceUsageRate;
nonrenewableResourceUsageRate.population = population;

const nonrenewableResourceUsageFactor = new NonRenewableResourceUsageFactor(policyYear);
nonrenewableResourceUsageFactor.updateFn = function () {
  return clip(this.after, this.before, t, policyYear);
};
qArray[131] = nonrenewableResourceUsageFactor;
auxArray.push(nonrenewableResourceUsageFactor);
nonrenewableResourceUsageRate.nonRenewableResourceUsageFactor = nonrenewableResourceUsageFactor;

const perCapitaResourceUsageMultiplier = new PerCapitaResourceUsageMultiplier();
qArray[132] = perCapitaResourceUsageMultiplier;
auxArray.push(perCapitaResourceUsageMultiplier);
nonrenewableResourceUsageRate.perCapitaResourceUsageMultiplier = perCapitaResourceUsageMultiplier;
perCapitaResourceUsageMultiplier.industrialOutputPerCapita = industrialOutputPerCapita;

const nonrenewableResourceFractionRemaining = new NonRenewableResourceFractionRemaining(nonrenewableResourcesInitialK);
qArray[133] = nonrenewableResourceFractionRemaining;
auxArray.push(nonrenewableResourceFractionRemaining);
nonrenewableResourceFractionRemaining.nonRenewableResources = nonrenewableResources;

const fractionOfCapitalAllocatedToObtainingResources = new FractionOfCapitalAllocatedToObtainingResources(policyYear);
fractionOfCapitalAllocatedToObtainingResources.updateFn = function () {
  return clip(fractionOfCapitalAllocatedToObtainingResourcesAfter.k, fractionOfCapitalAllocatedToObtainingResourcesBefore.k, t, policyYear);
};
qArray[134] = fractionOfCapitalAllocatedToObtainingResources;
auxArray.push(fractionOfCapitalAllocatedToObtainingResources);
industrialOutput.fractionOfCapitalAllocatedToObtainingResources = fractionOfCapitalAllocatedToObtainingResources;

const fractionOfCapitalAllocatedToObtainingResourcesBefore = new FractionOfCapitalAllocatedToObtainingResourcesBefore();
qArray[135] = fractionOfCapitalAllocatedToObtainingResourcesBefore;
auxArray.push(fractionOfCapitalAllocatedToObtainingResourcesBefore);
fractionOfCapitalAllocatedToObtainingResources.fractionOfCapitalAllocatedToObtainingResourcesBefore = fractionOfCapitalAllocatedToObtainingResourcesBefore;
fractionOfCapitalAllocatedToObtainingResourcesBefore.nonRenewableResourceFractionRemaining = nonrenewableResourceFractionRemaining;

const fractionOfCapitalAllocatedToObtainingResourcesAfter = new FractionOfCapitalAllocatedToObtainingResourcesAfter();
qArray[136] = fractionOfCapitalAllocatedToObtainingResourcesAfter;
auxArray.push(fractionOfCapitalAllocatedToObtainingResourcesAfter);
fractionOfCapitalAllocatedToObtainingResources.fractionOfCapitalAllocatedToObtainingResourcesAfter = fractionOfCapitalAllocatedToObtainingResourcesAfter;
fractionOfCapitalAllocatedToObtainingResourcesAfter.nonRenewableResourceFractionRemaining = nonrenewableResourceFractionRemaining;

// PERSISTENT POLLUTION SECTOR

const persistentPollutionGenerationRate = new PersistentPollutionGenerationRate();
qArray[137] = persistentPollutionGenerationRate;
rateArray.push(persistentPollutionGenerationRate);

const persistentPollutionGenerationFactor = new PersistentPollutionGenerationFactor(policyYear);
persistentPollutionGenerationFactor.updateFn = function () {
  return clip(this.after, this.before, t, policyYear);
};
qArray[138] = persistentPollutionGenerationFactor;
auxArray.push(persistentPollutionGenerationFactor);
persistentPollutionGenerationRate.persistentPollutionGenerationFactor = persistentPollutionGenerationFactor;

const persistentPollutionGeneratedByIndustrialOutput = new PersistentPollutionGeneratedByIndustrialOutput();
qArray[139] = persistentPollutionGeneratedByIndustrialOutput;
auxArray.push(persistentPollutionGeneratedByIndustrialOutput);
persistentPollutionGenerationRate.persistentPollutionGeneratedByIndustrialOutput = persistentPollutionGeneratedByIndustrialOutput;
persistentPollutionGeneratedByIndustrialOutput.perCapitaResourceUsageMultiplier = perCapitaResourceUsageMultiplier;
persistentPollutionGeneratedByIndustrialOutput.population = population;

const persistentPollutionGeneratedByAgriculturalOutput = new PersistentPollutionGeneratedByAgriculturalOutput();
qArray[140] = persistentPollutionGeneratedByAgriculturalOutput;
auxArray.push(persistentPollutionGeneratedByAgriculturalOutput);
persistentPollutionGenerationRate.persistentPollutionGeneratedByAgriculturalOutput = persistentPollutionGeneratedByAgriculturalOutput;
persistentPollutionGeneratedByAgriculturalOutput.agriculturalInputsPerHectare = agriculturalInputsPerHectare;
persistentPollutionGeneratedByAgriculturalOutput.arableLand = arableLand;

const persistentPollutionTransmissionDelayK = 20; // years, used in eqn 141
const persistenPollutionAppearanceRate = new PersistenPollutionAppearanceRate(persistentPollutionTransmissionDelayK);
qArray[141] = persistenPollutionAppearanceRate;
rateArray.push(persistenPollutionAppearanceRate);
persistenPollutionAppearanceRate.persistentPollutionGenerationRate = persistentPollutionGenerationRate;

const persistentPollution = new PersistentPollution(startTime);
persistentPollution.updateFn = function () {
  return persistentPollution.j + dt * (persistenPollutionAppearanceRate.j - persistenPollutionAssimilationRate.j);
};
qArray[142] = persistentPollution;
levelArray.push(persistentPollution);
persistentPollution.persistenPollutionAppearanceRate = persistenPollutionAppearanceRate;

const indexOfPersistentPollution = new IndexOfPersistentPollution();
qArray[143] = indexOfPersistentPollution;
auxArray.push(indexOfPersistentPollution);
lifetimeMultiplierFromPollution.indexOfPersistentPollution = indexOfPersistentPollution;
landFertilityDegradationRate.indexOfPersistentPollution = indexOfPersistentPollution;
indexOfPersistentPollution.persistentPollution = persistentPollution;

const persistenPollutionAssimilationRate = new PersistenPollutionAssimilationRate();
qArray[144] = persistenPollutionAssimilationRate;
rateArray.push(persistenPollutionAssimilationRate);
persistentPollution.persistenPollutionAssimilationRate = persistenPollutionAssimilationRate;
persistenPollutionAssimilationRate.persistentPollution = persistentPollution;

const assimilationHalfLifeMultiplier = new AssimilationHalfLifeMultiplier();
qArray[145] = assimilationHalfLifeMultiplier;
auxArray.push(assimilationHalfLifeMultiplier);
assimilationHalfLifeMultiplier.indexOfPersistentPollution = indexOfPersistentPollution;

const assimilationHalfLife = new AssimilationHalfLife();
qArray[146] = assimilationHalfLife;
auxArray.push(assimilationHalfLife);
persistenPollutionAssimilationRate.assimilationHalfLife = assimilationHalfLife;
assimilationHalfLife.assimilationHalfLifeMultiplier = assimilationHalfLifeMultiplier;

// SUPPLEMENTARY EQUATIONS

const fractionOfOutputInAgriculture = new FractionOfOutputInAgriculture();
qArray[147] = fractionOfOutputInAgriculture;
auxArray.push(fractionOfOutputInAgriculture);
fractionOfOutputInAgriculture.food = food;
fractionOfOutputInAgriculture.serviceOutput = serviceOutput;
fractionOfOutputInAgriculture.industrialOutput = industrialOutput;

const fractionOfOutputInIndustry = new FractionOfOutputInIndustry();
qArray[148] = fractionOfOutputInIndustry;
auxArray.push(fractionOfOutputInIndustry);
fractionOfOutputInIndustry.food = food;
fractionOfOutputInIndustry.industrialOutput = industrialOutput;
fractionOfOutputInIndustry.serviceOutput = serviceOutput;

const fractionOfOutputInServices = new FractionOfOutputInServices();
qArray[149] = fractionOfOutputInServices;
auxArray.push(fractionOfOutputInServices);
fractionOfOutputInServices.food = food;
fractionOfOutputInServices.industrialOutput = industrialOutput;
fractionOfOutputInServices.serviceOutput = serviceOutput;

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
