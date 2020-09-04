import React from "react";
import { Switch, Route } from "react-router-dom";

import "./styles/App.css";
import Logo from "./components/header/Logo";
// import Nav from "./components/header/Nav";

import Navbar from "../src/components/Nav/NavBar";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Annee from "./components/pages/2020";
import Annee1 from "./components/pages/2021";
// import Login from "./components/Login.jsx";
import Novembre from "./components/Mois/Novembre.jsx";
import Profile from "./components/pages/Profile";
import Dashboard from "./components/pages/Dashboard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <h1 className="title">All For Gamer</h1>
        <Navbar />
      </header>{" "}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/2020" component={Annee} />
        <Route path="/2021" component={Annee1} />
        {/* <Route path="/login" component={Login} /> */}
        <Route path="/contact" component={Contact} />
        <Route path="/novembre" component={Novembre} />
        <Route path="/profile" component={Profile} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
