import React from "react";
import { Switch, Route } from "react-router-dom";

import "./styles/App.css";
import Logo from "./components/Nav/Logo";

import CreateGames from "../src/components/formulaire/CreateGames";
import Navbar from "../src/components/Nav/NavBar";
import Home from "./components/pages/Home";
import Contact from "./components/footers/Contact";
import Annee from "./components/pages/2020";
import Annee1 from "./components/pages/2021";
import Login from "./components/pages/Login";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import Profile from "./components/pages/Profile";
import Dashboard from "./components/pages/Dashboard";
import Signup from "./components/pages/Signup";
import Games from "./components/jeux/Games";
import Commentaire from "./components/jeux/Commentaire";
// import Signout from "./components/pages/Signout";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />

        <Navbar />
      </header>{" "}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/2020" component={Annee} />
        <Route path="/2021" component={Annee1} />
        <Route path="/login" component={Login} />
        <Route path="/contact" component={Contact} />
        <Route path="/commentaires" component={Commentaire} />
        <Route path="/signup" component={Signup} />
        <Route path="/profile" component={Profile} />
        <Route path="/games/:id" component={Games} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <ProtectedRoute path="/create-games" component={CreateGames} />
        {/* <Route path="/dashboard" component={Dashboard} /> */}
        {/* <Route path="/signout" component={Signout} /> */}
      </Switch>
    </div>
  );
}

export default App;
