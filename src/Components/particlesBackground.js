import Particles from "react-particles-js";
import React, { Component } from 'react';

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

class particlesBackground extends Component {
  render() {
    return <Particles className="particles" params={particlesOptions} />;
  }
}

export default particlesBackground;