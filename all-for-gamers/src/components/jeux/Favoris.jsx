import React, { Component } from "react";
import AuthContext from "../auth/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { apiHandler } from "../../handler/handler";
//\faHeart \faThumbsDow \faThumbsUp
const handler = apiHandler();

export default class Favoris extends Component {
  state = {
    users: [],
  };
  static contextType = AuthContext;
  async componentDidMount() {
    this.getFav();
    this.handleClick();
  }
  getFav = async () => {};
  handleClick = async () => {
    // this.setState((state) => ({
    //   isToggleOn: !state.isToggleOn,
    // }));
    try {
      const fav = await handler.get("/users/:id/favoris");
      this.setState({ favs: fav.data });
    } catch (err) {
      console.error(err);
    }
  };
  render() {
    return (
      <FontAwesomeIcon
        className="fav"
        color="black"
        size="3x"
        icon={faHeart}
        onClick={this.handleClick}
        cursor="pointer"
      />
    );
  }
}
