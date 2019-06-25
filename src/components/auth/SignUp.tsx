import React, { Component } from 'react';

class SignUp extends Component {
  state = {
    emial: '',
    password: '',
    firstName: '',
    lastName: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Emial</label>
            <input type="emial" id="email" onChange={this.handleChange} value={} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} value={} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="password" id="firstName" onChange={this.handleChange} value={} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="password" id="lastName" onChange={this.handleChange} value={} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
