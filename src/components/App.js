import logo from '../logo.svg';
import '../App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import NavigationBar from './NavigationBar';
import Home from './Home';


function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Switch>
        <Route exact path={'/'}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
