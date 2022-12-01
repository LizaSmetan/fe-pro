import { Component } from 'react';

import CounterActions from './CounterActions';
import CounterDisplay from './CounterDisplay';

export default class Counter extends Component {
  state = {
    counter: 0,
  };

  decrement = (e) => {
    this.setState((prevState) => ({
      counter: prevState.counter - Number(e.target.dataset.step),
    }));
  };

  increment = (e) => {
    this.setState((prevState) => ({
      counter: prevState.counter + Number(e.target.dataset.step),
    }));
  };

  render() {
    return (
      <div>
        <CounterActions decrement={this.decrement} increment={this.increment} />
        <CounterDisplay counter={this.state.counter} />
      </div>
    );
  }
}
