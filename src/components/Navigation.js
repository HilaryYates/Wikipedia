import React from "react";
import Button from "react-bootstrap/Button";

const Navigation = ({ onRouteChange }) => {
  return (
    <div>
      <Button variant='primary' onClick={() => onRouteChange("signed-out")}>
        Sign Out
      </Button>

      {/* <button onClick={() => onRouteChange("signed-out")}>Sign Out</button> */}
    </div>
  );
};

export default Navigation;
