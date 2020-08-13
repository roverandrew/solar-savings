import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaSolarPanel } from 'react-icons/fa';
import { Container, Box, Sizing } from '@material-ui/core';

const Header = (props) => (
    <header className="header">
        <Container maxWidth="lg">
            <Box display="flex" justifyContent="space-between" bgcolor="#20222b" height="25%">
                <Box p={1} bgcolor="#20222b" width="10%" textAlign="left">
                    <NavLink to="/help" className="header__link" activeClassName="is-active">Documentation</NavLink>
                </Box>
                <Box p={1} bgcolor="#20222b" width="25%" textAlign="center">
                    <FaSolarPanel className="solar-icon" />
                    <NavLink exact to="/" className="header__title">  Solar Savings</NavLink>
                </Box>
                <Box p={1} bgcolor="#20222b" width="10%" textAlign="right">
                    <div className="header__link">Item 3</div>
                </Box>
            </Box>
        </Container>
    </header>  
);


Header.defaultProps = {
    title:'Solar Savings'
}

export default Header;