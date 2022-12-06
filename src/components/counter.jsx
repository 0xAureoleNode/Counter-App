import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <>
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'zero' : count;
  }
}

export default Counter;
