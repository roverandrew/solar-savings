const fetchGeoLocation = async (geoAPIKey) => {
  let response = await fetch(`https://api.getgeoapi.com/api/v2/ip/check?api_key=${geoAPIKey}`);
  let json = await response.json();
  console.log(json);
  const  { longitude, latitude } = json.location;
  const province = json.area.code;
  const region  = json.city.name;
  return {longitude,latitude,province,region};
}

const fetchWithRetry = async ({area, capacityPerUnit, moduleType, losses, arrayType, tilt, azimuth,longitude, latitude, province, region,annualHouseholdPowerOutput, NRELAPIKey, 
                              percentageSolar=1,retryLimit=10,retryCount=0} = {}) => {

    const systemCapacity = capacityPerUnit*area*percentageSolar; 
    const res = await fetch(`https://developer.nrel.gov/api/pvwatts/v6.json?api_key=${NRELAPIKey}&lat=${latitude}&lon=${longitude}&system_capacity=${systemCapacity}&azimuth=${azimuth}&tilt=${tilt}&array_type=${arrayType}&module_type=${moduleType}&losses=${losses}`)
    const powerData = await res.json();
    
    //If the outputted power by the solar shingles is greater than what the house outputs, make the solar area smaller and fetch again.
    //Else return the response.
    if (powerData.outputs.ac_annual > annualHouseholdPowerOutput) {                          
        if(percentageSolar<0.10 || retryCount == 10) return {powerData,percentageSolar};

        return fetchWithRetry(area, capacityPerUnit, moduleType, losses, arrayType, tilt, azimuth,
                              longitude, latitude, province, region,
                              annualHouseholdPowerOutput, NRELAPIKey, percentageSolar=1,retryLimit=10,retryCount=0);
    }
        
    return {powerData,percentageSolar} 
}

export { fetchGeoLocation, fetchWithRetry };