import React, { Component } from 'react';
import './homepage.css';

class Homepage extends Component {

  constructor(props) {
    super(props);
    this.state = { greeting: 'Hello' };
  }

  render() {
    return (
      <div class="set--alignment">
        <a href="http://tedxnortheasternu.com/">
        <img className="enter--site--button" src="/TEDx_Northeastern_2Lines_White_Logo-01.png"/>
        </a>
      </div>
    );
  }
}
export default Homepage;