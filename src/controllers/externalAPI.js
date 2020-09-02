const fetchGeoLocation = async () => {
  let response = await fetch(`/weather`);
  let json = await response.json();
  const  { longitude, latitude } = json.location;
  const province = json.area.code;
  const region  = json.city.name;
  return {longitude,latitude,province,region};
}

const fetchCapacity = async ({area, systemCapacity, moduleType, losses, arrayType, tilt, azimuth,
                              longitude, latitude, province, region, annualHouseholdPowerOutput, retryLimit=50,retryCount=0} = {}) => {
                                const apiURL = `https://developer.nrel.gov/api/pvwatts/v6.json?api_key=${nrelAPIKey}&lat=${latitude}&lon=${longitude}&system_capacity=${systemCapacity}&azimuth=${azimuth}&tilt=${tilt}&array_type=${arrayType}&module_type=${moduleType}&losses=${losses}`;

    const res = await fetch(`power/${latitude},${longitude},${systemCapacity},${azimuth},${tilt},${arrayType},${moduleType},${losses}`);
    const powerData = await res.json();
    
    //If the outputted power by the solar shingles is greater than what the house outputs, make the system capacity smaller
    //Else return the response.
    if (powerData.outputs.ac_annual > annualHouseholdPowerOutput) {                          

        return fetchCapacity(area, systemCapacity-0.1, moduleType, losses, arrayType, tilt, azimuth,
                            longitude, latitude, province, region, annualHouseholdPowerOutput, retryLimit, retryCount++);
    }
        
    return { solarAnnualOutput:powerData.outputs.ac_annual, systemCapacity:systemCapacity };
}

export { fetchGeoLocation, fetchCapacity };