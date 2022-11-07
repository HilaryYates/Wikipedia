import React from "react";

class Register extends React.Component {
  constructor() {
    super();
    this.state = { name: "", email: "", password: "" };
  }
  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };
  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };
  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };
  onSubmitRegister = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        name: this.state.name,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        console.log(user);
        if (user) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    return (
      <div>
        <div>Name</div>
        <input type='text' onChange={this.onNameChange} />
        <div>Email</div>
        <input type='email' onChange={this.onEmailChange} />
        <div>Password</div>
        <input type='password' onChange={this.onPasswordChange} />
        <input type='submit' onClick={this.onSubmitRegister} />
      </div>
    );
  }
}

export default Register;
