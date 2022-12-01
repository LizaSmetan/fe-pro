import { Component } from 'react';

/**
 * 1: 
   constructor() {
      super();
      this.handleClick = this.handleClick.bind(this);
   }
   2: onClick={() => this.handleClick()}
 */

/**
* Old state
* constructor(props) {
    super(props);

    this.state = {
      visible: false,
      myMessage: this.props.message,
    };
  }
*/

export default class Switch extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState((prevState) => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.toggle}>
          Переключити
        </button>

        {this.state.visible && <p>{this.props.message}</p>}
      </div>
    );
  }
}
