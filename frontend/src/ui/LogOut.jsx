import React from "react";
import "./LogOut.css";
import { removeAccessTokenFromLocalStorage } from "../utils/localStorage";
function LogOut({ closeModal }) {
  const cancelLogOut = () => {
    closeModal(false);
  };

  const confirmLogOut = () => {
    removeAccessTokenFromLocalStorage();
    window.location.href = "/";
  };
  return (
    <div className="card-logout">
      <h2>Log Out</h2>
      <p className="message">Are you sure you want to logout?</p>
      <div>
        <button className="btn disagree" onClick={cancelLogOut}>
          Cancel
        </button>
        <button className="btn agree" onClick={confirmLogOut}>
          Confirm
        </button>
        {/* <button className='btn cancel'>Cancel</button> */}
        {/* <button className='btn confirm'>Yes</button> */}
      </div>
    </div>
  );
}

export default LogOut;
