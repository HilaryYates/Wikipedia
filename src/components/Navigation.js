import React from "react";

const Navigation = ({ onRouteChange }) => {
  return (
    <div>
      <p onClick={() => onRouteChange("signed-out")}>Sign Out</p>
    </div>
  );
};

export default Navigation;
