import React, { Component } from "react";
// import AuthContext from "../auth/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import { apiHandler } from "../../handler/handler";
//\faHeart \faThumbsDow \faThumbsUp
// const handler = apiHandler();

export default class Favoris extends Component {
  // state = {
  //  favoris:"",
  // };
  // static contextType = AuthContext;
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }
  render() {
    return (
      <FontAwesomeIcon
        className="fav"
        color="black"
        size="3x"
        icon={faHeart}
        onClick={this.handleClick}
      />
    );
  }
}
