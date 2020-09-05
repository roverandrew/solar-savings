import React from "react";
import { Field, Form, Formik } from "formik";
import { Container, TextField, Button, Grid, RadioGroup, InputLabel } from "@material-ui/core";
import * as yup from "yup";
import { connect } from 'react-redux';
import RoofTypeRadio from './RoofTypeRadio';
import ErrorModal from './ErrorModal';
import _handleSubmit from '../controllers/_handleSubmit';

const validationSchema = yup.object().shape({
  monthlyElectricityBill: yup
    .number()
    .min(10,'Value must be greater than or equal to 10')
    .max(10000,'Value must be less than or equal to 10000')
    .required('Required'),
  houseLength: yup
    .number()
    .min(5,'Value must be greater than or equal to 5')
    .max(100,'Value must be less than or equal to 100')
    .required('Required'),
  houseWidth: yup
    .number()
    .min(5,'Value must be greater than or equal to 5')
    .max(100,'Value must be less than or equal to 100')
    .required('Required'),
});

class HouseDataForm extends React.Component{
  state = {
    error: false
  }
  handleCloseModal = () => {
    this.setState(() => ({error:false}))
  }
  handleUpdateData(data){
      this.props.updateData(data);
  }
  render(){
    return(
      <div className="form">
        {this.state.error && (<ErrorModal submissionError={this.state.error} handleCloseModal={this.handleCloseModal} />)}
        <Container maxWidth="lg">
          <Formik
          validateOnChange={true} 
            initialValues={{roofType:'slate',monthlyElectricityBill:"",houseLength:"",houseWidth:""}}
            validationSchema={validationSchema} 
            onSubmit={async (values, { setSubmitting }) => { //gets called whenever your form is submitted make an async call
              setSubmitting(true);
              const valuesCopy = { ...values};
              
              if(!(this.props.unitsMetric)){
                valuesCopy.houseLength = valuesCopy.houseLength*0.3048;
                valuesCopy.houseWidth = valuesCopy.houseWidth*0.3048;
              }

              try{
                const data = await _handleSubmit(valuesCopy);
                this.handleUpdateData(data);
              }catch(err){
                console.log("error getting geo-location!!!")
                this.setState(() => ({error:true}));
              }
            }}  
          >
          {({ errors, touched, isSubmitting }) => {
            return(
              <Form>
                <h1 className="form__title"> Solar Roof Cost of Ownership Calculator</h1>
                <Grid container spacing={3}>
                  
                  <Grid item xs={12} s={6} m={6} l={6} xl={6}>
                  <InputLabel shrink ><h1 id="input-label">Select a roof type</h1></InputLabel>
                      <RadioGroup row defaultValue="top">
                        <RoofTypeRadio name="roofType" label="asphalt" type="radio" value="asphalt" size="medium" />
                        <RoofTypeRadio name="roofType" label="tile" type="radio" value="tile" size="medium" />
                        <RoofTypeRadio name="roofType" label="slate" type="radio" value="slate" size="medium" />
                      </RadioGroup> 
                  </Grid>

                  <Grid item xs={12} s={6} m={6} l={6} xl={6}>
                    <InputLabel shrink ><h1 id="input-label">Enter your monthly electricity bill</h1></InputLabel>
                    <Field name="monthlyElectricityBill" type="number" fullWidth={true} as={TextField}/>
                    {errors.monthlyElectricityBill && touched.monthlyElectricityBill ? (<div className="error">{errors.monthlyElectricityBill}</div>) : null}
                  </Grid>

                  <Grid item xs={12} s={6} m={6} l={6} xl={6}>
                    <InputLabel shrink ><h1 id="input-label">Enter the <i>approximate</i> length of your house</h1></InputLabel>
                    <Field 
                      type="number" 
                      placeholder={this.props.unitsMetric ? "units: meters" : "units: feet"} 
                      name="houseLength" 
                      fullWidth={true}
                      as={TextField} 
                    />
                    {errors.houseLength && touched.houseLength ? (<div className="error">{errors.houseLength}</div>) : null}
                  </Grid>

                  <Grid item xs={12} s={6} m={6} l={6} xl={6}>
                    <InputLabel shrink ><h1 id="input-label">Enter the <i>approximate</i> width of your house</h1></InputLabel>
                    <Field 
                      type="number" 
                      placeholder={this.props.unitsMetric ? "units: meters" : "units: feet"}
                      name="houseWidth"  
                      fullWidth={true}
                      as={TextField} 
                    />
                    {errors.houseWidth && touched.houseWidth ? (<div className="error">{errors.houseWidth}</div>) : null}
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
