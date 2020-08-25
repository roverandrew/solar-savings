const provincialElectricityCostPerkWh = {"CA-AB":0.167,"CA-BC":0.124,"CA-MB":0.096,"CA-NB":0.127,"CA-NL":0.138,"CA-NS":0.150,"CA-NT":0.387,"CA-NU":0.375,"CA-ON":0.125,"CA-PE":0.168,"CA-QC":0.073,"CA-SK":0.182};

const getTotalRoofCost = (standardRoofCost, solarPortionRoofCost, standardPortionRoofCost, annualPowerOutput,currentProvince) => { 

    const teslaRoofAnnualSavings = annualPowerOutput*(provincialElectricityCostPerkWh[currentProvince]);
    let totalCombinedRoofCost = solarPortionRoofCost + standardPortionRoofCost;
    let totalCombinedTMV = totalCombinedRoofCost;

    let teslaRoofTotalCost = new Array(11), teslaRoofTotalCostTMV = new Array(11);

    teslaRoofTotalCost[0] = totalCombinedRoofCost;
    teslaRoofTotalCostTMV[0] = totalCombinedTMV;
    
    let j = 0, r = 0.03;

    for(let i=1;i<=50;i++){
        totalCombinedRoofCost = totalCombinedRoofCost - teslaRoofAnnualSavings;
        totalCombinedTMV = totalCombinedTMV - ( teslaRoofAnnualSavings/ (Math.pow((1+r),i)) );
        if((i%5==0)){
            j++;
            teslaRoofTotalCostTMV[j] = totalCombinedTMV;
            teslaRoofTotalCost[j] = totalCombinedRoofCost;
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

const getSolarArea = (capacity) => {
    const solarShingleCapacity = 0.024;
    const solarShingleArea = 1.14*0.43
    const numOfPanels = capacity / solarShingleCapacity;
    const solarArea = numOfPanels * solarShingleArea;
    return solarArea;
}

const getAnnualHouseholdPowerOutput = (monthlyElectricityBill,currentProvince) => {
    var annualOutput = ( (monthlyElectricityBill) / (provincialElectricityCostPerkWh[currentProvince]) ) * 12;
    return annualOutput;
}

export { getSolarArea, getTotalRoofCost, getAnnualHouseholdPowerOutput };
