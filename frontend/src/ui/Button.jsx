import React from "react";
import "./Button.css";

function Button({ btnType, type, detail, btnFunction }) {
  return (
    <Button type={btnType} className={`btn ${type}`} onCLick={btnFunction}>
      {detail}
    </Button>
  );
}

export default Button;
