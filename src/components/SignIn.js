import React from "react";

const SignIn = ({ onRouteChange }) => {
  return (
    <div>
      <form>
        <div>Sign In</div>
        <div>Email</div>
        <input type='email' />
        <div>Password</div>
        <input type='password' />
        <input onClick={() => onRouteChange("home")} type='submit' />
      </form>
    </div>
  );
};

export default SignIn;
