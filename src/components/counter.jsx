import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    tags: [],
  };

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
