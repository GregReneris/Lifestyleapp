import React from 'react';
import "./style.css";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Table from '../Table/index'

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

function CreateAccount() {
    return (
        <div>
            <h1>spontinAIty</h1>
            <div className="container">
            <h3>Hello, Tyson!</h3>
            {/* TODO: add variable for name pulled from db */}
            
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
        </div>
    )
}

export default CreateAccount;