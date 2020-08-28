import React from 'react';
import { Container } from '@material-ui/core';
import equation from '../assets/standardRoofCostEqn.svg';

const InfoPage = () => (
    <Container className="documentation" maxWidth="lg">
        
        <div className="cost">
            <h3 className="cost__title">Calculating Standard Roof Cost</h3>

            <img src="https://latex.codecogs.com/svg.latex?\fn_phv&space;\small&space;standardRoofCost&space;=&space;(\frac{standardRoofTypeCost}{m^2})&space;*&space;(roofArea)" title="\small standardRoofCost = (\frac{standardRoofTypeCost}{m^2}) * (roofArea)" />
        <div className="info-section">
            <h3>Standard Roof Type</h3>
                <p>
                    Roofs can be made from different materials, each with their own cost per unit area. 
                    To account for this the cost of a solar shingle roof can be compared to that of different traditional roof types.
                    The following are the different types of "normal" roofs, that the solar panel roof will be compared to.
                </p>
                    <ul>
                        <li><p><span>Slate:</span> Roof choice representing a cost of $242CAD/m<sup>2</sup>.</p></li>
                        <li><p><span>Tile:</span> Roof choice representing a cost of $169CAD/m<sup>2</sup>.</p></li>
                        <li><p><span>Asphalt:</span> Roof choice representing a cost of $93CAD/m<sup>2</sup>.</p></li>
                    </ul>
        </div>
        <div>
            <h3>Roof Area</h3>
                <p>The roof area is calculated with the following assumptions.</p>
                    <ul>
                        <li><p>The roof has an eaves length (overhang) of 0.5m</p></li>
                        <li><p>The roof has 27 degrees of tilt. The correction factor is a result of this tilt.</p></li>
                    </ul>
        </div>
                <img src="https://latex.codecogs.com/svg.latex?\fn_phv&space;\small&space;roofArea&space;=&space;(length)&space;*&space;(width&plus;eavesLength)&space;*&space;(correctionFactor=1.118)" title="\small roofArea = (length) * (width+eavesLength) * (correctionFactor=1.118)" />
     
                <p id="note">
                    <sup>**</sup>Average roofing costs were derived from data available on Home Advisor and Homewyse. In each case, there is a wide range of roofing costs, 
                    for each roof type it's respective midpoint cost is used. Costs include all 
                    equivalent components of a Solar Roof (such as installation labor, materials, existing roof tear-off, and underlayment).
                </p>
        </div>
        <div className="cost">
            <h3 className="cost__title">Calculating Solar Roof Cost</h3>
            
            <div className="info-section">
                <img src="https://latex.codecogs.com/svg.latex?\fn_phv&space;\small&space;upfrontCost&space;=&space;solarSystemkWCapacity*\frac{\left&space;(&space;testlaClaimedCost=2640CAD&space;\right&space;)}{kW}" title="\small upfrontCost = solarSystemkWCapacity*\frac{\left ( testlaClaimedCost=2640CAD \right )}{kW}" />
            </div>
                <div className="info-section">
                    <h3>Monthly Electricity Bill</h3>
                    <p>Used in combination with the kWh cost of electricity in the user's respective province to calculate the annual kWh energy output of a household</p>
                </div>
                <img className="eqn" src="https://latex.codecogs.com/svg.latex?\fn_phv&space;\small&space;AnnualkWhElectricityConsumed&space;=&space;(\frac{monthlyElectricityBill}{kWhElectricityCost})*12" title="\small AnnualkWhElectricityConsumed = (\frac{monthlyElectricityBill}{kWhElectricityCost})*12" />
                
                

                <div className="info-section">
                    <h3>Calculating Capacity</h3>
                    <p>The NREL Solar API takes following inputs:</p>
                        <ul>
                            <li><p><span>System capacity (kW):</span> Initially set to be 1000th of a house's estimated power output (kWh). This is an unrealistically high value which will be lowered recursively, as outlined below.</p></li>
                            <li><p><span>Module type:</span> Premium (Assumption based on the assumed quality of Tesla's solar shingles.</p></li>
                            <li><p><span>Array type:</span> Fixed (roof mounted). </p></li>
                            <li><p><span>Tilt:</span> 27 degrees. (Assumption, it is estimated to be the most common roof tilt angle, on average)</p></li>
                            <li><p><span>Azimuth:</span> The azimuth is the angle between the north vector and the sun's vector on the horizontal plane. As a result, different side's of the house have different azimuth's. Since a Tesla Solar Roof is assumed to be evenly distributed across a roof, an azimuth of 0 degrees is used. 0 degrees of azimuth is indicative of a roof that is completely flat. This is supposed to represent the differing azimuth's of each roof side cancelling eachother out. This is by far the biggest assumption.</p></li>
                            <li><p><span>Array type:</span> Fixed (roof mounted).</p></li>
                            <li><p><span>Latitude and longitude:</span> Geographical coordinates</p></li>
                        </ul>
                </div>
            
                <div className="info-section">
                    <p>
                        The return value from the API represents the estimated production kWh production of certain kW sized solar system. 
                        The calling function is recursively called, continually decreasing the inputted kW capacity of the system, until the resulting kWh output of the solar system, 
                        is less than that the actual kWh output of a user's house. This way, it can be insured that all solar energy produced is being used by the user's house. 
                        Once this occurs, the related kW capacity is the kW capacity of the user's house.
                    </p>
                </div>
               
            <div className="eqn-section">
                <img className="eqn" src="https://latex.codecogs.com/svg.latex?\fn_phv&space;\small&space;yearlySavings&space;=&space;solarRoofAnnualkWhOutput*(\frac{provincialElectricityCost}{kWh})" title="\small yearlySavings = solarRoofAnnualkWhOutput*(\frac{provincialElectricityCost}{kWh})" />
                <img className="eqn" src="https://latex.codecogs.com/svg.latex?\fn_phv&space;\small&space;finalSolarCost&space;=&space;\sum_{year=0}^{50}initialSolarCost&space;-&space;yearlySavings" title="\small finalSolarCost = \sum_{year=0}^{50}initialSolarCost - yearlySavings" />
            </div>  

        </div>
        
  
    </Container>
);

export default InfoPage;