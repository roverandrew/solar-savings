import House from '../Models/House';
import Roof from '../Models/Roof';
import StandardRoof from '../Models/StandardRoof';
import SolarRoof from '../Models/SolarRoof';
import Location from '../Models/Location';

import { fetchGeoLocation,fetchWithRetry } from './externalAPI';
import { getTotalRoofCost, getAnnualHouseholdPowerOutput } from './PowerAndCost';

const NRELAPIKey = 'nANSd1IKE1BAzkWI5BwrefIJDaTXhuEJd4O89gQv';
const geoAPIKey = '6a4dd82597fcfab0321c961633972c01020023e2';

// import { connect } from 'react-redux';
// import { startAddSavings } from '../actions/savings';

const _handleSubmit = async (values) => {
    console.log("Here's the submitted data");
    console.log(values)
    const monthlyElectricityBill = values.monthlyElectricityBill;
            
    let house = new House(values.houseLength,values.houseWidth);
    let roof = new Roof(house.calculateRoofArea(house.length,house.width));
    let standardRoof = new StandardRoof(roof.area,values.roofType);
    let solarRoof = new SolarRoof(roof.area);
            
    
    let { longitude,latitude,province,region } = await fetchGeoLocation(geoAPIKey);
    const location = new Location(longitude,latitude,province,region);
    let annualHouseholdPowerOutput = getAnnualHouseholdPowerOutput(monthlyElectricityBill,province);
    const allData = {...solarRoof,...location,annualHouseholdPowerOutput,NRELAPIKey}
    console.log("here's all the data");
    console.log(allData);
    const { powerData, percentageSolar } = await fetchWithRetry(allData);

    const costData = getTotalRoofCost(standardRoof.calculateCost(),
                                     percentageSolar*solarRoof.calculateCost(),
                                     (1-percentageSolar)*standardRoof.calculateCost(),
                                     powerData.outputs.ac_annual,
                                     province);
    return { costData, percentageSolar, longitude, latitude, province, region };
}

export default _handleSubmit;

