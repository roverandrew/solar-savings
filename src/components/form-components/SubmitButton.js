import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Formik } from "formik";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const SubmitButton = ({ ...props }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button {...props} variant="contained" color="primary">
        Primary
      </Button>
    </div>
  );
}

export default SubmitButton;