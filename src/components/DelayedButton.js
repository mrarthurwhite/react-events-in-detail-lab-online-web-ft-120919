import React, { Component } from 'react';

export default class DelayedButton extends Component {

  constructor(props) {
    super();
  }

  handleClick = (e) => {
    e.persist();
    setTimeout(this.props.delay);
    this.props.onDelayedClick(e);
  }

  render() {

    return (
      <button onClick={this.handleClick}>Show Delayed X Y</button>
    )
  }

}
