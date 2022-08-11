import logo from '../logo.svg';
import '../App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import NavigationBar from './NavigationBar';
import Home from './Home';
import RestaurantList from './RestaurantList';
import BartenderList from './BartenderList';
import CocktailList from './CocktailList';


function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Switch>
        <Route exact path={'/restaurants'}>
          <RestaurantList />
        </Route>
        <Route exact path={'/bartenders'}>
          <BartenderList />
        </Route>
        <Route exact path={'/cocktails'}>
          <CocktailList />
        </Route>
        <Route exact path={'/'}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
