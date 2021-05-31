import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "Alberto",
      password: "blahblah"
    };
  }

  updateChange = (e) => { 
    this.setState({
      [e.target.name] : e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault()
    if (this.state.username && this.state.password) {
        this.props.handleLogin(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label>
            Username
            <input onChange={this.updateChange} value={this.state.username}id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.updateChange} value={this.state.password} id="password" name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
