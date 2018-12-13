import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/home";
import Chat from "./pages/chat";
import Login from "./pages/login";
import Register from "./pages/register";
import Profile from "./pages/profile";
import Header from "./pages/header";
import Logout from './pages/logout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="chatter">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/chat" component={Chat} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
          <Route path="/logout" component={Logout} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
