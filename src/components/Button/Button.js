import React from "react";

function Button({handleClick, children }) {
  return (
    <button onClick={handleClick} type="button" className="btn btn-primary m-5">
      {children}
    </button>
  );
}

export default Button;
