import React from 'react';
import "./style.css";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Table from '../Table/index'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '../Main/AppBar/index'

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
      flexGrow: 1
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.primary,
  }
}));


  function CreateAccount() {
    const classes = useStyles();
    return (
      <div>
        <div className="backgroundFour">
          <AppBar />

          <div className="test4">
            <h3>Hello, _____ </h3>
            {/* <h3>Hello,  {data.name} in {data.city}</h3> */}

            <div className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item xs={2}><h5>Email:</h5>

                </Grid>
                <Grid item xs={8}>
                  <TextField
                    id="outlined-password-input"
                    label="Email"
                    type="email"
                    autoComplete="current-email"
                    //TODO: add variable for email pulled from db
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={2}>
                  <Button variant="contained">Update</Button>
                </Grid>

                <Grid item xs={2}><h5>City:</h5>
                </Grid>
                <Grid item xs={8}>

                  <TextField
                    id="outlined-password-input"
                    label="City"
                    type="text"
                    autoComplete="current-City"
                    //TODO: add variable for City pulled from db
                    variant="outlined"
                  />

                </Grid>
                <Grid item xs={2}>
                  <Button variant="contained">Update</Button>
                </Grid>
              </Grid>
            </div>
            <br />
          </div>
          <br />
          <div className="tablething">
            <h4>Congratulations! You got off the couch so many times!</h4>
            <Table />
            <br />
          </div>
          <p className="copyright" alignItems="center"> Copyright © 2020 All Rights Reserved</p>
        </div>
      </div>
    );
    }

export default CreateAccount;


/* 
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
        <h5>City:
        <TextField
          id="outlined-password-input"
          label="City"
          type="number"
          autoComplete="current-City"
           //TODO: add variable for City pulled from db
          variant="outlined"
        /></h5>
        <Button variant="contained">Update</Button>
        <br/>
        <br/>
        <h5>Congratulations! You got off the couch so many times. You should be proud.</h5>
        <Table/>
            </div>   
        </div> */
{/* )} */ }