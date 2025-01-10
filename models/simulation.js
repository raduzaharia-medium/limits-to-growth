import { AgriculturalInputs } from "./equations/specialized/agriculture/agriculturalInputs.js";
import { AgriculturalInputsPerHectare } from "./equations/specialized/agriculture/agriculturalInputsPerHectare.js";
import { AverageLifetimeOfAgriculturalInputs } from "./equations/specialized/agriculture/averageLifetimeOfAgriculturalInputs.js";
import { CurrentAgriculturalInputs } from "./equations/specialized/agriculture/currentAgriculturalInputs.js";
import { Food } from "./equations/specialized/agriculture/food/food.js";
import { FoodPerCapita } from "./equations/specialized/agriculture/food/foodPerCapita.js";
import { FoodRatio } from "./equations/specialized/agriculture/food/foodRatio.js";
import { IndicatedFoodPerCapita } from "./equations/specialized/agriculture/food/indicatedFoodPerCapita.js";
import { IndicatedFoodPerCapitaAfter } from "./equations/specialized/agriculture/food/indicatedFoodPerCapitaAfter.js";
import { IndicatedFoodPerCapitaBefore } from "./equations/specialized/agriculture/food/indicatedFoodPerCapitaBefore.js";
import { PerceivedFoodRatio } from "./equations/specialized/agriculture/food/perceivedFoodRatio.js";
import { FractionOfIndustrialOutputAllocatedToAgriculture } from "./equations/specialized/agriculture/fractionOfIndustrialOutputAllocatedToAgriculture.js";
import { FractionOfIndustrialOutputAllocatedToAgricultureAfter } from "./equations/specialized/agriculture/fractionOfIndustrialOutputAllocatedToAgricultureAfter.js";
import { FractionOfIndustrialOutputAllocatedToAgricultureBefore } from "./equations/specialized/agriculture/fractionOfIndustrialOutputAllocatedToAgricultureBefore.js";
import { FractionOfOutputInAgriculture } from "./equations/specialized/agriculture/fractionOfOutputInAgriculture.js";
import { ArableLand } from "./equations/specialized/agriculture/land/development/arableLand.js";
import { DevelopmentCostPerHectare } from "./equations/specialized/agriculture/land/development/developmentCostPerHectare.js";
import { FractionOfInputsAllocatedToLandDevelopment } from "./equations/specialized/agriculture/land/development/fractionOfInputsAllocatedToLandDevelopment.js";
import { FractionOfInputsAllocatedToLandMaintenance } from "./equations/specialized/agriculture/land/development/fractionOfInputsAllocatedToLandMaintenance.js";
import { LandDevelopmentRate } from "./equations/specialized/agriculture/land/development/landDevelopmentRate.js";
import { LandFractionCultivated } from "./equations/specialized/agriculture/land/development/landFractionCultivated.js";
import { MarginalProductivityOfLandDevelopment } from "./equations/specialized/agriculture/land/development/marginalProductivityOfLandDevelopment.js";
import { PotentiallyArableLand } from "./equations/specialized/agriculture/land/development/potentiallyArableLand.js";
import { LandFertility } from "./equations/specialized/agriculture/land/fertility/landFertility.js";
import { LandFertilityDegradation } from "./equations/specialized/agriculture/land/fertility/landFertilityDegradation.js";
import { LandFertilityDegradationRate } from "./equations/specialized/agriculture/land/fertility/landFertilityDegradationRate.js";
import { LandFertilityRegeneration } from "./equations/specialized/agriculture/land/fertility/landFertilityRegeneration.js";
import { LandFertilityRegenerationTime } from "./equations/specialized/agriculture/land/fertility/landFertilityRegenerationTime.js";
import { LandRemovalForUrbanIndustrialUse } from "./equations/specialized/agriculture/land/landRemovalForUrbanIndustrialUse.js";
import { AverageLifeOfLand } from "./equations/specialized/agriculture/land/life/averageLifeOfLand.js";
import { LandErosionRate } from "./equations/specialized/agriculture/land/life/landErosionRate.js";
import { LandLifeMultiplierFromYield } from "./equations/specialized/agriculture/land/life/landLifeMultiplierFromYield.js";
import { LandLifeMultiplierFromYieldAfter } from "./equations/specialized/agriculture/land/life/landLifeMultiplierFromYieldAfter.js";
import { LandLifeMultiplierFromYieldBefore } from "./equations/specialized/agriculture/land/life/landLifeMultiplierFromYieldBefore.js";
import { UrbanIndustrialLand } from "./equations/specialized/agriculture/land/urbanIndustrialLand.js";
import { UrbanIndustrialLandPerCapita } from "./equations/specialized/agriculture/land/urbanIndustrialLandPerCapita.js";
import { UrbanIndustrialLandRequired } from "./equations/specialized/agriculture/land/urbanIndustrialLandRequired.js";
import { LandYield } from "./equations/specialized/agriculture/land/yield/landYield.js";
import { LandYieldFactor } from "./equations/specialized/agriculture/land/yield/landYieldFactor.js";
import { LandYieldMultiplierFromAirPollution } from "./equations/specialized/agriculture/land/yield/landYieldMultiplierFromAirPollution.js";
import { LandYieldMultiplierFromAirPollutionAfter } from "./equations/specialized/agriculture/land/yield/landYieldMultiplierFromAirPollutionAfter.js";
import { LandYieldMultiplierFromAirPollutionBefore } from "./equations/specialized/agriculture/land/yield/landYieldMultiplierFromAirPollutionBefore.js";
import { LandYieldMultiplierFromCapital } from "./equations/specialized/agriculture/land/yield/landYieldMultiplierFromCapital.js";
import { MarginalLandYieldMultiplierFromCapital } from "./equations/specialized/agriculture/land/yield/marginalLandYieldMultiplierFromCapital.js";
import { MarginalProductivityOfAgriculturalInputs } from "./equations/specialized/agriculture/marginalProductivityOfAgriculturalInputs.js";
import { TotalAgriculturalInvestment } from "./equations/specialized/agriculture/totalAgriculturalInvestment.js";
import { CapitalUtilizationFraction } from "./equations/specialized/capital/capitalUtilizationFraction.js";
import { FractionOfCapitalAllocatedToObtainingResources } from "./equations/specialized/capital/fractionOfCapitalAllocatedToObtainingResources.js";
import { FractionOfCapitalAllocatedToObtainingResourcesAfter } from "./equations/specialized/capital/fractionOfCapitalAllocatedToObtainingResourcesAfter.js";
import { FractionOfCapitalAllocatedToObtainingResourcesBefore } from "./equations/specialized/capital/fractionOfCapitalAllocatedToObtainingResourcesBefore.js";
import { AverageIndustrialOutputPerCapita } from "./equations/specialized/capital/industry/averageIndustrialOutputPerCapita.js";
import { AverageLifetimeOfIndustrialCapital } from "./equations/specialized/capital/industry/averageLifetimeOfIndustrialCapital.js";
import { DelayedIndustrialOutputPerCapita } from "./equations/specialized/capital/industry/delayedIndustrialOutputPerCapita.js";
import { FractionOfIndustrialOutputAllocatedToConsumption } from "./equations/specialized/capital/industry/fractionOfIndustrialOutputAllocatedToConsumption.js";
import { FractionOfIndustrialOutputAllocatedToConsumptionConstant } from "./equations/specialized/capital/industry/fractionOfIndustrialOutputAllocatedToConsumptionConstant.js";
import { FractionOfIndustrialOutputAllocatedToConsumptionVariable } from "./equations/specialized/capital/industry/fractionOfIndustrialOutputAllocatedToConsumptionVariable.js";
import { FractionOfIndustrialOutputAllocatedToIndustry } from "./equations/specialized/capital/industry/fractionOfIndustrialOutputAllocatedToIndustry.js";
import { FractionOfOutputInIndustry } from "./equations/specialized/capital/industry/fractionOfOutputInIndustry.js";
import { IndustrialCapital } from "./equations/specialized/capital/industry/industrialCapital.js";
import { IndustrialCapitalDepreciationRate } from "./equations/specialized/capital/industry/industrialCapitalDepreciationRate.js";
import { IndustrialCapitalInvestmentRate } from "./equations/specialized/capital/industry/industrialCapitalInvestmentRate.js";
import { IndustrialCapitalOutputRatio } from "./equations/specialized/capital/industry/industrialCapitalOutputRatio.js";
import { IndustrialOutput } from "./equations/specialized/capital/industry/industrialOutput.js";
import { IndustrialOutputPerCapita } from "./equations/specialized/capital/industry/industrialOutputPerCapita.js";
import { Jobs } from "./equations/specialized/capital/jobs/jobs.js";
import { JobsPerHectare } from "./equations/specialized/capital/jobs/jobsPerHectare.js";
import { JobsPerIndustrialCapitalUnit } from "./equations/specialized/capital/jobs/jobsPerIndustrialCapitalUnit.js";
import { JobsPerServiceCapitalUnit } from "./equations/specialized/capital/jobs/jobsPerServiceCapitalUnit.js";
import { LaborForce } from "./equations/specialized/capital/jobs/laborForce.js";
import { LaborUtilizationFraction } from "./equations/specialized/capital/jobs/laborUtilizationFraction.js";
import { LaborUtilizationFractionDelayed } from "./equations/specialized/capital/jobs/laborUtilizationFractionDelayed.js";
import { PotentialJobsInAgriculturalSector } from "./equations/specialized/capital/jobs/potentialJobsInAgriculturalSector.js";
import { PotentialJobsInIndustrialSector } from "./equations/specialized/capital/jobs/potentialJobsInIndustrialSector.js";
import { PotentialJobsInServiceSector } from "./equations/specialized/capital/jobs/potentialJobsInServiceSector.js";
import { AverageLifetimeOfServiceCapital } from "./equations/specialized/capital/service/averageLifetimeOfServiceCapital.js";
import { FractionOfIndustrialOutputAllocatedToServices } from "./equations/specialized/capital/service/fractionOfIndustrialOutputAllocatedToServices.js";
import { FractionOfIndustrialOutputAllocatedToServicesAfter } from "./equations/specialized/capital/service/fractionOfIndustrialOutputAllocatedToServicesAfter.js";
import { FractionOfIndustrialOutputAllocatedToServicesBefore } from "./equations/specialized/capital/service/fractionOfIndustrialOutputAllocatedToServicesBefore.js";
import { FractionOfOutputInServices } from "./equations/specialized/capital/service/fractionOfOutputInServices.js";
import { IndicatedServiceOutputPerCapita } from "./equations/specialized/capital/service/indicatedServiceOutputPerCapita.js";
import { IndicatedServiceOutputPerCapitaAfter } from "./equations/specialized/capital/service/indicatedServiceOutputPerCapitaAfter.js";
import { IndicatedServiceOutputPerCapitaBefore } from "./equations/specialized/capital/service/indicatedServiceOutputPerCapitaBefore.js";
import { ServiceCapital } from "./equations/specialized/capital/service/serviceCapital.js";
import { ServiceCapitalDepreciationRate } from "./equations/specialized/capital/service/serviceCapitalDepreciationRate.js";
import { ServiceCapitalInvestmentRate } from "./equations/specialized/capital/service/serviceCapitalInvestmentRate.js";
import { ServiceCapitalOutputRatio } from "./equations/specialized/capital/service/serviceCapitalOutputRatio.js";
import { ServiceOutput } from "./equations/specialized/capital/service/serviceOutput.js";
import { ServiceOutputPerCapita } from "./equations/specialized/capital/service/serviceOutputPerCapita.js";
import { CompensatoryMultiplierFromPerceivedLifeExpectancy } from "./equations/specialized/compensatoryMultiplierFromPerceivedLifeExpectancy.js";
import { CrudeDeathRate } from "./equations/specialized/population/deaths/crudeDeathRate.js";
import { DeathsPerYear } from "./equations/specialized/population/deaths/deathsPerYear.js";
import { DeathsPerYear0To14 } from "./equations/specialized/population/deaths/deathsPerYear0To14.js";
import { DeathsPerYear15To44 } from "./equations/specialized/population/deaths/deathsPerYear15To44.js";
import { DeathsPerYear45To64 } from "./equations/specialized/population/deaths/deathsPerYear45To64.js";
import { DeathsPerYear65AndOver } from "./equations/specialized/population/deaths/deathsPerYear65AndOver.js";
import { EffectiveHealthServicesPerCapita } from "./equations/specialized/effectiveHealthServicesPerCapita.js";
import { FamilyIncomeExpectation } from "./equations/specialized/familyIncomeExpectation.js";
import { DesiredTotalFertility } from "./equations/specialized/population/fertility/desiredTotalFertility.js";
import { FertilityControlAllocationPerCapita } from "./equations/specialized/population/fertility/fertilityControlAllocationPerCapita.js";
import { FertilityControlEffectiveness } from "./equations/specialized/population/fertility/fertilityControlEfectiveness.js";
import { FertilityControlFacilitiesPerCapita } from "./equations/specialized/population/fertility/fertilityControlFacilitiesPerCapita.js";
import { FractionOfServicesAllocatedToFertilityControl } from "./equations/specialized/population/fertility/fractionOfServicesAllocatedToFertilityControl.js";
import { MaxTotalFertility } from "./equations/specialized/population/fertility/maxTotalFertility.js";
import { NeedForFertilityControl } from "./equations/specialized/population/fertility/needForFertilityControl.js";
import { TotalFertility } from "./equations/specialized/population/fertility/totalFertility.js";
import { HealthServicesAllocationPerCapita } from "./equations/specialized/healthServicesAllocationsPerCapita.js";
import { LifeExpectancy } from "./equations/specialized/population/lifetimeMultipliers/lifeExpectancy.js";
import { LifetimeMultiplierFromCrowding } from "./equations/specialized/population/lifetimeMultipliers/lifetimeMultiplierFromCrowding.js";
import { LifetimeMultiplierFromFood } from "./equations/specialized/population/lifetimeMultipliers/lifetimeMultiplierFromFood.js";
import { LifetimeMultiplierFromHealthServices } from "./equations/specialized/population/lifetimeMultipliers/lifetimeMultiplierFromHealthServices.js";
import { LifetimeMultiplierFromHealthServicesAfter } from "./equations/specialized/population/lifetimeMultipliers/lifetimeMultiplierFromHealthServicesAfter.js";
import { LifetimeMultiplierFromHealthServicesBefore } from "./equations/specialized/population/lifetimeMultipliers/lifetimeMultiplierFromHealthServicesBefore.js";
import { LifetimeMultiplierFromPollution } from "./equations/specialized/population/lifetimeMultipliers/lifetimeMultiplierFromPollution.js";
import { PerceivedLifeExpectancy } from "./equations/specialized/population/lifetimeMultipliers/perceivedLifeExpectancy.js";
import { MaturationsPerYear14To15 } from "./equations/specialized/population/maturations/maturationsPerYear14To15.js";
import { MaturationsPerYear44To45 } from "./equations/specialized/population/maturations/maturationsPerYear44To45.js";
import { MaturationsPerYear64To65 } from "./equations/specialized/population/maturations/maturationsPerYear64To65.js";
import { Mortality0To14 } from "./equations/specialized/population/mortality/mortality0To14.js";
import { Mortality15To44 } from "./equations/specialized/population/mortality/mortality15To44.js";
import { Mortality45To64 } from "./equations/specialized/population/mortality/mortality45To64.js";
import { Mortality65AndOver } from "./equations/specialized/population/mortality/mortality65AndOver.js";
import { BirthsPerYear } from "./equations/specialized/population/natality/birthsPerYear.js";
import { CrudeBirthRate } from "./equations/specialized/population/natality/crudeBirthRate.js";
import { DesiredCompletedFamilySize } from "./equations/specialized/population/natality/desiredCompletedFamilySize.js";
import { FamilyResponseToSocialNorm } from "./equations/specialized/population/natality/familyResponseToSocialNorm.js";
import { FecundityMultiplier } from "./equations/specialized/population/natality/fecundityMultiplier.js";
import { SocialFamilySizeNorm } from "./equations/specialized/population/natality/socialFamilySizeNorm.js";
import { NonRenewableResourceFractionRemaining } from "./equations/specialized/nonRenewables/nonRenewableResourceFractionRemaining.js";
import { NonRenewableResources } from "./equations/specialized/nonRenewables/nonRenewableResources.js";
import { NonRenewableResourceUsageFactor } from "./equations/specialized/nonRenewables/nonRenewableResourceUsageFactor.js";
import { NonRenewableResourceUsageRate } from "./equations/specialized/nonRenewables/nonRenewableResourceUsageRate.js";
import { PerCapitaResourceUsageMultiplier } from "./equations/specialized/perCapitaResourceUsageMultiplier.js";
import { AssimilationHalfLife } from "./equations/specialized/pollution/assimilationHalfLife.js";
import { AssimilationHalfLifeMultiplier } from "./equations/specialized/pollution/assimilationHalfLifeMultiplier.js";
import { IndexOfPersistentPollution } from "./equations/specialized/pollution/indexOfPersistentPollution.js";
import { PersistenPollutionAppearanceRate } from "./equations/specialized/pollution/persistenPollutionAppearanceRate.js";
import { PersistenPollutionAssimilationRate } from "./equations/specialized/pollution/persistenPollutionAssimilationRate.js";
import { PersistentPollution } from "./equations/specialized/pollution/persistentPollution.js";
import { PersistentPollutionGeneratedByAgriculturalOutput } from "./equations/specialized/pollution/persistentPollutionGeneratedByAgriculturalOutput.js";
import { PersistentPollutionGeneratedByIndustrialOutput } from "./equations/specialized/pollution/persistentPollutionGeneratedByIndustrialOutput.js";
import { PersistentPollutionGenerationRate } from "./equations/specialized/pollution/persistentPollutionGenerationRate.js";
import { PersistentPollutionGenerationFactor } from "./equations/specialized/pollution/persistentPollutionGenerationFactor.js";
import { CrowdingMultiplierFromIndustrialization } from "./equations/specialized/population/crowdingMultiplierFromIndustrialization.js";
import { FractionOfPopulationUrban } from "./equations/specialized/population/fractionOfPopulationUrban.js";
import { Population } from "./equations/specialized/population/population.js";
import { Population0To14 } from "./equations/specialized/population/population0To14.js";
import { Population15To44 } from "./equations/specialized/population/population15To44.js";
import { Population45To64 } from "./equations/specialized/population/population45To64.js";
import { Population65AndOver } from "./equations/specialized/population/population65AndOver.js";

