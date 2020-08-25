import React from "react";
import { Field, Form, Formik, useField } from "formik";
import { Container, TextField, Button, Grid, RadioGroup, Radio,  FormControlLabel, InputLabel } from "@material-ui/core";
import _handleSubmit from '../controllers/_handleSubmit';
import { connect } from 'react-redux';
import RoofTypeRadio from './RoofTypeRadio';

class HouseDataForm extends React.Component{
  handleUpdateData(data){
      this.props.updateData(data);
  }
  render(){
    return(
      <div className="form">
        <Container maxWidth="lg">
          <Formik 
            initialValues={{roofType:'slate',monthlyElectricityBill:'',houseLength:'',houseWidth:''}} 
            onSubmit={async (values, { setSubmitting }) => { //gets called whenever your form is submitted make an async call
              setSubmitting(true);
              const valuesCopy = { ...values};

              if(!(this.props.unitsMetric)){
                valuesCopy.houseLength = valuesCopy.houseLength*0.3048;
                valuesCopy.houseWidth = valuesCopy.houseWidth*0.3048;
              }
              
              const data = await _handleSubmit(valuesCopy);
              this.handleUpdateData(data);
              values = null;
              setSubmitting(false);
            }}
          >
          {({ values, isSubmitting, handleChange, handleBlur, handleSubmit, setFieldValue }) => {
            return(
              <Form>
                <h1 className="form__title"> Solar Roof Cost of Ownership Calculator</h1>
                <Grid container spacing={3}>
                  
                  <Grid item xs={6} s={6} m={6} l={12} xl={12} >
                  <InputLabel shrink id="demo-simple-select-placeholder-label-label"><h1 id="input-label">Select a roof type</h1></InputLabel>
                      <RadioGroup row defaultValue="top">
                        <RoofTypeRadio name="roofType" label="asphalt" type="radio" value="asphalt" size="medium" />
                        <RoofTypeRadio name="roofType" label="tile" type="radio" value="tile" size="medium" />
                        <RoofTypeRadio name="roofType" label="slate" type="radio" value="slate" size="medium" />
                      </RadioGroup> 
                  </Grid>

                  <Grid item xs={6} s={6} m={6} l={12} xl={12} >
                    <InputLabel shrink id="demo-simple-select-placeholder-label-label"><h1 id="input-label">Enter your monthly electricity bill</h1></InputLabel>
                    <Field name="monthlyElectricityBill" type="number" fullWidth={true} as={TextField}/>
                  </Grid>

                  <Grid item xs={6} s={6} m={6} l={12} xl={12} >
                    <InputLabel shrink id="demo-simple-select-placeholder-label-label"><h1 id="input-label">Enter the <i>approximate</i> length of your house</h1></InputLabel>
                    <Field 
                      type="number" 
                      placeholder={this.props.unitsMetric ? "units: meters" : "units: feet"} 
                      name="houseLength" 
                      fullWidth={true}
                      as={TextField} />
                  </Grid>

                  <Grid item xs={6} s={6} m={6} l={12} xl={12} >
                    <InputLabel shrink id="demo-simple-select-placeholder-label-label"><h1 id="input-label">Enter the <i>approximate</i> width of your house</h1></InputLabel>
                    <Field 
                      type="number" 
                      placeholder={this.props.unitsMetric ? "units: meters" : "units: feet"}
                      name="houseWidth"  
                      fullWidth={true}
                      as={TextField} />
                  </Grid>


                  <Grid item>
                    <Button type="submit" disabled={isSubmitting} variant="contained" color="primary">Submit</Button>
                  </Grid>
                </Grid>

              </Form>
          )}}
          </Formik>
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateData: (data) => { dispatch({type: 'UPDATE_DATA', ...data }) }
  }
}

const mapStateToProps = (state) => ({
  unitsMetric: state.unitsMetric,
});

export default connect(mapStateToProps,mapDispatchToProps)(HouseDataForm)
