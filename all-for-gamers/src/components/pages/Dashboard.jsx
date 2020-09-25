import React, { Component } from "react";

import CreateGames from "../formulaire/CreateGames";
import AuthContext from "../auth/AuthContext";
import { apiHandler } from "../../handler/handler";
const handler = apiHandler();
export default class Dashboard extends Component {
  state = {
    users: [],
  };

  static contextType = AuthContext;

  async componentDidMount() {
    this.getUsers();
  }
  // recup tabelau d'user et qd supprime un reloed la page sans refresh
  getUsers = async () => {
    try {
      const users = await handler.get("/users/");
      this.setState({ users: users.data });
    } catch (err) {
      console.error(err);
    }
  };

  deleteOne = async (id) => {
    try {
      const result = await handler.delete("/users/" + id);
      this.getUsers();
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      Boolean(this.context.currentUser) && (
        <div>
          <h1 className="title"> Dashboard</h1>

          {Boolean(this.context.currentUser.role === "admin") && (
            <div>
              <CreateGames />
              <p>Hello {this.context.currentUser.first_name} !!</p>
              <h2 className="title1"> Gestion user</h2>

              <table className="table">
                <thead>
                  <tr>
                    <th className="cell">Prenom</th>
                    <th className="cell">Nom</th>
                    <th className="cell">E-mail</th>
                    <th className="cell">Favoris</th>
                    <th className="cell">Avatar</th>
                    <th className="cell">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.users.map((v, i) => {
                    return (
                      <tr key={i}>
                        <td className="cell">{v.name} </td>
                        <td className="cell">{v.last_name} </td>
                        <td className="cell">{v.email}</td>

                        <td className="cell">
                          {" "}
                          {v.favoris.map((favori, i) => {
                            console.log("88888888", favori, v.avatar);
                            return <p key={i}>{favori.name}</p>;
                          })}
                          ;
                        </td>
                        <td className="cell">
                          <img className="avatar" src={v.avatar} alt="" />
                        </td>
                        <td className="cell">
                          <button onClick={() => this.deleteOne(v._id)}>
                            X
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )
    );
  }
}
