import React from "react";

import { AddInfoPage } from './pages/AddInfo';
import { ShowInfoPage } from './pages/ShowInfo'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <header className="app-header">Kun Xi's React Demo</header>
      <main className="app-body">
        <Router>
          <Switch>
            <Route path="/add">
              <AddInfoPage />
            </Route>
            <Route path="/show">
              <ShowInfoPage/>
            </Route>
            <Route path="/">
              <AddInfoPage />
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
};

export default App;
