import React from "react";
import Button from "react-bootstrap/Button";

//npm start: serve -s build
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
    fetch("https://localhost:3000/register", {
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
        if (user) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { onRouteChange } = this.props;

    return (
      <div>
        <div>Name</div>
        <input type='text' onChange={this.onNameChange} />
        <div>Email</div>
        <input type='email' onChange={this.onEmailChange} />
        <div>Password</div>
        <div>
          <input type='password' onChange={this.onPasswordChange} />
        </div>
        <Button variant='primary' onClick={this.onSubmitRegister}>
          Create an account
        </Button>

        <div>Already registered?</div>
        <Button
          variant='primary'
          to='./LogIn.js'
          onClick={() => onRouteChange("signed-out")}
        >
          Log in
        </Button>
      </div>
    );
  }
}

export default Register;
