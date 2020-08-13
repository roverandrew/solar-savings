export default class House{
  constructor(length,width){
    this.length=length;
    this.width=width;
  }

  getLength(){
    return this.length
  }
  getWidth(){
    return this.width
  }

  calculateRoofArea(length,width){
    const eavesLength = 0.5; //Assumed roof overhang in meters.
    const correctionFactor = 1.118; //From an assumed 27 degree tilt. //Typical roof tilt varies between 18.43 degrees of tilt and 36.87 degrees of tilt.//Determine the longer side for when adding the additional area due to roof overhand(eaves).
    if(width>length){
        const lengthCopy = length;
        length = width;
        width = lengthCopy;
    }
    const roofArea = (length)*(width+eavesLength)*(correctionFactor);
    return roofArea;
  }
}