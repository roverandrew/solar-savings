import React from 'react';
import { connect } from 'react-redux';
import { Container } from '@material-ui/core';

const ChartInfo =  (props) => {
    const { standard, tesla, teslaTMV} = props;
    const { longitude, latitude, region, province } = props;
    let solarSavingsHalfway = standard[5] - tesla[5];
    let solarSavingsEnd = standard[10] - tesla[10]
    let solarSavingsHalfwayTMV = standard[5] - teslaTMV[5];
    let solarSavingsEndTMV = standard[10] - teslaTMV[10];

    return(
        <React.Fragment>
            <Container maxWidth="lg">
                <div className="dataInfo">
                    <h2>Current location: </h2><p>({latitude},{longitude}), {region}, {province}</p>
                
                </div>
                <div>
                    {(solarSavingsHalfway>0) ? 
                    (
                        <div className="dataInfo">
                            <p>After 25 years, you will save </p>
                            <h3>${Number.parseFloat(solarSavingsHalfway).toFixed(2)} </h3>
                            <p>from your solar roof.</p>
                        </div>
                    ) : (
                        <div className="dataInfo">
                            <p>After 25 years, your solar roof will cost you an extra </p>
                            <h3>${Number.parseFloat(solarSavingsHalfway*-1).toFixed(2)} </h3>
                            <p>over a traditional roof</p>
                        </div>
                    )}
                </div>
                <div>
                    {(solarSavingsEnd>0) ? 
                    (
                        <div className="dataInfo">
                            <p>After 50 years, you will save </p>
                            <h3>${Number.parseFloat(solarSavingsEnd).toFixed(2)} </h3>
                            <p>from your solar roof.</p>
                        </div>
                    ) : (
                        <div className="dataInfo">
                            <p>After 50 years, your solar roof will cost you an extra </p>
                            <h3>${Number.parseFloat(solarSavingsEnd*-1).toFixed(2)} </h3>
                            <p>over a traditional roof</p>
                        </div>
                    )}
                </div>
                <div className="dataInfo">
                    <h2>But if the time-value of money is taken into account:</h2>                                          
                </div>
                <div>
                    {(solarSavingsHalfwayTMV>0) ? 
                    (
                        <div className="dataInfo">
                            <p>After 25 years, you will save </p>
                            <h3>${Number.parseFloat(solarSavingsHalfwayTMV).toFixed(2)} </h3>
                            <p>from your solar roof.</p>
                        </div>
                    ) : (
                        <div className="dataInfo">
                            <p>After 25 years, your solar roof will cost you an extra </p>
                            <h3>${Number.parseFloat(solarSavingsHalfwayTMV*-1).toFixed(2)} </h3>
                            <p>over a traditional roof</p>
                        </div>
                    )}
                </div>
                <div>
                    {(solarSavingsEndTMV>0) ? 
                    (
                        <div className="dataInfo">
                            <p>After 50 years, you will save </p>
                            <h3>${Number.parseFloat(solarSavingsEndTMV).toFixed(2)} </h3>
                            <p>from your solar roof.</p>
                        </div>
                    ) : (
                        <div className="dataInfo">
                            <p>After 50 years, your solar roof will cost you an extra </p>
                            <h3>${Number.parseFloat(solarSavingsEndTMV*-1).toFixed(2)} </h3>
                            <p>over a traditional roof</p>
                        </div>
                    )}
                    <p id="subscript">Assumes 3% investment yield.*</p>
                </div>
                
            </Container>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    const { standard, tesla, teslaTMV } = state.costData;
    const { longitude, latitude, province, region } = state;
    return( {standard, tesla, teslaTMV, longitude, latitude, province, region} )
}


export default connect(mapStateToProps)(ChartInfo);