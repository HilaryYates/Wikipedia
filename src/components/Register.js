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
  onSubmitRegister = () => {
    fetch("https://localhost:3000/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user) {
          this.props.onRouteChange("home");
        }
      });
    console.log(this.state);
  };
  render() {
    const { onRouteChange } = this.props;

    return (
      <div>
        <form>
          <div>Name</div>
          <input type='text' onChange={this.onNameChange} />
          <div>Email</div>
          <input type='email' onChange={this.onEmailChange} />
          <div type='password'>Password</div>
          <input type='password' onChange={this.onPasswordChange} />
          <input type='submit' onClick={() => onRouteChange("home")} />
        </form>
      </div>
    );
  }
}

export default Register;
