import React, { Component } from "react";

import CreateGames from "../formulaire/CreateGames";
import AuthContext from "../auth/AuthContext";
import moment from "moment";
import { apiHandler } from "../../handler/handler";
const handler = apiHandler();
export default class Dashboard extends Component {
  state = {
    users: [],
    games: [
      // (name = ""),
      // (creator = ""),
      // (date = Date),
      // (description = ""),
      // (video = ""),
      // (image = ""),
      // (categories = ""),
    ],
  };

  static contextType = AuthContext;

  async componentDidMount() {
    this.getUsers();
    this.getGames();
  }
  // recup tabelau d'user et qd supprime un reload la page sans refresh
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

  getGames = async () => {
    try {
      const games = await handler.get("/games/");
      this.setState({ games: games.data });
    } catch (err) {
      console.error(err);
    }
  };
  deleteOne = async (id) => {
    try {
      const deleteGame = await handler.delete("/games/" + id);
      this.getGames();
      console.log(deleteGame);
    } catch (err) {
      console.error(err);
    }
  };
  // updateGame =async(evt)=> {
  //   evt.preventDefault();
  //   const {name,creator,date,description,video,image,categories}=this.state;
  // const fd = new FormData();
  //   try{
  //     const games = await handler.patch(
  //       "/games/" + this.context.currentGame._id,
  //       {
  //         fd.append("name",name || this.context.currentGame.name),
  //   fd.append("creator",creator || this.context.currentGame.creator),
  //   fd.append("date" , date || this.context.currentGame.date),
  //   fd.append("description", description || this.context.currentGame.description),
  //   fd.append("video" , video || this.context.currentGame.video),
  //   fd.append("image" , image || this.context.currentGame.image),
  //   fd.append("categories" , categories || this.context.currentGame.categories)
  //       }
  //     )
  //   catch(err) {
  //     console.error(err);
  //   }

  // }

  render() {
    return (
      Boolean(this.context.currentUser) && (
        <div>
          <h1 className="title"> Dashboard</h1>

          {Boolean(this.context.currentUser.role === "admin") && (
            <div>
              <CreateGames />
              <p>Hello {this.context.currentUser.first_name} !!</p>
              <h2 className="title1">Gestion des Jeux</h2>
              <table className="table">
                <thead>
                  <tr>
                    <th className="cell">Nom</th>
                    <th className="cell">Creator</th>
                    <th className="cell">Date</th>
                    {/* <th className="cell">Images</th> */}
                    {/* <th className="cell">Vidéo</th> */}
                    <th className="cell">Delete</th>
                    <th className="cell">Update</th>
                  </tr>
                </thead>
                {this.state.games.map((g, i) => {
                  return (
                    <tr key={i}>
                      <td className="cell">{g.name} </td>
                      <td className="cell">{g.creator} </td>
                      <td className="cell">
                        {moment(g.date).format("DD MMM YYYY")}{" "}
                      </td>
                      {/* 
                      <td className="cell">
                        {" "}
                        {g.images.map((image, i) => {
                          console.log("88888888", image);
                          return <p key={i}>{image}</p>;
                        })}
                        ;
                      </td> */}
                      {/* <td className="cell">
                        <img className="avatar" src={g.video} alt="" />
                      </td> */}
                      <td className="cell">
                        <button onClick={() => this.deleteOne(g._id)}>X</button>
                      </td>
                      <td className="cell">
                        <button onClick={() => this.update(g._id)}>
                          Update
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </table>

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
