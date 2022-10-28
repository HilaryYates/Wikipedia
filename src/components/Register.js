import React from "react";

const Register = () => {
  return (
    <div>
      <form>
        <div>Register</div>
        <div>Name</div>
        <input type='text' />
        <div>Email</div>
        <input type='email' />
        <div type='password'>Password</div>
        <input type='password' />
        <input type='submit' />
      </form>
    </div>
  );
};

export default Register;
