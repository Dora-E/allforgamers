import React, { Component } from "react";
import Commentaire from "./Commentaire";
import moment from "moment";
import Favoris from "./Favoris";
import ReactPlayer from "react-player";
import { apiHandler } from "../../handler/handler";

const handler = apiHandler();

export default class Games extends Component {
  state = {
    game: null,
    commentaires: "",
  };
  // static contextType = AuthContext;

  async componentDidMount() {
    // const route = useLocation();
    console.log(this.props.match.params.id);
    try {
      // recup les jeu dans le handler qui a comme url celle du back end http://localhost:8000
      const game = await handler.get("/games/" + this.props.match.params.id);
      console.log(game);
      this.setState({ game: game.data });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    //recup jeu et affiche data
    const { game: g } = this.state;

    return (
      g && (
        <div className="container-games">
          <h2 className="title1"> {g.name} </h2>

          <p className="desc">{g.description}</p>
          <ul className="games-infos">
            <li> Editeur {g.creator}</li>
            {/* le format de la date viens de moment .js jour mois année  */}
            <li> Date de sortie :{moment(g.date).format("DD MMM YYYY")}</li>
            <li> Categorie :{g.categories}</li>
            <div className="video">
              <ReactPlayer
                url={g.video}
                // config de video venant de youtube
                config={{ youtube: { playerVars: { showinfo: 1 } } }}
                controls
                width="1000px"
                height="540px"
              />
            </div>
            <li>
              <Favoris />
            </li>
            <div className="grid-container">
              {g.images.map((image, i) => (
                <img className="imgGames" key={i} src={image} alt="" />
              ))}
            </div>
          </ul>
          <div>
            <Commentaire />
          </div>
        </div>
      )
    );
  }
}
