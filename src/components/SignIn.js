import React from "react";
import Button from "react-bootstrap/Button";

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
        <div>Log in or</div>
        <div>Email</div>

        <input type='email' onChange={this.onEmailChange} />
        <div>Password</div>

        <input type='password' onChange={this.onPasswordChange} />
        <input
          onClick={this.onSubmitSignIn}
          type='image'
          src='/public/btn.png'
          alt='Sign in'
        />
        {/* <button onClick={() => onRouteChange("register")}>Register</button> */}
        <Button variant='primary' onClick={() => onRouteChange("register")}>
          Sign up
        </Button>
      </div>
    );
  }
}

export default SignIn;