export class Simulation {
  constructor(startYear, stopYear, timeStep, policyYear) {
    this.startYear = startYear;
    this.stopYear = stopYear;
    this.timeStep = timeStep;
    this.policyYear = policyYear;
    this.currentYear = startYear;

    this.equations = [];

    this.setup();

    this.auxArray = this.equations.filter((e) => e.qType === "Aux");
    this.rateArray = this.equations.filter((e) => e.qType === "Rate");
    this.levelArray = this.equations.filter((e) => e.qType === "Level");

    // the auxArray has to be processed in the order of the sequenceNumber
    this.auxArray.sort((a, b) => (a.sequenceNumber < b.sequenceNumber ? -1 : 1));

    // call the init functions for the equations that have them
    this.equations.filter((e) => e.init).forEach((e) => e.init());
  }

  setup() {
    const population = new Population();
    this.equations.push(population);

    const population0To14 = new Population0To14(this.startYear);
    this.equations.push(population0To14);
    population.population0To14 = population0To14;

    const deathsPerYear0To14 = new DeathsPerYear0To14();
    this.equations.push(deathsPerYear0To14);
    deathsPerYear0To14.population0To14 = population0To14;
    population0To14.deathsPerYear0To14 = deathsPerYear0To14;

    const mortality0To14 = new Mortality0To14();
    this.equations.push(mortality0To14);
    deathsPerYear0To14.mortality0To14 = mortality0To14;

    const maturationsPerYear14to15 = new MaturationsPerYear14To15();
    this.equations.push(maturationsPerYear14to15);
    maturationsPerYear14to15.population0To14 = population0To14;
    maturationsPerYear14to15.mortality0To14 = mortality0To14;
    population0To14.maturationsPerYear14to15 = maturationsPerYear14to15;

    const population15To44 = new Population15To44(this.startYear);
    this.equations.push(population15To44);
    population.population15To44 = population15To44;
    population15To44.maturationsPerYear14to15 = maturationsPerYear14to15;

    const deathsPerYear15To44 = new DeathsPerYear15To44();
    this.equations.push(deathsPerYear15To44);
    deathsPerYear15To44.population15To44 = population15To44;
    population15To44.deathsPerYear15To44 = deathsPerYear15To44;

    const mortality15To44 = new Mortality15To44();
    this.equations.push(mortality15To44);
    deathsPerYear15To44.mortality15To44 = mortality15To44;

    const maturationsPerYear44to45 = new MaturationsPerYear44To45();
    this.equations.push(maturationsPerYear44to45);
    maturationsPerYear44to45.population15To44 = population15To44;
    maturationsPerYear44to45.mortality15To44 = mortality15To44;
    population15To44.maturationsPerYear44to45 = maturationsPerYear44to45;

    const population45To64 = new Population45To64(this.startYear);
    this.equations.push(population45To64);
    population.population45To64 = population45To64;
    population45To64.maturationsPerYear44to45 = maturationsPerYear44to45;

    const deathsPerYear45To64 = new DeathsPerYear45To64();
    this.equations.push(deathsPerYear45To64);
    deathsPerYear45To64.population45To64 = population45To64;
    population45To64.deathsPerYear45To64 = deathsPerYear45To64;

    const mortality45To64 = new Mortality45To64();
    this.equations.push(mortality45To64);
    deathsPerYear45To64.mortality45To64 = mortality45To64;

    const maturationsPerYear64to65 = new MaturationsPerYear64To65();
    this.equations.push(maturationsPerYear64to65);
    maturationsPerYear64to65.population45To64 = population45To64;
    maturationsPerYear64to65.mortality45To64 = mortality45To64;
    population45To64.maturationsPerYear64to65 = maturationsPerYear64to65;

    const population65AndOver = new Population65AndOver(this.startYear);
    this.equations.push(population65AndOver);
    population.population65AndOver = population65AndOver;
    population65AndOver.maturationsPerYear64To65 = maturationsPerYear64to65;

    const deathsPerYear65AndOver = new DeathsPerYear65AndOver();
    this.equations.push(deathsPerYear65AndOver);
    deathsPerYear65AndOver.population65AndOver = population65AndOver;
    population65AndOver.deathsPerYear65AndOver = deathsPerYear65AndOver;

    const mortality65AndOver = new Mortality65AndOver();
    this.equations.push(mortality65AndOver);
    deathsPerYear65AndOver.mortality65AndOver = mortality65AndOver;

    // The Death-Rate Subsector

    const deathsPerYear = new DeathsPerYear();
    this.equations.push(deathsPerYear);
    deathsPerYear.deathsPerYear0To14 = deathsPerYear0To14;
    deathsPerYear.deathsPerYear15To44 = deathsPerYear15To44;
    deathsPerYear.deathsPerYear45To64 = deathsPerYear45To64;
    deathsPerYear.deathsPerYear65AndOver = deathsPerYear65AndOver;

    const crudeDeathRate = new CrudeDeathRate();
    this.equations.push(crudeDeathRate);
    crudeDeathRate.deathsPerYear = deathsPerYear;
    crudeDeathRate.population = population;

    const lifeExpectancy = new LifeExpectancy();
    this.equations.push(lifeExpectancy);
    mortality0To14.lifeExpectancy = lifeExpectancy;
    mortality15To44.lifeExpectancy = lifeExpectancy;
    mortality45To64.lifeExpectancy = lifeExpectancy;
    mortality65AndOver.lifeExpectancy = lifeExpectancy;

    const subsistenceFoodPerCapitaK = 230; // kilograms per person-year, used in eqns 20, 127
    const lifetimeMultiplierFromFood = new LifetimeMultiplierFromFood(subsistenceFoodPerCapitaK);
    this.equations.push(lifetimeMultiplierFromFood);
    lifeExpectancy.lifetimeMultiplierFromFood = lifetimeMultiplierFromFood;

    const healthServicesAllocationsPerCapita = new HealthServicesAllocationPerCapita();
    this.equations.push(healthServicesAllocationsPerCapita);

    const effectiveHealthServicesPerCapitaImpactDelay = 20; // years, used in eqn 22
    const effectiveHealthServicesPerCapita = new EffectiveHealthServicesPerCapita(effectiveHealthServicesPerCapitaImpactDelay);
    this.equations.push(effectiveHealthServicesPerCapita);
    effectiveHealthServicesPerCapita.healthServicesAllocationsPerCapita = healthServicesAllocationsPerCapita;

    const lifetimeMultiplierFromHealthServices = new LifetimeMultiplierFromHealthServices();
    this.equations.push(lifetimeMultiplierFromHealthServices);
    lifeExpectancy.lifetimeMultiplierFromHealthServices = lifetimeMultiplierFromHealthServices;

    const lifetimeMultiplierFromHealthServicesBefore = new LifetimeMultiplierFromHealthServicesBefore();
    this.equations.push(lifetimeMultiplierFromHealthServicesBefore);
    lifetimeMultiplierFromHealthServices.lifetimeMultiplierFromHealthServicesBefore = lifetimeMultiplierFromHealthServicesBefore;
    lifetimeMultiplierFromHealthServicesBefore.effectiveHealthServicesPerCapita = effectiveHealthServicesPerCapita;

    const lifetimeMultiplierFromHealthServicesAfter = new LifetimeMultiplierFromHealthServicesAfter();
    this.equations.push(lifetimeMultiplierFromHealthServicesAfter);
    lifetimeMultiplierFromHealthServices.lifetimeMultiplierFromHealthServicesAfter = lifetimeMultiplierFromHealthServicesAfter;
    lifetimeMultiplierFromHealthServicesAfter.effectiveHealthServicesPerCapita = effectiveHealthServicesPerCapita;

    const fractionOfPopulationUrban = new FractionOfPopulationUrban();
    this.equations.push(fractionOfPopulationUrban);
    fractionOfPopulationUrban.population = population;

    const crowdingMultiplierFromIndustrialization = new CrowdingMultiplierFromIndustrialization();
    this.equations.push(crowdingMultiplierFromIndustrialization);

    const lifetimeMultiplierFromCrowding = new LifetimeMultiplierFromCrowding();
    this.equations.push(lifetimeMultiplierFromCrowding);
    lifeExpectancy.lifetimeMultiplierFromCrowding = lifetimeMultiplierFromCrowding;
    lifetimeMultiplierFromCrowding.fractionOfPopulationUrban = fractionOfPopulationUrban;
    lifetimeMultiplierFromCrowding.crowdingMultiplierFromIndustrialization = crowdingMultiplierFromIndustrialization;

    const lifetimeMultiplierFromPollution = new LifetimeMultiplierFromPollution();
    this.equations.push(lifetimeMultiplierFromPollution);
    lifeExpectancy.lifetimeMultiplierFromPollution = lifetimeMultiplierFromPollution;

    // The Birth-Rate Subsector

    const birthsPerYear = new BirthsPerYear();
    this.equations.push(birthsPerYear);
    birthsPerYear.deathsPerYear = deathsPerYear;
    birthsPerYear.population15To44 = population15To44;
    population0To14.birthsPerYear = birthsPerYear;

    const crudeBirthRate = new CrudeBirthRate();
    this.equations.push(crudeBirthRate);
    crudeBirthRate.birthsPerYear = birthsPerYear;
    crudeBirthRate.population = population;

    const totalFertility = new TotalFertility();
    this.equations.push(totalFertility);
    birthsPerYear.totalFertility = totalFertility;

    const maxTotalFertility = new MaxTotalFertility();
    this.equations.push(maxTotalFertility);
    totalFertility.maxTotalFertility = maxTotalFertility;

    const fecundityMultiplier = new FecundityMultiplier();
    this.equations.push(fecundityMultiplier);
    maxTotalFertility.fecundityMultiplier = fecundityMultiplier;
    fecundityMultiplier.lifeExpectancy = lifeExpectancy;

    const desiredTotalFertility = new DesiredTotalFertility();
    this.equations.push(desiredTotalFertility);
    totalFertility.desiredTotalFertility = desiredTotalFertility;

    const compensatoryMultiplierFromPerceivedLifeExpectancy = new CompensatoryMultiplierFromPerceivedLifeExpectancy();
    this.equations.push(compensatoryMultiplierFromPerceivedLifeExpectancy);
    desiredTotalFertility.compensatoryMultiplierFromPerceivedLifeExpectancy = compensatoryMultiplierFromPerceivedLifeExpectancy;

    const lifetimePerceptionDelayK = 20; // years, used in eqn 37
    const perceivedLifeExpectancy = new PerceivedLifeExpectancy(lifetimePerceptionDelayK);
    this.equations.push(perceivedLifeExpectancy);
    compensatoryMultiplierFromPerceivedLifeExpectancy.perceivedLifeExpectancy = perceivedLifeExpectancy;
    perceivedLifeExpectancy.lifeExpectancy = lifeExpectancy;

    const zeroPopulationGrowthTargetYear = 4000;
    const desiredCompletedFamilySize = new DesiredCompletedFamilySize(zeroPopulationGrowthTargetYear);
    this.equations.push(desiredCompletedFamilySize);
    desiredTotalFertility.desiredCompletedFamilySize = desiredCompletedFamilySize;

    const socialFamilySizeNorm = new SocialFamilySizeNorm();
    this.equations.push(socialFamilySizeNorm);
    desiredCompletedFamilySize.socialFamilySizeNorm = socialFamilySizeNorm;

    const socialAdjustmentDelayK = 20; // years, used in eqn 40
    const delayedIndustrialOutputPerCapita = new DelayedIndustrialOutputPerCapita(socialAdjustmentDelayK);
    this.equations.push(delayedIndustrialOutputPerCapita);
    socialFamilySizeNorm.delayedIndustrialOutputPerCapita = delayedIndustrialOutputPerCapita;

    const familyResponseToSocialNorm = new FamilyResponseToSocialNorm();
    this.equations.push(familyResponseToSocialNorm);
    desiredCompletedFamilySize.familyResponseToSocialNorm = familyResponseToSocialNorm;

    const familyIncomeExpectation = new FamilyIncomeExpectation();
    this.equations.push(familyIncomeExpectation);
    familyResponseToSocialNorm.familyIncomeExpectation = familyIncomeExpectation;

    const incomeExpectationAveragingTimeK = 3; // years, used in eqn 43
    const averageIndustrialOutputPerCapita = new AverageIndustrialOutputPerCapita(incomeExpectationAveragingTimeK);
    this.equations.push(averageIndustrialOutputPerCapita);
    familyIncomeExpectation.averageIndustrialOutputPerCapita = averageIndustrialOutputPerCapita;

    const needForFertilityControl = new NeedForFertilityControl();
    this.equations.push(needForFertilityControl);
    needForFertilityControl.maxTotalFertility = maxTotalFertility;
    needForFertilityControl.desiredTotalFertility = desiredTotalFertility;

    const fertilityControlEffectiveness = new FertilityControlEffectiveness();
    this.equations.push(fertilityControlEffectiveness);
    totalFertility.fertilityControlEffectiveness = fertilityControlEffectiveness;

    const healthServicesImpactDelayK = 20; // years, for eqn 46
    const fertilityControlFacilitiesPerCapita = new FertilityControlFacilitiesPerCapita(healthServicesImpactDelayK);
    this.equations.push(fertilityControlFacilitiesPerCapita);
    fertilityControlEffectiveness.fertilityControlFacilitiesPerCapita = fertilityControlFacilitiesPerCapita;

    const fertilityControlAllocationPerCapita = new FertilityControlAllocationPerCapita();
    this.equations.push(fertilityControlAllocationPerCapita);
    fertilityControlFacilitiesPerCapita.fertilityControlAllocationPerCapita = fertilityControlAllocationPerCapita;

    const fractionOfServicesAllocatedToFertilityControl = new FractionOfServicesAllocatedToFertilityControl();
    this.equations.push(fractionOfServicesAllocatedToFertilityControl);
    fertilityControlAllocationPerCapita.fractionOfServicesAllocatedToFertilityControl = fractionOfServicesAllocatedToFertilityControl;
    fractionOfServicesAllocatedToFertilityControl.needForFertilityControl = needForFertilityControl;

    // THE CAPITAL SECTOR

    // The Industrial Subsector

    const industrialOutputPerCapita = new IndustrialOutputPerCapita();
    this.equations.push(industrialOutputPerCapita);
    crowdingMultiplierFromIndustrialization.industrialOutputPerCapita = industrialOutputPerCapita;
    delayedIndustrialOutputPerCapita.industrialOutputPerCapita = industrialOutputPerCapita;
    familyIncomeExpectation.industrialOutputPerCapita = industrialOutputPerCapita;
    averageIndustrialOutputPerCapita.industrialOutputPerCapita = industrialOutputPerCapita;
    industrialOutputPerCapita.population = population;

    const industrialOutput = new IndustrialOutput();
    this.equations.push(industrialOutput);
    industrialOutputPerCapita.industrialOutput = industrialOutput;

    const industrialCapitalOutputRatio = new IndustrialCapitalOutputRatio(this.policyYear);
    this.equations.push(industrialCapitalOutputRatio);
    industrialOutput.industrialCapitalOutputRatio = industrialCapitalOutputRatio;

    const industrialCapital = new IndustrialCapital(this.startYear);
    this.equations.push(industrialCapital);
    industrialOutput.industrialCapital = industrialCapital;

    const industrialCapitalDepreciationRate = new IndustrialCapitalDepreciationRate();
    this.equations.push(industrialCapitalDepreciationRate);
    industrialCapital.industrialCapitalDepreciationRate = industrialCapitalDepreciationRate;
    industrialCapitalDepreciationRate.industrialCapital = industrialCapital;

    const averageLifetimeOfIndustrialCapital = new AverageLifetimeOfIndustrialCapital(this.policyYear);
    this.equations.push(averageLifetimeOfIndustrialCapital);
    industrialCapitalDepreciationRate.averageLifetimeOfIndustrialCapital = averageLifetimeOfIndustrialCapital;

    const industrialCapitalInvestmentRate = new IndustrialCapitalInvestmentRate();
    this.equations.push(industrialCapitalInvestmentRate);
    industrialCapital.industrialCapitalInvestmentRate = industrialCapitalInvestmentRate;
    industrialCapitalInvestmentRate.industrialOutput = industrialOutput;

    const fractionOfIndustrialOutputAllocatedToIndustry = new FractionOfIndustrialOutputAllocatedToIndustry();
    this.equations.push(fractionOfIndustrialOutputAllocatedToIndustry);
    industrialCapitalInvestmentRate.fractionOfIndustrialOutputAllocatedToIndustry = fractionOfIndustrialOutputAllocatedToIndustry;

    const fractionOfIndustrialOutputAllocatedToConsumption = new FractionOfIndustrialOutputAllocatedToConsumption();
    this.equations.push(fractionOfIndustrialOutputAllocatedToConsumption);
    fractionOfIndustrialOutputAllocatedToIndustry.fractionOfIndustrialOutputAllocatedToConsumption = fractionOfIndustrialOutputAllocatedToConsumption;

    const fractionOfIndustrialOutputAllocatedToConsumptionConstant = new FractionOfIndustrialOutputAllocatedToConsumptionConstant(this.policyYear);
    this.equations.push(fractionOfIndustrialOutputAllocatedToConsumptionConstant);
    fractionOfIndustrialOutputAllocatedToConsumption.fractionOfIndustrialOutputAllocatedToConsumptionConstant =
      fractionOfIndustrialOutputAllocatedToConsumptionConstant;

    const fractionOfIndustrialOutputAllocatedToConsumptionVariable = new FractionOfIndustrialOutputAllocatedToConsumptionVariable();
    this.equations.push(fractionOfIndustrialOutputAllocatedToConsumptionVariable);
    fractionOfIndustrialOutputAllocatedToConsumption.fractionOfIndustrialOutputAllocatedToConsumptionVariable =
      fractionOfIndustrialOutputAllocatedToConsumptionVariable;
    fractionOfIndustrialOutputAllocatedToConsumptionVariable.industrialOutputPerCapita = industrialOutputPerCapita;

    // The Service Subsector

    const indicatedServiceOutputPerCapita = new IndicatedServiceOutputPerCapita(this.policyYear);
    this.equations.push(indicatedServiceOutputPerCapita);

    const indicatedServiceOutputPerCapitaBefore = new IndicatedServiceOutputPerCapitaBefore();
    this.equations.push(indicatedServiceOutputPerCapitaBefore);
    indicatedServiceOutputPerCapita.indicatedServiceOutputPerCapitaBefore = indicatedServiceOutputPerCapitaBefore;
    indicatedServiceOutputPerCapitaBefore.industrialOutputPerCapita = industrialOutputPerCapita;

    const indicatedServiceOutputPerCapitaAfter = new IndicatedServiceOutputPerCapitaAfter();
    this.equations.push(indicatedServiceOutputPerCapitaAfter);
    indicatedServiceOutputPerCapita.indicatedServiceOutputPerCapitaAfter = indicatedServiceOutputPerCapitaAfter;
    indicatedServiceOutputPerCapitaAfter.industrialOutputPerCapita = industrialOutputPerCapita;

    const fractionOfIndustrialOutputAllocatedToServices = new FractionOfIndustrialOutputAllocatedToServices(this.policyYear);
    this.equations.push(fractionOfIndustrialOutputAllocatedToServices);
    fractionOfIndustrialOutputAllocatedToIndustry.fractionOfIndustrialOutputAllocatedToServices = fractionOfIndustrialOutputAllocatedToServices;

    const fractionOfIndustrialOutputAllocatedToServicesBefore = new FractionOfIndustrialOutputAllocatedToServicesBefore();
    this.equations.push(fractionOfIndustrialOutputAllocatedToServicesBefore);
    fractionOfIndustrialOutputAllocatedToServices.fractionOfIndustrialOutputAllocatedToServicesBefore = fractionOfIndustrialOutputAllocatedToServicesBefore;
    fractionOfIndustrialOutputAllocatedToServicesBefore.indicatedServiceOutputPerCapita = indicatedServiceOutputPerCapita;

    const fractionOfIndustrialOutputAllocatedToServicesAfter = new FractionOfIndustrialOutputAllocatedToServicesAfter();
    this.equations.push(fractionOfIndustrialOutputAllocatedToServicesAfter);
    fractionOfIndustrialOutputAllocatedToServices.fractionOfIndustrialOutputAllocatedToServicesAfter = fractionOfIndustrialOutputAllocatedToServicesAfter;
    fractionOfIndustrialOutputAllocatedToServicesAfter.indicatedServiceOutputPerCapita = indicatedServiceOutputPerCapita;

    const serviceCapitalInvestmentRate = new ServiceCapitalInvestmentRate();
    this.equations.push(serviceCapitalInvestmentRate);
    serviceCapitalInvestmentRate.industrialOutput = industrialOutput;
    serviceCapitalInvestmentRate.fractionOfIndustrialOutputAllocatedToServices = fractionOfIndustrialOutputAllocatedToServices;

    const serviceCapital = new ServiceCapital();
    this.equations.push(serviceCapital);
    serviceCapital.serviceCapitalInvestmentRate = serviceCapitalInvestmentRate;

    const serviceCapitalDepreciationRate = new ServiceCapitalDepreciationRate();
    this.equations.push(serviceCapitalDepreciationRate);
    serviceCapital.serviceCapitalDepreciationRate = serviceCapitalDepreciationRate;
    serviceCapitalDepreciationRate.serviceCapital = serviceCapital;

    const averageLifetimeOfServiceCapital = new AverageLifetimeOfServiceCapital(this.policyYear);
    this.equations.push(averageLifetimeOfServiceCapital);
    serviceCapitalDepreciationRate.averageLifetimeOfServiceCapital = averageLifetimeOfServiceCapital;

    const serviceOutput = new ServiceOutput();
    this.equations.push(serviceOutput);
    serviceOutput.serviceCapital = serviceCapital;

    const serviceOutputPerCapita = new ServiceOutputPerCapita();
    this.equations.push(serviceOutputPerCapita);
    healthServicesAllocationsPerCapita.serviceOutputPerCapita = serviceOutputPerCapita;
    fertilityControlAllocationPerCapita.serviceOutputPerCapita = serviceOutputPerCapita;
    fractionOfIndustrialOutputAllocatedToServicesBefore.serviceOutputPerCapita = serviceOutputPerCapita;
    fractionOfIndustrialOutputAllocatedToServicesAfter.serviceOutputPerCapita = serviceOutputPerCapita;
    serviceOutputPerCapita.population = population;
    serviceOutputPerCapita.serviceOutput = serviceOutput;

    const serviceCapitalOutputRatio = new ServiceCapitalOutputRatio(this.policyYear);
    this.equations.push(serviceCapitalOutputRatio);
    serviceOutput.serviceCapitalOutputRatio = serviceCapitalOutputRatio;

    // The Jobs Subsector

    const jobs = new Jobs();
    this.equations.push(jobs);

    const potentialJobsInIndustrialSector = new PotentialJobsInIndustrialSector();
    this.equations.push(potentialJobsInIndustrialSector);
    jobs.potentialJobsInIndustrialSector = potentialJobsInIndustrialSector;
    potentialJobsInIndustrialSector.industrialCapital = industrialCapital;

    const jobsPerIndustrialCapitalUnit = new JobsPerIndustrialCapitalUnit();
    this.equations.push(jobsPerIndustrialCapitalUnit);
    potentialJobsInIndustrialSector.jobsPerIndustrialCapitalUnit = jobsPerIndustrialCapitalUnit;
    jobsPerIndustrialCapitalUnit.industrialOutputPerCapita = industrialOutputPerCapita;

    const potentialJobsInServiceSector = new PotentialJobsInServiceSector();
    this.equations.push(potentialJobsInServiceSector);
    jobs.potentialJobsInServiceSector = potentialJobsInServiceSector;
    potentialJobsInServiceSector.serviceCapital = serviceCapital;

    const jobsPerServiceCapitalUnit = new JobsPerServiceCapitalUnit();
    this.equations.push(jobsPerServiceCapitalUnit);
    potentialJobsInServiceSector.jobsPerServiceCapitalUnit = jobsPerServiceCapitalUnit;
    jobsPerServiceCapitalUnit.serviceOutputPerCapita = serviceOutputPerCapita;

    const potentialJobsInAgriculturalSector = new PotentialJobsInAgriculturalSector();
    this.equations.push(potentialJobsInAgriculturalSector);
    jobs.potentialJobsInAgriculturalSector = potentialJobsInAgriculturalSector;

    const jobsPerHectare = new JobsPerHectare();
    this.equations.push(jobsPerHectare);
    potentialJobsInAgriculturalSector.jobsPerHectare = jobsPerHectare;

    const laborForce = new LaborForce();
    this.equations.push(laborForce);
    laborForce.population15To44 = population15To44;
    laborForce.population45To64 = population45To64;

    const laborUtilizationFraction = new LaborUtilizationFraction();
    this.equations.push(laborUtilizationFraction);
    laborUtilizationFraction.jobs = jobs;
    laborUtilizationFraction.laborForce = laborForce;

    const laborUtilizationFractionDelayedDelayTime = 2; // years, eqn 82
    const laborUtilizationFractionDelayed = new LaborUtilizationFractionDelayed(laborUtilizationFractionDelayedDelayTime);
    this.equations.push(laborUtilizationFractionDelayed);
    laborUtilizationFractionDelayed.laborUtilizationFraction = laborUtilizationFraction;

    const capitalUtilizationFraction = new CapitalUtilizationFraction();
    this.equations.push(capitalUtilizationFraction);
    industrialOutput.capitalUtilizationFraction = capitalUtilizationFraction;
    serviceOutput.capitalUtilizationFraction = capitalUtilizationFraction;
    capitalUtilizationFraction.laborUtilizationFractionDelayed = laborUtilizationFractionDelayed;

    // THE AGRICULTURAL SECTOR

    // Loop 1: Food from Investment in Land Development

    const potentiallyArableLandTotal = 3.2e9;
    const landFractionCultivated = new LandFractionCultivated(potentiallyArableLandTotal);
    this.equations.push(landFractionCultivated);

    const arableLand = new ArableLand();
    this.equations.push(arableLand);
    potentialJobsInAgriculturalSector.arableLand = arableLand;
    landFractionCultivated.arableLand = arableLand;

    const potentiallyArableLand = new PotentiallyArableLand();
    this.equations.push(potentiallyArableLand);

    const food = new Food();
    this.equations.push(food);
    food.arableLand = arableLand;

    const foodPerCapita = new FoodPerCapita();
    this.equations.push(foodPerCapita);
    lifetimeMultiplierFromFood.foodPerCapita = foodPerCapita;
    foodPerCapita.food = food;
    foodPerCapita.population = population;

    const indicatedFoodPerCapita = new IndicatedFoodPerCapita(this.policyYear);
    this.equations.push(indicatedFoodPerCapita);

    const indicatedFoodPerCapitaBefore = new IndicatedFoodPerCapitaBefore();
    this.equations.push(indicatedFoodPerCapitaBefore);
    indicatedFoodPerCapita.indicatedFoodPerCapitaBefore = indicatedFoodPerCapitaBefore;
    indicatedFoodPerCapitaBefore.industrialOutputPerCapita = industrialOutputPerCapita;

    const indicatedFoodPerCapitaAfter = new IndicatedFoodPerCapitaAfter();
    this.equations.push(indicatedFoodPerCapitaAfter);
    indicatedFoodPerCapita.indicatedFoodPerCapitaAfter = indicatedFoodPerCapitaAfter;
    indicatedFoodPerCapitaAfter.industrialOutputPerCapita = industrialOutputPerCapita;

    const totalAgriculturalInvestment = new TotalAgriculturalInvestment();
    this.equations.push(totalAgriculturalInvestment);
    totalAgriculturalInvestment.industrialOutput = industrialOutput;

    const fractionOfIndustrialOutputAllocatedToAgriculture = new FractionOfIndustrialOutputAllocatedToAgriculture(this.policyYear);
    this.equations.push(fractionOfIndustrialOutputAllocatedToAgriculture);
    fractionOfIndustrialOutputAllocatedToIndustry._fractionOfIndustrialOutputAllocatedToAgriculture = fractionOfIndustrialOutputAllocatedToAgriculture;
    totalAgriculturalInvestment.fractionOfIndustrialOutputAllocatedToAgriculture = fractionOfIndustrialOutputAllocatedToAgriculture;

    const fractionOfIndustrialOutputAllocatedToAgricultureBefore = new FractionOfIndustrialOutputAllocatedToAgricultureBefore();
    this.equations.push(fractionOfIndustrialOutputAllocatedToAgricultureBefore);
    fractionOfIndustrialOutputAllocatedToAgriculture.fractionOfIndustrialOutputAllocatedToAgricultureBefore =
      fractionOfIndustrialOutputAllocatedToAgricultureBefore;
    fractionOfIndustrialOutputAllocatedToAgricultureBefore.foodPerCapita = foodPerCapita;
    fractionOfIndustrialOutputAllocatedToAgricultureBefore.indicatedFoodPerCapita = indicatedFoodPerCapita;

    const fractionOfIndustrialOutputAllocatedToAgricultureAfter = new FractionOfIndustrialOutputAllocatedToAgricultureAfter();
    this.equations.push(fractionOfIndustrialOutputAllocatedToAgricultureAfter);
    fractionOfIndustrialOutputAllocatedToAgriculture.fractionOfIndustrialOutputAllocatedToAgricultureAfter =
      fractionOfIndustrialOutputAllocatedToAgricultureAfter;
    fractionOfIndustrialOutputAllocatedToAgricultureAfter.foodPerCapita = foodPerCapita;
    fractionOfIndustrialOutputAllocatedToAgricultureAfter.indicatedFoodPerCapita = indicatedFoodPerCapita;

    const landDevelopmentRate = new LandDevelopmentRate();
    this.equations.push(landDevelopmentRate);
    arableLand.landDevelopmentRate = landDevelopmentRate;
    potentiallyArableLand.landDevelopmentRate = landDevelopmentRate;
    landDevelopmentRate.totalAgriculturalInvestment = totalAgriculturalInvestment;

    const developmentCostPerHectare = new DevelopmentCostPerHectare();
    this.equations.push(developmentCostPerHectare);
    landDevelopmentRate.developmentCostPerHectare = developmentCostPerHectare;
    developmentCostPerHectare.potentiallyArableLand = potentiallyArableLand;
    developmentCostPerHectare.potentiallyArableLandTotal = potentiallyArableLandTotal;

    // Loop 2: Food from Investment in Agricultural Inputs

    const currentAgriculturalInputs = new CurrentAgriculturalInputs();
    this.equations.push(currentAgriculturalInputs);
    currentAgriculturalInputs.totalAgriculturalInvestment = totalAgriculturalInvestment;

    const averageLifetimeOfAgriculturalInputsK = 2; // years, eqn 99 (in lieu of 100)
    const agriculturalInputs = new AgriculturalInputs(averageLifetimeOfAgriculturalInputsK);
    this.equations.push(agriculturalInputs);
    agriculturalInputs.currentAgriculturalInputs = currentAgriculturalInputs;

    // note: output of this equation goes unused
    const averageLifetimeOfAgriculturalInputs = new AverageLifetimeOfAgriculturalInputs(this.policyYear);
    this.equations.push(averageLifetimeOfAgriculturalInputs);

    const agriculturalInputsPerHectare = new AgriculturalInputsPerHectare();
    this.equations.push(agriculturalInputsPerHectare);
    jobsPerHectare.agriculturalInputsPerHectare = agriculturalInputsPerHectare;
    agriculturalInputsPerHectare.agriculturalInputs = agriculturalInputs;
    agriculturalInputsPerHectare.arableLand = arableLand;

    const landYieldMultiplierFromCapital = new LandYieldMultiplierFromCapital();
    this.equations.push(landYieldMultiplierFromCapital);
    landYieldMultiplierFromCapital.agriculturalInputsPerHectare = agriculturalInputsPerHectare;

    const landYield = new LandYield();
    this.equations.push(landYield);
    food.landYield = landYield;
    landYield._landYieldMultiplierFromCapital = landYieldMultiplierFromCapital;

    const landYieldFactor = new LandYieldFactor();
    this.equations.push(landYieldFactor);
    landYield.landYieldFactor = landYieldFactor;

    const landYieldMultiplierFromAirPollution = new LandYieldMultiplierFromAirPollution(this.policyYear);
    this.equations.push(landYieldMultiplierFromAirPollution);
    landYield.landYieldMultiplierFromAirPollution = landYieldMultiplierFromAirPollution;

    const landYieldMultiplierFromAirPollutionBefore = new LandYieldMultiplierFromAirPollutionBefore();
    this.equations.push(landYieldMultiplierFromAirPollutionBefore);
    landYieldMultiplierFromAirPollution.landYieldMultiplierFromAirPollutionBefore = landYieldMultiplierFromAirPollutionBefore;
    landYieldMultiplierFromAirPollutionBefore.industrialOutput = industrialOutput;

    const landYieldMultiplierFromAirPollutionAfter = new LandYieldMultiplierFromAirPollutionAfter();
    this.equations.push(landYieldMultiplierFromAirPollutionAfter);
    landYieldMultiplierFromAirPollution.landYieldMultiplierFromAirPollutionAfter = landYieldMultiplierFromAirPollutionAfter;
    landYieldMultiplierFromAirPollutionAfter.industrialOutput = industrialOutput;

    // Loops 1 and 2: The Investment Allocation Decision

    const fractionOfInputsAllocatedToLandDevelopment = new FractionOfInputsAllocatedToLandDevelopment();
    this.equations.push(fractionOfInputsAllocatedToLandDevelopment);
    landDevelopmentRate.fractionOfInputsAllocatedToLandDevelopment = fractionOfInputsAllocatedToLandDevelopment;
    currentAgriculturalInputs.fractionOfInputsAllocatedToLandDevelopment = fractionOfInputsAllocatedToLandDevelopment;

    const marginalProductivityOfLandDevelopment = new MarginalProductivityOfLandDevelopment();
    this.equations.push(marginalProductivityOfLandDevelopment);
    fractionOfInputsAllocatedToLandDevelopment.marginalProductivityOfLandDevelopment = marginalProductivityOfLandDevelopment;
    marginalProductivityOfLandDevelopment.landYield = landYield;
    marginalProductivityOfLandDevelopment.developmentCostPerHectare = developmentCostPerHectare;

    const marginalProductivityOfAgriculturalInputs = new MarginalProductivityOfAgriculturalInputs();
    this.equations.push(marginalProductivityOfAgriculturalInputs);
    fractionOfInputsAllocatedToLandDevelopment.marginalProductivityOfAgriculturalInputs = marginalProductivityOfAgriculturalInputs;
    marginalProductivityOfAgriculturalInputs.landYield = landYield;
    marginalProductivityOfAgriculturalInputs.averageLifetimeOfAgriculturalInputsK = averageLifetimeOfAgriculturalInputsK;
    marginalProductivityOfAgriculturalInputs.landYieldMultiplierFromCapital = landYieldMultiplierFromCapital;

    const marginalLandYieldMultiplierFromCapital = new MarginalLandYieldMultiplierFromCapital();
    this.equations.push(marginalLandYieldMultiplierFromCapital);
    marginalProductivityOfAgriculturalInputs.marginalLandYieldMultiplierFromCapital = marginalLandYieldMultiplierFromCapital;
    marginalLandYieldMultiplierFromCapital.agriculturalInputsPerHectare = agriculturalInputsPerHectare;

    // Loop 3: Land Erosion and Urban-Industrial Use

    const averageLifeOfLand = new AverageLifeOfLand();
    this.equations.push(averageLifeOfLand);

    const landLifeMultiplierFromYield = new LandLifeMultiplierFromYield();
    this.equations.push(landLifeMultiplierFromYield);
    averageLifeOfLand.landLifeMultiplierFromYield = landLifeMultiplierFromYield;

    const inherentLandFertilityK = 600; // kilograms per hectare-year, used in eqns 114, 115 and 124
    const landLifeMultiplierFromYieldBefore = new LandLifeMultiplierFromYieldBefore(inherentLandFertilityK);
    this.equations.push(landLifeMultiplierFromYieldBefore);
    landLifeMultiplierFromYield.landLifeMultiplierFromYieldBefore = landLifeMultiplierFromYieldBefore;
    landLifeMultiplierFromYieldBefore.landYield = landYield;

    const landLifeMultiplierFromYieldAfter = new LandLifeMultiplierFromYieldAfter(inherentLandFertilityK);
    this.equations.push(landLifeMultiplierFromYieldAfter);
    landLifeMultiplierFromYield.landLifeMultiplierFromYieldAfter = landLifeMultiplierFromYieldAfter;
    landLifeMultiplierFromYieldAfter.landYield = landYield;

    const landErosionRate = new LandErosionRate();
    this.equations.push(landErosionRate);
    arableLand.landErosionRate = landErosionRate;
    landErosionRate.arableLand = arableLand;
    landErosionRate.averageLifeOfLand = averageLifeOfLand;

    const urbanIndustrialLandPerCapita = new UrbanIndustrialLandPerCapita();
    this.equations.push(urbanIndustrialLandPerCapita);
    urbanIndustrialLandPerCapita.industrialOutputPerCapita = industrialOutputPerCapita;

    const urbanIndustrialLandRequired = new UrbanIndustrialLandRequired();
    this.equations.push(urbanIndustrialLandRequired);
    urbanIndustrialLandRequired.population = population;
    urbanIndustrialLandRequired.urbanIndustrialLandPerCapita = urbanIndustrialLandPerCapita;

    const landRemovalForUrbanIndustrialUse = new LandRemovalForUrbanIndustrialUse();
    this.equations.push(landRemovalForUrbanIndustrialUse);
    arableLand.landRemovalForUrbanIndustrialUse = landRemovalForUrbanIndustrialUse;
    landRemovalForUrbanIndustrialUse.urbanIndustrialLandRequired = urbanIndustrialLandRequired;

    const urbanIndustrialLand = new UrbanIndustrialLand(this.startYear);
    this.equations.push(urbanIndustrialLand);
    landRemovalForUrbanIndustrialUse.urbanIndustrialLand = urbanIndustrialLand;
    urbanIndustrialLand.landRemovalForUrbanIndustrialUse = landRemovalForUrbanIndustrialUse;

    // Loop 4: Land fertility degradation

    const landFertility = new LandFertility(this.startYear);
    this.equations.push(landFertility);
    landYield.landFertility = landFertility;

    const landFertilityDegradationRate = new LandFertilityDegradationRate();
    this.equations.push(landFertilityDegradationRate);

    const landFertilityDegradation = new LandFertilityDegradation();
    this.equations.push(landFertilityDegradation);
    landFertility.landFertilityDegradation = landFertilityDegradation;
    landFertilityDegradation.landFertility = landFertility;
    landFertilityDegradation.landFertilityDegradationRate = landFertilityDegradationRate;

    // Loop 5: Land fertility regeneration

    const landFertilityRegeneration = new LandFertilityRegeneration();
    this.equations.push(landFertilityRegeneration);
    landFertility.landFertilityRegeneration = landFertilityRegeneration;
    landFertilityRegeneration.landFertility = landFertility;
    landFertilityRegeneration.inherentLandFertilityK = inherentLandFertilityK;

    const landFertilityRegenerationTime = new LandFertilityRegenerationTime();
    this.equations.push(landFertilityRegenerationTime);
    landFertilityRegeneration.landFertilityRegenerationTime = landFertilityRegenerationTime;

    // Loop 6: Discontinuing land maintenance

    const fractionOfInputsAllocatedToLandMaintenance = new FractionOfInputsAllocatedToLandMaintenance();
    this.equations.push(fractionOfInputsAllocatedToLandMaintenance);
    agriculturalInputsPerHectare.fractionOfInputsAllocatedToLandMaintenance = fractionOfInputsAllocatedToLandMaintenance;
    landFertilityRegenerationTime.fractionOfInputsAllocatedToLandMaintenance = fractionOfInputsAllocatedToLandMaintenance;

    const foodRatio = new FoodRatio(subsistenceFoodPerCapitaK);
    this.equations.push(foodRatio);
    foodRatio.foodPerCapita = foodPerCapita;

    const foodShortagePerceptionDelayK = 2; // years, used in eqn 128
    const perceivedFoodRatio = new PerceivedFoodRatio(foodShortagePerceptionDelayK);
    this.equations.push(perceivedFoodRatio);
    fractionOfInputsAllocatedToLandMaintenance.perceivedFoodRatio = perceivedFoodRatio;
    perceivedFoodRatio.foodRatio = foodRatio;

    // NONRENEWABLE RESOURCE SECTOR

    let nonrenewableResourcesInitialK = 1.0e12; // resource units, used in eqns 129 and 133
    const nonrenewableResources = new NonRenewableResources(nonrenewableResourcesInitialK, this.startYear);
    this.equations.push(nonrenewableResources);

    const nonrenewableResourceUsageRate = new NonRenewableResourceUsageRate();
    this.equations.push(nonrenewableResourceUsageRate);
    nonrenewableResources.nonRenewableResourceUsageRate = nonrenewableResourceUsageRate;
    nonrenewableResourceUsageRate.population = population;

    const nonrenewableResourceUsageFactor = new NonRenewableResourceUsageFactor(this.policyYear);
    this.equations.push(nonrenewableResourceUsageFactor);
    nonrenewableResourceUsageRate.nonRenewableResourceUsageFactor = nonrenewableResourceUsageFactor;

    const perCapitaResourceUsageMultiplier = new PerCapitaResourceUsageMultiplier();
    this.equations.push(perCapitaResourceUsageMultiplier);
    nonrenewableResourceUsageRate.perCapitaResourceUsageMultiplier = perCapitaResourceUsageMultiplier;
    perCapitaResourceUsageMultiplier.industrialOutputPerCapita = industrialOutputPerCapita;

    const nonrenewableResourceFractionRemaining = new NonRenewableResourceFractionRemaining(nonrenewableResourcesInitialK);
    this.equations.push(nonrenewableResourceFractionRemaining);
    nonrenewableResourceFractionRemaining.nonRenewableResources = nonrenewableResources;

    const fractionOfCapitalAllocatedToObtainingResources = new FractionOfCapitalAllocatedToObtainingResources(this.policyYear);
    this.equations.push(fractionOfCapitalAllocatedToObtainingResources);
    industrialOutput.fractionOfCapitalAllocatedToObtainingResources = fractionOfCapitalAllocatedToObtainingResources;

    const fractionOfCapitalAllocatedToObtainingResourcesBefore = new FractionOfCapitalAllocatedToObtainingResourcesBefore();
    this.equations.push(fractionOfCapitalAllocatedToObtainingResourcesBefore);
    fractionOfCapitalAllocatedToObtainingResources.fractionOfCapitalAllocatedToObtainingResourcesBefore = fractionOfCapitalAllocatedToObtainingResourcesBefore;
    fractionOfCapitalAllocatedToObtainingResourcesBefore.nonRenewableResourceFractionRemaining = nonrenewableResourceFractionRemaining;

    const fractionOfCapitalAllocatedToObtainingResourcesAfter = new FractionOfCapitalAllocatedToObtainingResourcesAfter();
    this.equations.push(fractionOfCapitalAllocatedToObtainingResourcesAfter);
    fractionOfCapitalAllocatedToObtainingResources.fractionOfCapitalAllocatedToObtainingResourcesAfter = fractionOfCapitalAllocatedToObtainingResourcesAfter;
    fractionOfCapitalAllocatedToObtainingResourcesAfter.nonRenewableResourceFractionRemaining = nonrenewableResourceFractionRemaining;

    // PERSISTENT POLLUTION SECTOR

    const persistentPollutionGenerationRate = new PersistentPollutionGenerationRate();
    this.equations.push(persistentPollutionGenerationRate);

    const persistentPollutionGenerationFactor = new PersistentPollutionGenerationFactor(this.policyYear);
    this.equations.push(persistentPollutionGenerationFactor);
    persistentPollutionGenerationRate.persistentPollutionGenerationFactor = persistentPollutionGenerationFactor;

    const persistentPollutionGeneratedByIndustrialOutput = new PersistentPollutionGeneratedByIndustrialOutput();
    this.equations.push(persistentPollutionGeneratedByIndustrialOutput);
    persistentPollutionGenerationRate.persistentPollutionGeneratedByIndustrialOutput = persistentPollutionGeneratedByIndustrialOutput;
    persistentPollutionGeneratedByIndustrialOutput.perCapitaResourceUsageMultiplier = perCapitaResourceUsageMultiplier;
    persistentPollutionGeneratedByIndustrialOutput.population = population;

    const persistentPollutionGeneratedByAgriculturalOutput = new PersistentPollutionGeneratedByAgriculturalOutput();
    this.equations.push(persistentPollutionGeneratedByAgriculturalOutput);
    persistentPollutionGenerationRate.persistentPollutionGeneratedByAgriculturalOutput = persistentPollutionGeneratedByAgriculturalOutput;
    persistentPollutionGeneratedByAgriculturalOutput.agriculturalInputsPerHectare = agriculturalInputsPerHectare;
    persistentPollutionGeneratedByAgriculturalOutput.arableLand = arableLand;

    const persistentPollutionTransmissionDelayK = 20; // years, used in eqn 141
    const persistenPollutionAppearanceRate = new PersistenPollutionAppearanceRate(persistentPollutionTransmissionDelayK);
    this.equations.push(persistenPollutionAppearanceRate);
    persistenPollutionAppearanceRate.persistentPollutionGenerationRate = persistentPollutionGenerationRate;

    const persistentPollution = new PersistentPollution(this.startYear);
    this.equations.push(persistentPollution);
    persistentPollution.persistenPollutionAppearanceRate = persistenPollutionAppearanceRate;

    const indexOfPersistentPollution = new IndexOfPersistentPollution();
    this.equations.push(indexOfPersistentPollution);
    lifetimeMultiplierFromPollution.indexOfPersistentPollution = indexOfPersistentPollution;
    landFertilityDegradationRate.indexOfPersistentPollution = indexOfPersistentPollution;
    indexOfPersistentPollution.persistentPollution = persistentPollution;

    const persistenPollutionAssimilationRate = new PersistenPollutionAssimilationRate();
    this.equations.push(persistenPollutionAssimilationRate);
    persistentPollution.persistenPollutionAssimilationRate = persistenPollutionAssimilationRate;
    persistenPollutionAssimilationRate.persistentPollution = persistentPollution;

    const assimilationHalfLifeMultiplier = new AssimilationHalfLifeMultiplier();
    this.equations.push(assimilationHalfLifeMultiplier);
    assimilationHalfLifeMultiplier.indexOfPersistentPollution = indexOfPersistentPollution;

    const assimilationHalfLife = new AssimilationHalfLife();
    this.equations.push(assimilationHalfLife);
    persistenPollutionAssimilationRate.assimilationHalfLife = assimilationHalfLife;
    assimilationHalfLife.assimilationHalfLifeMultiplier = assimilationHalfLifeMultiplier;

    // SUPPLEMENTARY EQUATIONS

    const fractionOfOutputInAgriculture = new FractionOfOutputInAgriculture();
    this.equations.push(fractionOfOutputInAgriculture);
    fractionOfOutputInAgriculture.food = food;
    fractionOfOutputInAgriculture.serviceOutput = serviceOutput;
    fractionOfOutputInAgriculture.industrialOutput = industrialOutput;

    const fractionOfOutputInIndustry = new FractionOfOutputInIndustry();
    this.equations.push(fractionOfOutputInIndustry);
    fractionOfOutputInIndustry.food = food;
    fractionOfOutputInIndustry.industrialOutput = industrialOutput;
    fractionOfOutputInIndustry.serviceOutput = serviceOutput;

    const fractionOfOutputInServices = new FractionOfOutputInServices();
    this.equations.push(fractionOfOutputInServices);
    fractionOfOutputInServices.food = food;
    fractionOfOutputInServices.industrialOutput = industrialOutput;
    fractionOfOutputInServices.serviceOutput = serviceOutput;
  }

