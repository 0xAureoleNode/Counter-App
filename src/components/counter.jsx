import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    tags: [],
  };


  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

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
=======
  renderTags() {
    return this.state.tags.length === 0 ? (
      <p>There are not tags</p>
    ) : (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.state.tags.length === 0 && 'plz write some tags'}
        {this.renderTags()}
      </div>

    );
  }
}

export default Counter;
