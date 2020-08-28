import React from "react";
import { Container } from '@material-ui/core';

const WhatIsSolarSavings = () => (
    <Container maxWidth="lg">
        <h2 id="what-is-solar">What is Solar Savings?</h2>
        <p className="info">Adoption of renewable energy is dependant on it's economic competiveness compared to non-renewable alternatives. 
            Solar Savings therefore looks to answer the question "Are solar roofs worth it?". 
            Using the inputted data above and a host of geolocation specific solar data, 
            Solar Savings calculates and visualizes the economic viability of Tesla's solar shingle roof.
        </p>
    </Container>
);

export default WhatIsSolarSavings;