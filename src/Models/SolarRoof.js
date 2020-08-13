import Roof from './Roof';

export default class SolarRoof extends Roof{
    constructor(area){
      super(area);
      this.capacityPerUnit=0.0538105;
      this.moduleType=1;
      this.losses=21.6;
      this.arrayType=1;
      this.tilt=27;
      this.azimuth=0;
    }

    calculateCost(){
      const costPerUnit = 335;
      return this.area*costPerUnit;
    }
  }