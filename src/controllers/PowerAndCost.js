const provincialElectricityCostPerkWh = {"CA-AB":0.167,"CA-BC":0.124,"CA-MB":0.096,"CA-NB":0.127,"CA-NL":0.138,"CA-NS":0.150,"CA-NT":0.387,"CA-NU":0.375,"CA-ON":0.125,"CA-PE":0.168,"CA-QC":0.073,"CA-SK":0.182};

const getTotalRoofCost = (standardRoofCost, solarRoofCost, solarAnnualPowerOutput,currentProvince) => { 

    const teslaRoofAnnualSavings = solarAnnualPowerOutput*(provincialElectricityCostPerkWh[currentProvince]);

    let teslaRoofTotalCost = new Array(11), teslaRoofTotalCostTMV = new Array(11);

    teslaRoofTotalCost[0] = solarRoofCost;
    let solarRoofCostTMV = solarRoofCost
    teslaRoofTotalCostTMV[0] = solarRoofCostTMV;
    
    let j = 0, r = 0.03;

    for(let i=1;i<=50;i++){
        solarRoofCost = solarRoofCost - teslaRoofAnnualSavings;
        solarRoofCostTMV = solarRoofCostTMV - ( teslaRoofAnnualSavings/ (Math.pow((1+r),i)) );
        if((i%5==0)){
            j++;
            teslaRoofTotalCostTMV[j] = solarRoofCostTMV;
            teslaRoofTotalCost[j] = solarRoofCost;
        }
    }

    //Generate cost data for the standard roof (constant).
    let standardRoofTotalCost = new Array(11);
    standardRoofTotalCost.fill(standardRoofCost)

    const costData = {
        standard:standardRoofTotalCost,
        tesla:teslaRoofTotalCost,
        teslaTMV:teslaRoofTotalCostTMV
    };

    return costData; //All data points are for the start of the year
}

const getSolarPortionInfo = (capacity,totalRoofArea) => {
    const costPerkW = 2640;
    const solarRoofCost = capacity*costPerkW;
   
    return solarRoofCost;
}

const getAnnualHouseholdPowerOutput = (monthlyElectricityBill,currentProvince) => {
    var annualOutput = ( (monthlyElectricityBill) / (provincialElectricityCostPerkWh[currentProvince]) ) * 12;
    return annualOutput;
}

export { getSolarPortionInfo, getTotalRoofCost, getAnnualHouseholdPowerOutput };
