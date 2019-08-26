import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Button,
  Toolbar,
  withStyles,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import LoginButton from './LoginButton.js';

const styles = {
  flex: {
    flex: 1,
  },
};

const AppHeader = ({ classes }) => (
  <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
    <Toolbar>
      <Button color="inherit" component={Link} to="/info"><MenuIcon /></Button>
      <div className={classes.flex} />
      <LoginButton />
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(AppHeader);