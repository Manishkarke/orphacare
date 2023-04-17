import React from "react";
import { createPortal } from "react-dom";
import "./OverlayModel.css";

function OverlayModel({ children, closeModal }) {
  return createPortal(
    <>
      <div className="backdrop" onClick={() => closeModal(false)}>
        {" "}
      </div>
      <div className="modal">
        <div className="modal-content">{children}</div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default OverlayModel;
