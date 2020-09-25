import React, { Component } from "react";

import { Link } from "react-router-dom";
import AuthContext from "../auth/AuthContext";

export default class Login extends Component {
  state = {
    // définition de valeurs de base pour la phase de dev ("mettre à chaîne vide une fois dev ok")
    email: "marcel.dupont@gmail.com",
    password: "123456",
  };

  static contextType = AuthContext; // on associe le contexte d'authentification à la classe Signin (accessible via this.context)

  handleInput = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault(); //  no page refresh
    this.context.signin(this.state, () => {
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
          <label htmlFor="email" className="label">
            email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            defaultValue={this.state.email}
            required
          />
          <label htmlFor="password" className="label">
            password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            defaultValue={this.state.password}
            required
          />

          <button type="submit">Login</button>
          <p>
            No account yet ? please{" "}
            <Link className="link" to="/signup">
              sign up
            </Link>
            .
          </p>
        </form>
      </div>
    );
  }
}
