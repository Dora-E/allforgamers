import React, { Component } from "react";

import axios from "axios";

export default class Profile extends Component {
  state = {
    users: [],
  };
  async componentDidMount() {
    const users = await axios.get("http://localhost:8000/users");
    console.log(users);
    this.setState({ users: users.data });
  }
  render() {
    return (
      <div>
        {this.state.users.map((v, i) => {
          return (
            <div className="users" key={i}>
              {v.name} -{v.last_name} - {v.email} -
              <img className="imgGames" src={v.avatar} alt="" />
              {v.favoris.map((favori, i) => {
                console.log("88888888", favori, v.avatar);
                return <p key={i}>{favori.name}</p>;
              })}
            </div>
          );
        })}
      </div>
    );
  }
}
