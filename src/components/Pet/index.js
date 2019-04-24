import React, { Component } from 'react';

class Pet extends Component {
  render() {
    return <div>{this.props.breed}</div>;
  }
}

export default Pet;
