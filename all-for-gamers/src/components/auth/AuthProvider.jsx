import React, { Component } from "react";
import { apiHandler } from "../../handler/handler";
import AuthContext from "./AuthContext";
const handler = apiHandler();
const tokenName = "authToken";

export default class AuthProvider extends Component {
  state = {
    currentUser: null,
    isSignedIn: false,
  };

  componentDidMount() {
    if (!this.state.currentUser && this.getLocalAuthToken()) {
      this.getUserByToken();
    }
  }
  //  recupere le token d'authentification dans le localStorage du client
  // return string | null si auth token est trouver sinon null

  getLocalAuthToken = () => window.localStorage.getItem(tokenName);

  getUserByToken = () => {
    handler
      .get("/get-user-by-token")
      .then(({ data }) => {
        this.setState({ currentUser: data, isSignedIn: true });
      })
      .catch((err) => {
        this.setState({ currentUser: null, isSignedIn: false });
        console.error(err.message);
      });
  };
  /**
   * Ecrit le token d'authentification dans le localStorage du client
   * @param {String} token un jeton JWT généré côté server (/auth/index.js)
   * @return {undefined}
   */
  setLocalAuthToken = (token) => window.localStorage.setItem(tokenName, token);
  /**
   * Supprime le token d'authentification dans le localStorage du client
   * @return {undefined}
   */

  deleteLocalAuthToken = () => window.localStorage.removeItem(tokenName);

  isAdmin = () => this.state.currentUser && this.state.currentUser === "admin";

  // Met à jour l'user courant dans le Contexte

  setCurrentUser = (infos, clbk) => {
    console.log("Infooooos : ", infos);
    //on met a jour le state du authprovider avc infos user mises a jour
    this.setState({ currentUser: infos }, () => {
      if (clbk) clbk();
    });
  };

  //Tente de signin côté server via AJAX,
  // créé le token d'authentification si succès
  // @return {undefined}

  signin = async (infos, clbk) => {
    const { email, password } = infos;
    try {
      const apiRes = await handler.post("/login", {
        email,
        password,
      });
      //si signin se passe bien
      this.setLocalAuthToken(apiRes.data.token);
      this.setCurrentUser(apiRes.data.user, clbk);
    } catch (err) {
      console.error(err.response.data);
    }
  };
  /**
   * Supprime le token d'authentification et détruit la session côté backend
   * @return {undefined}
   */

  signup = async (infos, clbk) => {
    try {
      await handler.post("/signup", infos);
      clbk();
    } catch (err) {
      // const method = err.response.status.toString().starWith("4")
      //   ? "warn"
      //   : "error";
      console.error(err);
    }
  };
  /**
   * Supprime le token d'authentification et détruit la session côté backend
   * @return {undefined}
   */
  signout = (clbk) => {
    this.deleteLocalAuthToken();
    this.setCurrentUser(null);
  };
  /**
   * Vérifie si l'user courant est authentifié en vérifiant la présence ou non du token dans localStorage
   * @return {Boolean} True if user is logged in, false otherwise
   */

  isSignedIn = function () {
    return Boolean(this.getLocalAuthToken());
  };

  render() {
    //  Setup all the values/functions you want to expose to anybody reading
    // from the AuthContext.
    // écrire ici les méthodes et propriétés que vous souhaitez rendre accessible depuis les Consumers du Context d'authentification
    const authValues = {
      currentUser: this.state.currentUser,
      setCurrentUser: this.setCurrentUser,
      signin: this.signin,
      signup: this.signup,
      signout: this.signout,
      isAdmin: this.isAdmin,
      isSignedIn: this.isSignedIn(),
    };

    return (
      <AuthContext.Provider value={authValues}>
        {" "}
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
