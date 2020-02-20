import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Date from "../Date/index"
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

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
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function DatePickers() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Container id="wcon">
      <form className={classes.container} noValidate>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Typography variant="h4">
            What day do you want to adventure?
    </Typography>
          <br />
          <br />
          <br />
          <br />
          <br />
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
            classes={{ root: classes.maxWidth }}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}

          />
        </Grid>
      </form>
    </Container>
  );
}
