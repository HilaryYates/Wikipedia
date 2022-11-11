import React from "react";
import Button from "react-bootstrap/Button";
import Register from "./Register";
import SignIn from "./Register";

const Navigation = ({ onRouteChange }) => {
  return (
    <div>
      {/* <Router>
        <Routes>
          <Route path='./SignIn.js' element={SignIn} />
          <Route path='./Register.js' element={Register} />
        </Routes>
      </Router>
      <div> */}
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
        Sign In
      </Button>
      <Button variant='primary' onClick={() => onRouteChange("signed-out")}>
        Sign Out
      </Button>
    </div>
  );
};

export default Navigation;
