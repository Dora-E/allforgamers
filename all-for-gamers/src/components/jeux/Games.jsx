import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import Favoris from "./Favoris";

// import { useLocation } from "react-router-dom";
// import { Player } from "video-react";
// import Video from "react-native-video";
export default class Games extends Component {
  state = {
    game: null,
    commentaires: "",
  };
  // static contextType = AuthContext;
  // commentaireInput = React.createRef();
  async componentDidMount() {
    // const route = useLocation();
    console.log(this.props.match.params.id);
    try {
      const game = await axios.get(
        "http://localhost:8000/games/" + this.props.match.params.id
      );
      console.log(game);
      this.setState({ game: game.data });
    } catch (err) {
      console.error(err);
    }
  }

  // handleSubmit = async (evt) => {
  //   evt.preventDefault();
  //   const { commentaires } = this.state;
  //   console.log(commentaires);
  //   const comments = this.commentaireInput.current.files[0];
  //   const fd = new FormData();
  //   fd.append("commentaires", commentaires);
  //   this.context.signin(fd, () => {
  //     // pousse les donnée dans signin de authprovider
  //     this.props.history.push("/isSignedIn");
  //   });
  // };

  render() {
    const { game: g } = this.state;
    //recup jeu et affiche data

    return (
      g && (
        <div className="container-games">
          <h2 className="title1"> {g.name} </h2>

          <p className="desc">{g.description}</p>
          <ul className="games-infos">
            <li> Editeur {g.creator}</li>
            {/* <li>{game.date}</li> */}
            <li> Date de sortie :{moment(g.date).format("DD MMM YYYY")}</li>
            <li> Categorie :{g.categories}</li>
            <li> Video :{g.video}</li>
            <li>
              <Favoris />
            </li>
            <div className="grid-container">
              {g.images.map((image, i) => (
                <img className="imgGames" key={i} src={image} alt="" />
              ))}
            </div>
            {/* <Video source={game.video} /> */}
            {/* <Player>
            <source src={game.video} />
          </Player> */}
          </ul>
        </div>
      )
    );
  }
}