  restart() {
    this.currentYear = this.startYear;

    this.equations.forEach((e) => e.reset());
    this.equations.filter((e) => e.init).forEach((e) => e.init());
  }

  warmup() {
    for (var i = 1; i <= 3; i++) {
      this.auxArray.forEach((e) => e.warmup(this.currentYear, this.timeStep));
      this.rateArray.forEach((e) => e.warmup(this.currentYear, this.timeStep));

      this.equations.forEach((e) => e.tick());
    }

    for (var i = 1; i <= 10; i++) {
      this.auxArray.forEach((e) => e.warmup(this.currentYear, this.timeStep));
      this.rateArray.forEach((e) => e.warmup(this.currentYear, this.timeStep));
      this.levelArray.forEach((e) => e.warmup(this.currentYear, this.timeStep));

      this.equations.forEach((e) => e.tick());
    }

    this.levelArray.forEach((e) => e.reset(this.startYear));
  }

  quickWarmup() {
    for (var i = 1; i <= 100; i++) {
      this.auxArray.forEach((e) => e.warmup(this.currentYear, this.timeStep));
      this.rateArray.forEach((e) => e.warmup(this.currentYear, this.timeStep));

      this.equations.forEach((e) => e.tick());
    }
  }

  step() {
    this.levelArray.forEach((e) => e.update(this.currentYear, this.timeStep));
    this.auxArray.forEach((e) => e.update(this.currentYear, this.timeStep));
    this.rateArray.forEach((e) => e.update(this.currentYear, this.timeStep));

    this.equations.forEach((e) => e.tick());
    this.currentYear += this.timeStep;
  }
}
