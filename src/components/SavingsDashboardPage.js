import React from 'react';
import HouseDataForm from './HouseDataForm';
import ChartInfo from './ChartInfo';
import Chart from './Chart';
import { connect } from 'react-redux';

const SavingsDashboardPage = (props) => (
    <div>
        <HouseDataForm />

            { props.isChartDisplayed && <React.Fragment>
                <Chart />
                <ChartInfo />
            </React.Fragment>
            }
    </div>
);

const mapStateToProps = (state) => ({
    isChartDisplayed: !!state.longitude
});

export default connect(mapStateToProps)(SavingsDashboardPage)
