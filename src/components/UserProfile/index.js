import React from 'react';
import "./style.css";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Table from '../Table/index'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const useMyStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function CreateAccount() {
    const classes = useMyStyles();
    return (
        <div>
            <h1>spontinAIty</h1>
            <div className="container">
            <h3>Hello, Tyson!</h3>
            {/* TODO: add variable for name pulled from db */}
            
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>Email:</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
              <TextField
          id="outlined-password-input"
          label="Email"
          type="email"
          autoComplete="current-email"
          //TODO: add variable for email pulled from db
          variant="outlined"
        />
        </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><Button variant="contained">Update</Button></Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper className={classes.paper}>Zipcode:</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <TextField
          id="outlined-password-input"
          label="Zipcode"
          type="number"
          autoComplete="current-zipcode"
           //TODO: add variable for zipcode pulled from db
          variant="outlined"
        />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><Button variant="contained">Update</Button></Paper>
        </Grid>
      </Grid>
    </div>
        <h5>Congratulations! You got off the couch so many times. You should be proud.</h5>
    <br/>
    </div>
    <br/>
    <Table/>
    <br/>
    </div>
  );
}

export default CreateAccount;


{/* 
        <h5>Email:  
        <TextField
          id="outlined-password-input"
          label="Email"
          type="email"
          autoComplete="current-email"
          //TODO: add variable for email pulled from db
          variant="outlined"
        /></h5>
        <Button variant="contained">Update</Button>
        <h5>Zipcode:
        <TextField
          id="outlined-password-input"
          label="Zipcode"
          type="number"
          autoComplete="current-zipcode"
           //TODO: add variable for zipcode pulled from db
          variant="outlined"
        /></h5>
        <Button variant="contained">Update</Button>
        <br/>
        <br/>
        <h5>Congratulations! You got off the couch so many times. You should be proud.</h5>
        <Table/>
            </div>   
        </div> */}
{/* )} */}