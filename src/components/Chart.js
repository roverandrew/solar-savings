import React from 'react';
import { Line  } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { Container } from '@material-ui/core';

const Chart = (props) => {
        const { standard, tesla, teslaTMV } = props;
        const data = {
            labels: [0,5,10,15,20,25,30,35,40,45,50],
            datasets: [{ 
                data: standard,
                label: "Standard Roof Cost",
                borderColor: "#3e95cd",
                    fill: false
            },{ 
                data: tesla,
                label: "Tesla Solar Cost",
                borderColor: "#8e5ea2",
                fill: false
            },{
                data: teslaTMV,
                label: "Tesla Solar Cost, Time-Value Of Money Included",
                borderColor: "green",
                fill: false
            }]
        };
        
        const options = {
            title: {
                display: true,
                text: 'Tesla Solar Shingles vs Traditional Roof Time-Cost Data',
                fontSize: 30,
                fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                            fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'",
                        }
                    }
                ],
                xAxes: [
                    {
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ]
            }
        };
        return(
            <div>
                <Container maxWidth="lg">
                    <Line
                        data={data}
                        options={options}
                        width={400}
                        height={400}
                        options={{ maintainAspectRatio: false }}
                    />
                </Container>      
            </div>
        );
}

const mapStateToProps = (state) => {
    const { standard, tesla, teslaTMV } = state.costData;
    return( {standard, tesla, teslaTMV} )
}


export default connect(mapStateToProps)(Chart);

