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
  const api = "http://localhost:9292"
  
  const [restaurants, setRestaurants] = useState([]);
  const [bartenders, setBartenders] = useState([]);
  const [cocktails, setCocktails] = useState([]);

  useEffect( ()=>{
    fetch(`${api}/restaurants`).then(r=>r.json()).then(
      (data)=>{
        setRestaurants(data);
      })},[])
  useEffect( ()=>{
    fetch(`${api}/bartenders`).then(r=>r.json()).then(
      (data)=>{
        setBartenders(data);
      })},[])
  useEffect( ()=>{
    fetch(`${api}/cocktails`).then(r=>r.json()).then(
      (data)=>{
        setCocktails(data);
      })},[])

  return (
    <div className="App">
      <NavigationBar />
      <Switch>
        <Route exact path={'/restaurants'}>
          <RestaurantList restaurants={restaurants} bartenders={bartenders} />
        </Route>
        <Route exact path={'/bartenders'}>
          <BartenderList bartenders={bartenders} restaurants={restaurants} cocktails={cocktails} />
        </Route>
        <Route exact path={'/cocktails'}>
          <CocktailList cocktails={cocktails} bartenders={bartenders} restaurants={restaurants} />
        </Route>
        <Route exact path={'/'}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
