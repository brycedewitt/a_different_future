import React, { Component } from 'react';
import './homepage.css';
import Timer from '../timer.js';

class Homepage extends Component {

  constructor(props) {
    super(props);
    this.state = { greeting: 'Hello' };
  }

  render() {
    return (
      <div className="set--alignment">
        <a href="http://tedxnortheasternu.com/">
        <img className="enter--site--button" src="/TEDx_Northeastern_2Lines_White_Logo-01.png"/>
        </a>
        <Timer className='timer'/>
      </div>
    );
  }
}
export default Homepage;