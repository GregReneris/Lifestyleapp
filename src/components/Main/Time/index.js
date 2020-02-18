import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Date from "../Date/index"
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexGrow: 1,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DatePickers() {
  const classes = useStyles();

  return (

    <form className={classes.container} noValidate>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Typography variant="h3">
          What day do you want to adventure?
    </Typography>
      </Grid>
      <br />
    <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <TextField
          id="date"
          label="Pick A Day"
          type="date"
          defaultValue={Date}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
    </form>
  );
}