import React from "react";

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
    //comment
    event.preventDefault();
    fetch("http://localhost:3000/signin", {
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
      });
  };
  render() {
    const { onRouteChange } = this.props;
    return (
      <div>
        <form>
          <div>Sign In</div>
          <div>Email</div>
          <input type='email' onChange={this.onEmailChange} />
          <div>Password</div>
          <input type='password' onChange={this.onPasswordChange} />
          <input onClick={this.onSubmitSignIn} type='submit' />
        </form>
        <button onClick={() => onRouteChange("register")}>Register</button>
      </div>
    );
  }
}

export default SignIn;
