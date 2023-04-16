import React from "react";
import "./OverlayModel.css";

function OverlayModel({ children, closeModal }) {
  return (
    <>
      <div className="backdrop" onClick={() => closeModal(false)}>
        {" "}
      </div>
      <div className="modal">
        <div className="modal-content">{children}</div>
      </div>
    </>
  );
}

export default OverlayModel;
