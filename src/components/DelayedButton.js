import React, { Component } from 'react';

export default class DelayedButton extends Component {

  constructor(props) {
    super();
  }

  handleClick = (e) => {
    e.persist();
    window.setTimeout(this.props.onDelayedClick(e), this.props.delay);

  }

  render() {

    return (
      <button onClick={this.handleClick}>Show Delayed X Y</button>
    )
  }

}
