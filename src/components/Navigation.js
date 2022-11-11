import React from "react";
import Button from "react-bootstrap/Button";

const Navigation = ({ onRouteChange }) => {
  return (
    <div>
      // route is not logged-in // option to route to register // option to
      route to login // route is logged-in? option to sign out
      <Button variant='primary' onClick={() => onRouteChange("signed-out")}>
        Sign Out
      </Button>
      {/* <button onClick={() => onRouteChange("signed-out")}>Sign Out</button> */}
    </div>
  );
};

export default Navigation;
