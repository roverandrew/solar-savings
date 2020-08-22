import React from 'react';
import { connect } from 'react-redux';
import { Container } from '@material-ui/core';

const ChartInfo =  (props) => {
    const { standard, tesla, teslaTMV} = props;
    const { percentageSolar, longitude, latitude, region, province } = props;
    let solarSavingsHalfway = standard[5] - tesla[5];
    let solarSavingsEnd = standard[10] - tesla[10]
    let solarSavingsHalfwayTMV = standard[5] - teslaTMV[5];
    let solarSavingsEndTMV = standard[10] - teslaTMV[10];
    return(
        <React.Fragment>
            <Container maxWidth="lg">
                <div className="dataInfo">
                    <p>Using solar data from ({latitude},{longitude}), {region}, {province} coordinates and kWh electricty cost from  z province</p>
                
                </div>
                <div className="dataInfo">
                    <p>It is estimated</p>
                    <h3>{percentageSolar}%</h3>                                          
                    <p>of your roof should be made of solar shingles for maximum cost efficiency.</p>
                </div>
                <div>
                    {(solarSavingsHalfway>0) ? 
                    (
                        <div className="dataInfo">
                            <p>After 25 years, you will save </p>
                            <h3>{solarSavingsHalfway}</h3>
                            <p>from your solar roof.</p>
                        </div>
                    ) : (
                        <div className="dataInfo">
                            <p>After 25 years, your solar roof will cost you an extra </p>
                            <h3>{solarSavingsHalfway*-1}</h3>
                            <p>over a traditional roof</p>
                        </div>
                    )}
                </div>
                <div>
                    {(solarSavingsEnd>0) ? 
                    (
                        <div className="dataInfo">
                            <p>After 50 years, you will save </p>
                            <h3>{solarSavingsEnd}</h3>
                            <p>from your solar roof.</p>
                        </div>
                    ) : (
                        <div className="dataInfo">
                            <p>After 50 years, your solar roof will cost you an extra </p>
                            <h3>{solarSavingsEnd*-1}</h3>
                            <p>over a traditional roof</p>
                        </div>
                    )}
                </div>
                <div className="dataInfo">
                    <h3>But if the time-value of money is taken into account:</h3>                                          
                </div>
                <div>
                    {(solarSavingsHalfwayTMV>0) ? 
                    (
                        <div className="dataInfo">
                            <p>After 25 years, you will save </p>
                            <h3>{solarSavingsHalfwayTMV}</h3>
                            <p>from your solar roof.</p>
                        </div>
                    ) : (
                        <div className="dataInfo">
                            <p>After 25 years, your solar roof will cost you an extra </p>
                            <h3>{solarSavingsHalfwayTMV*-1}</h3>
                            <p>over a traditional roof</p>
                        </div>
                    )}
                </div>
                <div>
                    {(solarSavingsEndTMV>0) ? 
                    (
                        <div className="dataInfo">
                            <p>After 50 years, you will save </p>
                            <h3>{solarSavingsEndTMV}</h3>
                            <p>from your solar roof.</p>
                        </div>
                    ) : (
                        <div className="dataInfo">
                            <p>After 50 years, your solar roof will cost you an extra </p>
                            <h3>{solarSavingsEndTMV*-1}</h3>
                            <p>over a traditional roof</p>
                            <p>Assumes 3% investment yield.*</p>
                        </div>
                    )}
                </div>

            </Container>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    const { standard, tesla, teslaTMV } = state.costData;
    const { percentageSolar, longitude, latitude, province, region } = state;
    return( {standard, tesla, teslaTMV, percentageSolar, longitude, latitude, province, region} )
}


export default connect(mapStateToProps)(ChartInfo);