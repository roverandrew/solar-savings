export default class Location{
  constructor(longitude,latitude,province,region){
    this.longitude = longitude;
    this.latitude = latitude;
    this.province = province;
    this.region = region;
  }

  getLongitude(){
    return this.longitude;
  }

  getLatitude(){
    return this.latitude;
  }

  getProvince(){
    return this.province;
  }

  getRegion(){
    return this.region;
  }
}
