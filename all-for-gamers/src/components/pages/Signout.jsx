import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSlash } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../auth/AuthContext";
export default function Signout() {
  const AuthContextValue = useContext(AuthContext);

  const handleSignout = () => {
    AuthContextValue.signout();
  };
  return (
    <FontAwesomeIcon
      size="1x"
      color="RGB(255, 230, 185)"
      className="is-clickable"
      icon={faUserSlash}
      onClick={handleSignout}
    />
  );
}
