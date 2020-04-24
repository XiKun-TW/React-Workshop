import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AddUserInfoPage from "./pages/addUser/index";
import UserListPage from "./pages/showUsers/index";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <header className="app-header">Kun Xi's React Demo</header>
      <main className="app-body">
        <Router>
          <Switch>
            <Route path="/show">
              <UserListPage />
            </Route>
            <Route path="/">
              <AddUserInfoPage />
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
};

export default App;
