import React from 'react';
import "./style.css";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'react-router-dom';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

function LoginPage() {
    return (
        <div>
            <h1>spontinAIty</h1>
            <div className="container">
            <h3>Login</h3>
            
        <TextField
          id="outlined-password-input"
          label="Email"
          type="email"
          autoComplete="current-email"
          variant="outlined"
        />
        <br/>
        <br/>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
        <br/>
        <br/>
        <Button variant="contained">Submit</Button>
        <br/>
        
        {/* <Link> */}
        <h5>Create Account</h5>
        {/* </Link> */}
        <br/>
            </div>   
        </div>
    )
}

export default LoginPage;