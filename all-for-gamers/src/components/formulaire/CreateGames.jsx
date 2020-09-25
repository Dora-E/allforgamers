import React, { Component } from "react";
import axios from "axios";
export default class CreateGames extends Component {
  state = {
    games: [],
  };
  change = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  submit = async (evt) => {
    evt.preventDefault();
    await axios.post("http://localhost:8000/games", this.state);
  };
  render() {
    return (
      <form className="form" onChange={this.change} onSubmit={this.submit}>
        <h1 className="title">Nouveau Jeu</h1>

        <label htmlFor="name" className="label">
          name
        </label>
        <input id="name" name="name" type="text" className="input" />

        <label htmlFor="creator" className="label">
          creator
        </label>
        <input id="creator" name="creator" type="text" className="input" />

        <label htmlFor="date" className="label">
          Date
        </label>
        <input id="date" name="date" type="date" className="input" />

        <label htmlFor="url" className="label">
          Video
        </label>
        <input
          type="url"
          name="url"
          id="url"
          placeholder="https://example.com"
          pattern="https://.*"
          size="30"
          required
        ></input>

        <label htmlFor="images" className="label">
          Images
        </label>
        <input id="images" name="images" type="files" className="input" />

        <button className="btn" type="submit">
          create !!!
        </button>
      </form>
    );
  }
}
