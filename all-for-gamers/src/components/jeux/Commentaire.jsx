import React, { Component } from "react";
import { apiHandler } from "../../handler/handler";
import AuthContext from "../auth/AuthContext";

const handler = apiHandler();
export default class Commentaire extends Component {
  state = {
    commentaire: "",
  };
  static contextType = AuthContext;
  commentaire = React.createRef();
  handleSubmit = async (evt) => {
    evt.preventDefault();
    //state de commentaire est null au depart
    const { commentaires } = this.state;
    console.log(commentaires);
    // prend les commentaire de jeux en question grâce au forma data envoie en bdd
    const comments = this.state.current;
    const fd = new FormData();
    fd.append("commentaires", comments);
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const commentaire = this.state.commentaire;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Commentaires:
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Envoyer" />
        </form>
        <div>{commentaire}</div>
      </div>
    );
  }
}
