import React from 'react';
import { Radio,  FormControlLabel, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useField } from "formik";

const useStyles = makeStyles({
  root: {
    textTransform: 'capitalize',
    fontSize:'1.2rem',
    color:'rgba(0, 0, 0, 0.87)',
    fontWeight: 'bold'
  }
});

const RoofTypeRadio = ({label, ...props}) => {
  const classes = useStyles();
  const [field,meta,helpers] = useField(props);
  
  return (
    <FormControlLabel 
      {...field} 

      control=
        {<Radio color="primary" />}

      label={
        <Typography 
          classes={{
            root:classes.root
          }}
        >
          {label}
        </Typography>
      }
    />
    );
  }

export default RoofTypeRadio;