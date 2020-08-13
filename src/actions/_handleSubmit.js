import House from '../Models/House';
import Roof from '../Models/Roof';
import StandardRoof from '../Models/StandardRoof';
import SolarRoof from '../Models/SolarRoof';
import Location from '../Models/Location';

import { fetchGeoLocation,fetchWithRetry } from '../actions/externalAPI';
import { getTotalRoofCost, getAnnualHouseholdPowerOutput } from '../actions/PowerAndCost';

const NRELAPIKey = 'nANSd1IKE1BAzkWI5BwrefIJDaTXhuEJd4O89gQv';
const geoAPIKey = '6a4dd82597fcfab0321c961633972c01020023e2';

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
    
    const { powerData, percentageSolar } = await fetchWithRetry(solarRoof,location,annualHouseholdPowerOutput,NRELAPIKey);

    const costData = getTotalRoofCost(standardRoof.calculateCost(),
                                     percentageSolar*solarRoof.calculateCost(),
                                     (1-percentageSolar)*standardRoof.calculateCost(),
                                     powerData.outputs.ac_annual,
                                     province);

    
}

export default _handleSubmit;

