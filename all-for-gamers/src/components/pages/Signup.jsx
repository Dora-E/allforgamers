import React, { Component } from "react";
import AuthContext from "../auth/AuthContext";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { apiHandler } from "../../handler/handler";
const handler = apiHandler();
export default class Signup extends Component {
  state = {
    first_name: "Marcel",
    last_name: "dupont",
    email: "marcel.dupont@gmail.com",
    password: "123456",
  };
  // la classe Signup est désormais 'abonnée' au AuthProvider, il consome les infos du provider
  static contextType = AuthContext;
  fileInput = React.createRef();
  // on créé une référence ici, utilisée sur le l'input file plus bas
  // https://fr.reactjs.org/docs/uncontrolled-components.html#the-file-input-tag
  handleInput = (evt) => this.setState({ [evt.target.name]: evt.target.value });
  handleSubmit = async (evt) => {
    evt.preventDefault();

    const { first_name, last_name, email, password } = this.state;
    const avatar = this.fileInput.current.files[0]; // on récupère la valeur de l'input file référencé
    const fd = new FormData(); // formData est obligatoire pour envoyer des files (ex: avatar) vers le backend
    // check la doc : https://developer.mozilla.org/fr/docs/Web/API/FormData

    fd.append("first_name", first_name); // on ajoute des clé valeurs dans l'objet fd
    fd.append("last_name", last_name);
    fd.append("email", email);
    fd.append("password", password);

    if (avatar) fd.append("avatar", avatar);
    await handler.post("/signup", {
      first_name,
      last_name,
      email,
      password,
    });
    this.context.signup(fd, () => {
      // pousse les donnée dans signin de authprovider
      this.props.history.push("/profile");
    });
  };

  render() {
    return (
      <div>
        <form
          className="form"
          onSubmit={this.handleSubmit}
          onChange={this.handleInput}
        >
          <h1 className="title">Signup</h1>
          <label htmlFor="first_name" className="label">
            first name
          </label>
          <input
            id="first_name"
            name="first_name"
            type="text"
            className="input"
            defaultValue={this.state.first_name}
            autoComplete="given-name"
          />
          <label htmlFor="last_name" className="label">
            last name
          </label>
          <input
            id="last_name"
            name="last_name"
            type="text"
            className="input"
            defaultValue={this.state.last_name}
            autoComplete="family-name"
          />
          <label htmlFor="email" className="label">
            email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="input"
            defaultValue={this.state.email}
            autoComplete="email"
          />
          <label htmlFor="password" className="label">
            password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="input"
            defaultValue={this.state.password}
            autoComplete="current-password"
          />
          <label htmlFor="avatar" className="label">
            <FontAwesomeIcon icon={faUser} />
          </label>
          <input
            id="avatar"
            name="avatar"
            type="file"
            className="is-hidden"
            ref={this.fileInput} // la référence créé dans la classe est associée à cet input file
          />
          <Link to="/profile">
            <button className="btn">ok</button>
          </Link>
          <hr />
          <p>
            Already have an account ? please{" "}
            <Link className="link" to="/signin">
              sign in
            </Link>
          </p>
        </form>
      </div>
    );
  }
}
