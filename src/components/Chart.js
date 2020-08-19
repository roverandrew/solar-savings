import React from 'react';
import { Line  } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { Container } from '@material-ui/core';

class Chart extends React.Component{
    render(){
        console.log("Here are the props of the Chart")
        console.log(this.props)
        const { labels, solarSavingsEnd, solarSavingsHalfway, standard, tesla } = this.props;
        const data = {
            labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25 ,26, 27 ,28, 29, 30, 31, 32, 33, 34, 35, 36, 37 ,38, 39, 40, 41, 42, 43, 44, 45,  46, 47, 48, 49, 50],
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
                            maxTicksLimit: 11
                        }
                    }
                ]
            }
        };
        return(
            <div>
                
                    {solarSavingsEnd &&
                        ( 
                            <Container maxWidth="lg">
                            <Line
                                data={data}
                                options={options}
                                width={400}
                                height={400}
                                options={{ maintainAspectRatio: false }}
                            />
                            </Container>
                        )
                    }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    solarSavingsEnd: state.solarSavingsEnd,
    solarSavingsHalfway: state.solarSavingsHalfway,
    standard: state.standard,
    tesla: state.tesla
});


export default connect(mapStateToProps)(Chart);

