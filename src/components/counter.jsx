import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    count: 0,
    tags: [],
  };

  handleIncrement = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  render() {
    return (
      <>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </>
    );
  }
  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.state.count === 0 ? 'primary' : 'warning';
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'zero' : count;
  }
}
