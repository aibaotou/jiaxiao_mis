import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }

  render() {
    const { count } = this.state;

    return (
      <div>
        a3434
        {count}
      </div>
    );
  }
}
