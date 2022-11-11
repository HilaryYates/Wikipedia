import React from "react";
import Button from "react-bootstrap/Button";
import "./SignIn.css";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { signInEmail: "", signInPassword: "" };
  }
  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value });
  };
  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value });
  };
  onSubmitSignIn = (event) => {
    event.preventDefault();
    fetch("https://localhost:3000/signin", {
      //https://ancient-eyrie-70341.herokuapp.com/signin
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        console.log(user.id, this.props.loadUser);
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      })
      .catch(console.log);
  };
  render() {
    const { onRouteChange } = this.props;
    return (
      <div>
        <div class='email-label'>Email address</div>
        <div class='email-container'>
          <input
            type='email'
            onChange={this.onEmailChange}
            class='email-input'
            placeholder='enter email'
          />
        </div>
        <div class='password-label'>Password</div>
        <div class='password-container'>
          <input
            type='password'
            onChange={this.onPasswordChange}
            placeholder='password'
          />
        </div>
        <input
          onClick={this.onSubmitSignIn}
          type='image'
          src='/public/btn.png'
          alt='Sign in'
        />
        <p>Log in or</p>
        <Button variant='primary' onClick={() => onRouteChange("register")}>
          Sign up
        </Button>
      </div>
    );
  }
}

export default SignIn;
