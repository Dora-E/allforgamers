import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

export default function ButtonDashboard() {
  return (
    <NavLink className="link" to="/dashboard">
      <FontAwesomeIcon
        size="1x"
        color="RGB(255, 230, 185)"
        className=" dashboard"
        icon={faAddressCard}
      />
    </NavLink>
  );
}
