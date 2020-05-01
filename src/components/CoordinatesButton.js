import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  constructor(props) {
    super()
  }

  handleClick = (e) => {
    let x = e.clientX;
    let y = e.clientY;
    this.props.onReceiveCoordinates([x,y]);
  }

  render() {

    return (
      <button onClick={this.handleClick}>Show X Y</button>
  )
  }

}
