import React from "react";
import "./LogOut.css";
function LogOut() {
  return (
    <div className='card-logout'>
      <h2>Log Out</h2>
      <p className='message'>Are you sure you want to logout?</p>
      <div>
        <button className='btn cancel'>Cancel</button>
        <button className='btn confirm'>Yes</button>
      </div>
    </div>
  );
}

export default LogOut;
