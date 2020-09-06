import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
  static defaultProps = {
    colors: [
      'red',
      'blue',
      'white',
      'black',
      'purple',
      'pink',
      'gray',
      'yellow',
      'magenta',
      'brown',
      'teal',
    ],
  };
  state = {
    color: this.props.colors[
      Math.floor(Math.random() * this.props.colors.length)
    ],
  };

  handleClick = (e) => {
    this.setState({
      color: this.props.colors[
        Math.floor(Math.random() * this.props.colors.length)
      ],
    });
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
