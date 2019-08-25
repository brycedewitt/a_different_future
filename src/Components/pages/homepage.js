import React, { Component } from 'react';
import './homepage.css';

class Homepage extends Component {

  constructor(props) {
    super(props);
    this.state = { greeting: 'Hello' };
  }

  render() {
    return (
      <div className="set--alignment">
        <a href="http://tedxnortheasternu.com/">
        <img className="enter--site--button" src="/TEDxDemo_Animated.gif"/>
        </a>
      </div>
    );
  }
}
export default Homepage;