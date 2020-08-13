import Roof from './Roof';

export default class StandardRoof extends Roof{
    constructor(area,type){
      super(area);
      this.type=type;
    }
  
    getType(){
      return this.type;
    }

    calculateCost(){
      let costPerUnit;
      switch(this.type){
        case 'asphalt':
          costPerUnit = 100;
          break;
        case 'tile':
          costPerUnit = 180;
          break;
        case 'slate':
          costPerUnit = 260;
          break;
      }
      return this.area*costPerUnit;
    }
}