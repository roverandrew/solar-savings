import React from 'react';
import { connect } from 'react-redux';
import { Container } from '@material-ui/core';

const ChartInfo =  (props) => {
    return(
        <React.Fragment>
            <Container maxWidth="lg">
                <div className="dataInfo">
                    <p>User solar data from x,y coordinates and kWh electricty cost from  z province</p>
                
                </div>
                <div className="dataInfo">
                    <p>It is estimated</p>
                    <h3>data.percentageSolarArea</h3>                                          
                    <p>of your roof should be made of solar shingles for maximum cost efficiency.</p>
                </div>
                <div>
                    {(props.solarSavingsHalfway>0) ? 
                    (
                        <div className="dataInfo">
                            <p>After 25 years, you will save </p>
                            <h3>{props.solarSavingsHalfway}</h3>
                            <p>from your solar roof.</p>
                        </div>
                    ) : (
                        <div className="dataInfo">
                            <p>After 25 years, your solar roof will cost you an extra </p>
                            <h3>{props.solarSavingsHalfway*-1}</h3>
                            <p>over a traditional roof</p>
                        </div>
                    )}
                </div>
                <div>
                    {(props.solarSavingsEnd>0) ? 
                    (
                        <div className="dataInfo">
                            <p>After 50 years, you will save </p>
                            <h3>{props.solarSavingsEnd}</h3>
                            <p>from your solar roof.</p>
                        </div>
                    ) : (
                        <div className="dataInfo">
                            <p>After 50 years, your solar roof will cost you an extra </p>
                            <h3>{props.solarSavingsEnd*-1}</h3>
                            <p>over a traditional roof</p>
                        </div>
                    )}
                </div>
            </Container>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    solarSavingsEnd: state.solarSavingsEnd,
    solarSavingsHalfway: state.solarSavingsHalfway,
    standard: state.standard,
    tesla: state.tesla
});


export default connect(mapStateToProps)(ChartInfo);