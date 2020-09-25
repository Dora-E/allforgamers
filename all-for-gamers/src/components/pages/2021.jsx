import React, { Component } from "react";

import moment from "moment";
import { Link } from "react-router-dom";
import { apiHandler } from "../../handler/handler";
const handler = apiHandler();
// import { useLocation } from "react-router-dom";
export default class Annee1 extends Component {
  state = {
    games: [],
    filteredGames: [],
    // month: [
    //   "janvier",
    //   "fevrier",
    //   "mars",
    //   "avril",
    //   "mai",
    //   "juin",
    //   "juillet",
    //   "septembre",
    //   "octobre",
    //   "novembre",
    //   "decembre",
    // ],
    year: [2020, 2021],
  };
  async componentDidMount() {
    const games = await handler.get("/games");
    this.setState({ games: games.data }, this.getGameByYearAndMonth);
  }

  getGameByYearAndMonth() {
    const games = this.state.games;
    // let locateGame = useLocation(); {locateGame.pathname}
    var tab = []; // creation d'un nouveau tableau
    if (games.length !== 0) {
      tab = games.filter((game, i) => {
        let year = moment(game.date).format("YYYY"); //recupere lanne de la date du jeu
        // let month = moment(game.date).format("MM"); //recup le mois de la date du jeu
        if (year === "2021") return game; // return en fonction de la date
      });

      this.setState({ filteredGames: tab });
    }
  }
  render() {
    return (
      <div>
        {this.state.filteredGames.map((g, i, arr) => {
          return (
            <div className="games" key={i}>
              <Link className="lienGame" to={`/games/${g._id}`}>
                {g.name}
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}
