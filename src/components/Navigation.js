import React from "react";
import Button from "react-bootstrap/Button";

const Navigation = ({ onRouteChange }) => {
  return (
    <div>
      <Button
        variant='primary'
        to='./SignIn.js'
        onClick={() => onRouteChange("signed-out")}
      >
        Sign in
      </Button>
      <Button
        variant='primary'
        to='./Register.js'
        onClick={() => onRouteChange("signed-out")}
      >
        {" "}
        Sign up
      </Button>
      <Button variant='primary' onClick={() => onRouteChange("signed-out")}>
        Sign Out
      </Button>
    </div>
  );
};

export default Navigation;
