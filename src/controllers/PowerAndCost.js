const provincialElectricityCostPerkWh = {"CA-AB":0.167,"CA-BC":0.124,"CA-MB":0.096,"CA-NB":0.127,"CA-NL":0.138,"CA-NS":0.150,"CA-NT":0.387,"CA-NU":0.375,"CA-ON":0.125,"CA-PE":0.168,"CA-QC":0.073,"CA-SK":0.182};

const getTotalRoofCost = (standardRoofCost, solarPortionRoofCost, standardPortionRoofCost, annualPowerOutput,currentProvince) => { 

    const teslaRoofAnnualSavings = annualPowerOutput*(provincialElectricityCostPerkWh[currentProvince]);
    let totalCombinedRoofCost = solarPortionRoofCost + standardPortionRoofCost;
    
    let teslaRoofTotalCost = new Array(51);
    teslaRoofTotalCost[0] = totalCombinedRoofCost;
    for(let i=1;i<teslaRoofTotalCost.length;i++){
        totalCombinedRoofCost = totalCombinedRoofCost - teslaRoofAnnualSavings;
        teslaRoofTotalCost[i] = totalCombinedRoofCost;
    }
 
    //Generate cost data for the standard roof (constant).
    let standardRoofTotalCost = new Array(51);
    for(let i=0;i<standardRoofTotalCost.length;i++){
        standardRoofTotalCost[i] = standardRoofCost;
    }

    //Generate labels for the graph (x-axis units) at 2 year increments.
    let labels = new Array(51);
    for(let i = 0;i<labels.length;i++){
        labels[i] = i;
    }

    const solarSavingsEnd = standardRoofTotalCost[standardRoofTotalCost.length-1] - teslaRoofTotalCost[teslaRoofTotalCost.length-1];
    const solarSavingsHalfway = standardRoofTotalCost[(standardRoofTotalCost.length-1)/2] - teslaRoofTotalCost[(teslaRoofTotalCost.length-1)/2];
    
    const data = {standard:standardRoofTotalCost,tesla:teslaRoofTotalCost,labels,solarSavingsEnd,solarSavingsHalfway};
    return data; //All data points are for the start of the year
}

const getAnnualHouseholdPowerOutput = (monthlyElectricityBill,currentProvince) => {
    var annualOutput = ( monthlyElectricityBill/(provincialElectricityCostPerkWh[currentProvince]) )*12;
    return annualOutput;
}

export { getTotalRoofCost, getAnnualHouseholdPowerOutput };
