const fetchGeoLocation = async (longitude, latitude) => {
  let response = await fetch(`/location?latitude=${latitude}&longitude=${longitude}`);
  let json = await response.json();
  const  { city, state } = json.features[0].properties;
  console.log(city);
  console.log(state);
  const province = state;
  const region  = city;
  return {province,region};
}

const fetchCapacity = async ({area, systemCapacity, moduleType, losses, arrayType, tilt, azimuth,
                              longitude, latitude, province, region, annualHouseholdPowerOutput, retryLimit=50,retryCount=0} = {}) => {

    const res = await fetch(`/power?latitude=${latitude}&longitude=${longitude}&systemCapacity=${systemCapacity}&azimuth=${azimuth}&tilt=${tilt}&arrayType=${arrayType}&moduleType=${moduleType}&losses=${losses}`);
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