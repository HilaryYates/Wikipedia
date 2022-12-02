import React from "react";

const Navigation = ({ onRouteChange, name }) => {
  const capitalizeName = (name) => {
    let lowerCaseInName = Array.from(name).slice(1);
    lowerCaseInName = lowerCaseInName.join("");
    const fullName = Array.from(name)[0].toUpperCase().concat(lowerCaseInName);
    return Array.from(fullName).join("");
  };
  return (
    <div>
      <p>Hello {capitalizeName(name)}!</p>
      <button onClick={() => onRouteChange("signed-out")}>Sign Out</button>
    </div>
  );
};

export default Navigation;
