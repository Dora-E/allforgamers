import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import { useLocation } from "react-router-dom";
export default class Novembre extends Component {
  state = {
    games: [],
    filteredGames: [],
    month: [
      "janvier",
      "fevrier",
      "mars",
      "avril",
      "mai",
      "juin",
      "juillet",
      "septembre",
      "octobre",
      "novembre",
      "decembre",
    ],
    year: [2020, 2021],
  };
  async componentDidMount() {
    const games = await axios.get("http://localhost:8000/games");
    this.setState({ games: games.data }, this.getGameByYearAndMonth);
  }

  getGameByYearAndMonth() {
    const games = this.state.games;
    // let locateGame = useLocation(); {locateGame.pathname}
    var tab = []; // creation d'un nouveau tableau
    if (games.length !== 0) {
      tab = games.filter((game, i) => {
        let year = moment(game.date).format("YYYY"); //recupere lanne de la date du jeu
        let month = moment(game.date).format("MM"); //recup le mois de la date du jeu
        if (year === "2021" && month === "01") return game; // return en fonction de la date
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
              {g.name} - {g.creator}- sortie le :
              {moment(g.date).format("MMM d, yyyy")}
              {}
              <img className="imgGames" src={g.images} alt="" />
            </div>
          );
        })}
      </div>
    );
  }
}
