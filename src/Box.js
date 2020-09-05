import React, { Component } from 'react';
import './Box.css';

const colors = [
  'red',
  'blue',
  'black',
  'green',
  'purple',
  'orange',
  'gray',
  'magenta',
];

class Box extends Component {
  state = {
    color: colors[Math.floor(Math.random() * colors.length)],
  };

  handleClick = (e) => {
    this.setState({ color: colors[Math.floor(Math.random() * colors.length)] });
  };

  render() {
    return (
      <div
        className="Box"
        style={{
          background: this.state.color,
        }}
        onClick={this.handleClick}
      ></div>
    );
  }
}

export default Box;
