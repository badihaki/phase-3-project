import logo from '../logo.svg';
import '../App.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import NavigationBar from './NavigationBar';
import Home from './Home';
import RestaurantList from './RestaurantList';
import BartenderList from './BartenderList';
import CocktailList from './CocktailList';


function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path={'/'}>
          <Home />
        </Route>
        <Route path={'/restaurants'}>
          <RestaurantList />
        </Route>
        <Route path={'/bartenders'}>
          <BartenderList />
        </Route>
        <Route path={'/cocktails'}>
          <CocktailList />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
