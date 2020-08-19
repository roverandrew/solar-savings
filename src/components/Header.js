import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaSolarPanel } from 'react-icons/fa';
import { Container, Box, Switch } from '@material-ui/core';
import { connect } from 'react-redux';

const Header = (props) => {
    const handleChange = (e) => {
        props.setUnits(!props.unitsMetric);
    };
    return(
        <header className="header">
            <Container maxWidth="lg">
                <Box display="flex" justifyContent="space-between" bgcolor="#20222b">
                    <Box p={1} bgcolor="#20222b" width="30%" textAlign="left">
                        <NavLink to="/help" className="header__link" activeClassName="is-active">Documentation</NavLink>
                    </Box>
                    <Box p={1} bgcolor="#20222b" width="30%" textAlign="center">
                        <FaSolarPanel className="solar-icon" />
                        <NavLink exact to="/" className="header__title">  Solar Savings</NavLink>
                    </Box>
                    <Box p={1} bgcolor="#20222b" width="30%" textAlign="right">
                        <div className="header__link"><span>Metric</span><Switch onChange={handleChange} inputProps={{ 'aria-label': 'secondary checkbox' }} /><span>Imperial</span></div>
                    </Box>
                </Box>
            </Container>
    </header>  
    );
}


Header.defaultProps = {
    title:'Solar Savings'
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUnits: (unitsMetric) => (
      dispatch({
        type: 'SET_UNITS',
        unitsMetric
      })        
    )
  }
}

const mapStateToProps = (state) => ({
    unitsMetric: state.unitsMetric
});

export default connect(mapStateToProps,mapDispatchToProps)(Header)