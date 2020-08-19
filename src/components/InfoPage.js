import React from 'react';
import { Container } from '@material-ui/core';

const InfoPage = () => (
    <div>
        <p>
            <Container maxWidth="lg">
                For mass-adoption of renewable energy sources to occur, they must be economically competitive with non-renewable alternatives. 
                SolarSavings therefore looks to answer the question "Are solar roofs worth it?". 
                Using the inputted data above and geolocation specific data on solar irradiance, cost of electricity and more, 
                SolarSavings calculates and visualizes the economic viability of Tesla's yet-to-be-released solar shingle roof. 
                For information on the calculations behind this analysis, feel free to read the documentation here.
            </Container>
        </p>
    </div>
);
export default InfoPage;