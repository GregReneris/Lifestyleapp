import React from 'react';
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import API from "../../../utils/api"
import "./style.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);


  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

function handleClick(event) {
    event.preventDefault();
    console.log("logged out");
    API.logout()
      .then(res => {
        console.log(res.data)
        // redirect here
        window.location.href = "https://aqueous-savannah-60861.herokuapp.com/login";
      })
      .catch(err => {
        console.log(err);
      });
    }

  return (
    <div className={classes.root}>
      <AppBar position="static" className="appbar" style={{ background: "rgba(168,168,169, .9)", height: "15vh" }}>
        <Toolbar>
          <FormGroup>

          </FormGroup>
          <Typography  className={classes.title} >
              <h1>spontaneity</h1>
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <h2><AccountCircle /></h2>
              </IconButton >
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <div className="linkColor">
                <Link style={{ textDecoration: 'none', color: '#472629' }} to='/main'><MenuItem onClick={handleClose}>Explore</MenuItem></Link>
                <Link style={{ textDecoration: 'none', color: '#472629' }} to='/profile'><MenuItem onClick={handleClose}>Profile</MenuItem></Link>
                <Link style={{ textDecoration: 'none', color: '#472629' }} to='/'><MenuItem onClick={handleClick}>Logout</MenuItem></Link>
                </div>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}