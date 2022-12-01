import { Component } from "react";

export default class CounterActions extends Component {
  constructor(){
    super();

    this.setVisible = this.setVisible.bind(this);

    this.state = {
      visible: false
    };
  }
  setVisible(){
    this.setState((prev) => ({
      visible: !prev.visible
    }))
  }
  render(){
    return (
      <div>
        {`${this.state.visible}`}
        <button onClick={this.setVisible}>
          setVisible
        </button>
        <button onClick={this.props.decrement} data-step={1}>
          -
        </button>
        <button onClick={this.props.increment} data-step={1}>
          +
        </button>
      </div>
    );
  }
}
