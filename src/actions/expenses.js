// ADD_EXPENSE
export const addHouseData = ({standardRoofType = '',units = 'imperial',houseLength = 40,houseWidth = 20,monthlyElectricityBill  = 400} = {}) => ({
    type: 'ADD_HOUSE_DATA',
    standardRoofType,
    units,
    houseLength,
    houseWidth,
    monthlyElectricityBill
  });
