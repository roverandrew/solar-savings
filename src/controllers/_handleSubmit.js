import House from '../Models/House';
import Roof from '../Models/Roof';
import StandardRoof from '../Models/StandardRoof';
import SolarRoof from '../Models/SolarRoof';
import Location from '../Models/Location';

import { fetchGeoLocation,fetchCapacity } from './externalAPI';
import { getSolarPortionInfo, getTotalRoofCost, getAnnualHouseholdPowerOutput } from './PowerAndCost';

const NRELAPIKey = 'nANSd1IKE1BAzkWI5BwrefIJDaTXhuEJd4O89gQv';
const geoAPIKey = '6a4dd82597fcfab0321c961633972c01020023e2';

const _handleSubmit = async (values) => {
    const monthlyElectricityBill = values.monthlyElectricityBill;
            
    let house = new House(values.houseLength,values.houseWidth);
    let roof = new Roof(house.calculateRoofArea(house.length,house.width));
    let standardRoof = new StandardRoof(roof.area,values.roofType);
    let solarRoof = new SolarRoof(roof.area);
    
    let { longitude,latitude,province,region } = await fetchGeoLocation(geoAPIKey);
    const location = new Location(longitude,latitude,province,region);
    
    let annualHouseholdPowerOutput = getAnnualHouseholdPowerOutput(monthlyElectricityBill,province);
    solarRoof.systemCapacity = annualHouseholdPowerOutput/1000;

    const allData = {...solarRoof,...location,annualHouseholdPowerOutput,NRELAPIKey}

    const { solarAnnualOutput, systemCapacity }= await fetchCapacity(allData);
    
    const solarRoofCost = getSolarPortionInfo(systemCapacity,roof.area);
    const costData = getTotalRoofCost(standardRoof.calculateCost(), solarRoofCost, solarAnnualOutput, province);
    return { costData, longitude, latitude, province, region };
}

export default _handleSubmit;

