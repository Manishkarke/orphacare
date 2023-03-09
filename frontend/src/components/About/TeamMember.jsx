import React from "react";
import classes from "./AboutUs.module.css";

function TeamMember({ photoPath, name, post }) {
  return (
    <div className={classes["team-member"]}>
      <img src={photoPath} alt='' />
      <h3>{name}</h3>
      <p>{post}</p>
    </div>
  );
}

export default TeamMember;
