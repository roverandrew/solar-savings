import React from "react";
import { Field, Form, Formik } from "formik";
import { Container, TextField, Button, Grid, Select, MenuItem, InputLabel } from "@material-ui/core";

const HouseDataForm = () =>(
    <div className="form">
      <Container maxWidth="lg">
        <Formik 
          initialValues={{firstName:''}} 
          onSubmit={(data, {setSubmitting}) => { //gets called whenever your form is submitted
            //make an async call
            setSubmitting(true);
            console.log(data)
            setSubmitting(false);
          }}
        >
        {({ values, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
          <Form>
            <h1 className="form__title"> Solar Roof Cost of Ownership Calculator</h1>
            <Grid container spacing={3}>

              <Grid item xs={6} s={6} m={6} l={12} xl={12} >
                <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                  <h1>Select a traditional roof type</h1>
                </InputLabel>
                <Field name="roofType" type="input" fullWidth={true} as={Select}>
                  <MenuItem value={10}>Slate (expensive)</MenuItem>
                  <MenuItem value={20}>Tile (standard)</MenuItem>
                  <MenuItem value={30}>Asphalt (cheapest)</MenuItem>
                </Field>
              </Grid>

              <Grid item xs={6} s={6} m={6} l={12} xl={12} >
                <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                  <h1>Enter your monthly electricity bill</h1>
                </InputLabel>
                <Field name="monthlyElectricityBill" type="input" fullWidth={true} as={TextField}/>
              </Grid>

              <Grid item xs={6} s={6} m={6} l={12} xl={12} >
                <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                  <h1>Enter the <i>approximate</i> length of your house</h1>
                </InputLabel>
                <Field name="houseLength" type="input" fullWidth={true} as={Select} >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Field>
              </Grid>

              <Grid item xs={6} s={6} m={6} l={12} xl={12} >
                <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                  <h1>Enter the <i>approximate</i> width of your house</h1>
                </InputLabel>
                <Field name="houseWidth" type="number" fullWidth={true} as={TextField} />
              </Grid>

              <Grid item xs={12} s={12} m={12} l={12} xl={12} >
                <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                  <h1>Age</h1>
                </InputLabel>
                <Field name="firstName" type="number" fullWidth={true} as={TextField} />
              </Grid>

              <Grid item justify="center">
                <Button type="submit" disabled={isSubmitting} variant="contained" color="primary">Submit</Button>
              </Grid>
            </Grid>

          </Form>
        )}
        </Formik>
      </Container>
    </div>
);

export default HouseDataForm;
