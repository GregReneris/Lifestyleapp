import React from 'react';
import "./style.css";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

function CreateAccount() {
  const classes = useStyles();


  return (
    <div>
      <h1>spontinAIty</h1>
      <div className="container">
        <h3>Create Account</h3>

        <form className={classes.root} noValidate autoComplete="off" action="/login/createNewUser" method="POST">
          <TextField
            id="outlined-password-input"
            label="Name"
            type="text"
            autoComplete="current-name"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            id="outlined-password-input"
            label="Email"
            type="email"
            autoComplete="current-email"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            id="outlined-password-input"
            label="Zipcode"
            type="number"
            autoComplete="current-zipcode"
            variant="outlined"
          />
          <br />
          <br />
          <Button variant="contained" value="Create Profile">Submit</Button>
          <br />
          <br />
        </form>
      </div>
      <p class="copyright" alignItems="center"> Copyright © 2020, all rights reserved</p>
    </div>
  )
}

export default CreateAccount;