import React, { Component } from "react";

export default class Contact extends Component {
  state = {
    name: null,
    lastname: null,
    email: null,
    text: null,
  };

  render() {
    return (
      <div className="form">
        <h1 className="title">Contact Us</h1>
        <div className="row">
          <label htmlFor="">Name</label>
          <input type="text" />
        </div>
        <div className="row">
          <label htmlFor="">Lastname</label>
          <input type="text" />
        </div>
        <div className="row">
          <label htmlFor="msg">Message </label>
          <textarea id="msg" name="user_message"></textarea>
        </div>
        <div className="row">
          <label htmlFor="">Email</label>
          <input type="email" />
        </div>

        <button onClick={() => this.props.callback(this.state)}>Send</button>
      </div>
    );
  }
}
