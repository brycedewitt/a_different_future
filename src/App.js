import React, { Fragment } from 'react';
import { SecureRoute, ImplicitCallback } from '@okta/okta-react';
import { Route } from 'react-router-dom';
import './App.css';
import AppHeader from './Components/helpers/header';
import Particles from './Components/helpers/particlesBackground.js';
import Home from './Components/pages/homepage.js';
import {CssBaseline, withStyles,} from '@material-ui/core';
import PostsManager from "./Components/pages/PostsManager";

const styles = theme => ({
  main: {
    padding: 3 * theme.spacing.unit,
    [theme.breakpoints.down('xs')]: {
      padding: 2 * theme.spacing.unit,
    },
  },
});

const App = ({ classes }) => (
  <Fragment>
    <CssBaseline />
    <AppHeader />
    <main className={classes.main}>
      <Route exact path="/" component={Home} />
      <SecureRoute exact path="/info" component={PostsManager} />
      <Route path="/implicit/callback" component={ImplicitCallback} />
    </main>
    <Particles/>
  </Fragment>
);

export default withStyles(styles)(App);
