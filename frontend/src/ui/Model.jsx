import React from "react";
function Model({ open, children }) {
  if (!open) return null;

  return ReactDOM.createPortal
  // return ReactDOM.createPortal(
  //   <>
  //     <div style={{ zIndex: 9999 }}>{children}</div>
  //   </>,
  //   document.getElementById("portal")
  // );
}

export default Model;
