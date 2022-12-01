import { Component } from 'react';

import CounterActions from './CounterActions';
import CounterDisplay from './CounterDisplay';

export default class Counter extends Component {
  constructor(){
    super();

    this.decrement = this.decrement.bind(this)

    this.state = {
      counter: 0,
      visible: true,
      isError: false
    };
  }

  componentDidUpdate(nextProp, nextState){
    console.log('componentDidUpdate', nextProp, nextState, '')
  }
  

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

  setVisible = () => {
    this.setState((prev) => ({
      visible: !prev.visible
    }))
  }

  componentDidCatch(error, info){
    this.setState((prev) => ({
      isError: !prev.isError
    }))
  }

  render() {
    if(this.isError){
      return <h2>Error</h2>
    }
    return (
      <div>
        <button onClick={this.setVisible}>Показати / приховати</button>
        {
          this.state.visible ? (
            <CounterActions decrement={this.decrement} increment={this.increment} />
          ) : null
        }
        <CounterDisplay counter={this.state.counter} />
      </div>
    );
  }
}
