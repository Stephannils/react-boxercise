import React, { Component } from 'react';
import Box from './Box';
import './BoxContainer.css';

class BoxContainer extends Component {
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
  render() {
    return (
      <div className="BoxContainer">
        {this.props.colors.map((c) => (
          <Box color={c} />
        ))}
      </div>
    );
  }
}

export default BoxContainer;
