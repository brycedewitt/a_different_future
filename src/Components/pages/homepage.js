import React, { Component } from 'react';
import './homepage.css';

class Homepage extends Component {

  constructor(props) {
    super(props);
    this.state = { greeting: 'Hello' };
  }

  render() {
    return (
      <div className="container h-100">
      <div class="h-100 row align-items-center enter--site--button">
        <button type="button" className="btn btn-light">a different future.</button>
      </div>
      </div>
    );
  }
}
export default Homepage;