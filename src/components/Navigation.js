import React from "react";

const Navigation = ({ onRouteChange }) => {
  return (
    <div>
      <button onClick={() => onRouteChange("signed-out")}>Sign Out</button>
    </div>
  );
};

export default Navigation;
