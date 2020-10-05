import React, { Component } from "react";
import { apiHandler } from "../../handler/handler";
import AuthContext from "../auth/AuthContext";

const handler = apiHandler();

export default class Profile extends Component {
  state = {
    isEditMode: false,
    first_name: "",
    last_name: "",
    email: "",
    avatar: "",
    favoris: "",
  };

  static contextType = AuthContext;

  // componentDidMount = () => {
  //   console.log("CURRENT USER CONTEXT : ", this.context.currentUser);
  // };

  fileInput = React.createRef();

  handleChange = (evt) =>
    this.setState({ [evt.target.name]: evt.target.value });

  updateUser = async (evt) => {
    evt.preventDefault();
    const { first_name, last_name, email, avatar, favoris } = this.state;
    // const avatar = this.fileInput.current.files[0]; // on récupère la valeur de l'input file référencé
    const fd = new FormData();
    fd.append("first_name", first_name || this.context.currentUser.first_name); // on ajoute des clé valeurs dans l'objet fd
    fd.append("last_name", last_name || this.context.currentUser.last_name);
    fd.append("email", email || this.context.currentUser.email);
    fd.append("avatar", avatar || this.context.currentUser.avatar);
    fd.append("favoris", favoris || this.context.currentUser.favoris);

    // if (avatar) fd.append("avatar", avatar);

    try {
      const users = await handler.patch(
        "/users/" + this.context.currentUser._id,
        {
          //  prend la valeur du state (si modif) ou la valeur original provenant du authcontext
          first_name:
            this.state.first_name || this.context.currentUser.first_name,
          last_name: this.state.last_name || this.context.currentUser.last_name,
          email: this.state.email || this.context.currentUser.email,
          avatar: this.state.avatar || this.context.currentUser.avatar,
          favoris: this.state.favoris || this.context.currentUser.favoris,
        }
      );
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      Boolean(this.context.currentUser) && (
        <div>
          <form
            onChange={this.handleChange}
            onSubmit={this.updateUser}
            className="form"
          >
            <h2 className="title1">Profile</h2>
            <input
              type="text"
              name="first_name"
              defaultValue={this.context.currentUser.first_name}
              className="input"
            />
            <input
              type="text"
              name="last_name"
              defaultValue={this.context.currentUser.last_name}
              className="input"
            />
            <input
              type="text"
              name="email"
              defaultValue={this.context.currentUser.email}
              className="input"
            />
            <input
              id="avatar"
              name="avatar"
              type="file"
              className="is-hidden"
              ref={this.fileInput} // la référence créé dans la classe est associée à cet input file
            />

            <button className="btn">Update</button>
          </form>
          <img
            className="avatar"
            src={this.context.currentUser.avatar}
            alt=""
          />
          <h3>Liste des favoris</h3>
          <li className="fav">{this.context.currentUser.favoris}</li>
        </div>
      )
    );
  }
}
