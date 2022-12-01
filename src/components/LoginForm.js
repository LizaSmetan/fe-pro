import { Component } from 'react';

const INITIAL_STATE = {
    login: '',
    email: '',
    password: '',
    agreed: false,
    country: 'UA'
}

export default class Form extends Component {
  state = {
    ...INITIAL_STATE
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
    // fetch().then(() => {})
    this.setState({...INITIAL_STATE})
  }
  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    console.log(name, value, type, checked)
    this.setState({[name]: type === 'checkbox' ? checked : value})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.email} type="text" name="email" onChange={this.handleChange}/>
        <input value={this.state.login} type="text" name="login" onChange={this.handleChange}/>
        <input value={this.state.password} type="password" name="password" onChange={this.handleChange}/>
        <label>
            <input type="checkbox" checked={this.state.agreed} name="agreed" onChange={this.handleChange}/>
            I Agree
        </label>
        <select name="country" onChange={this.handleChange} value={this.state.country}>
            <option value="UA">Україна</option>
            <option value="PL">Польша</option>
        </select>
        <button style={{display: this.state.agreed ? 'inline-block' : 'none'}}>Login</button>
      </form>
    );
  }
}
