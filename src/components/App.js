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
        console.log(data);
        setRestaurants(data);
      })},[])
  useEffect( ()=>{
    fetch(`${api}/bartenders`).then(r=>r.json()).then(
      (data)=>{
        console.log(data);
        setBartenders(data);
      })},[])
  useEffect( ()=>{
    fetch(`${api}/cocktails`).then(r=>r.json()).then(
      (data)=>{
        console.log(data);
        setCocktails(data);
      })},[])

    function postNewBartender(bartender){
      fetch(`${api}/bartenders`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bartender)
      }).then(r=>r.json).then(data=>{
        const newBartenderList = [...bartenders, bartender];
        setBartenders(newBartenderList);
      })
    }

    function updateBartender(bartender){
      fetch(`${api}/bartenders/${bartender.id}`,{
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bartender)
      }).then((r)=>r.json).then((data)=>{
        const newBartenderList = [...bartenders, bartender];
        setBartenders(newBartenderList);
      })
    }
    
    function postNewCocktail(cocktail){
      fetch(`${api}/cocktails`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(cocktail)
      }).then(r=>r.json).then(data=>{
        console.log(data);
        const newDrinksList = [...cocktails, cocktail];
        setCocktails(newDrinksList);
      })
    }
    function updateCocktail(cocktail){
      fetch(`${api}/cocktails/${cocktail.id}`,{
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(cocktail)
      }).then(r=>r.json).then(data=>{
        // const newCocktailList = [...cocktails, cocktail];
        const newCocktailList = [...cocktails];
        const updatedListing = newCocktailList.find((drink) => {
          return drink.id === cocktail.id
        })
        updatedListing.name = cocktail.name;
        updatedListing.description = cocktail.description;
        setCocktails(newCocktailList);
      })
    }

    function destroyCocktail(cocktail){
      fetch(`${api}/cocktails/${cocktail.id}`,{
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(cocktail)
      }).then(r=>r.json).then(data=>{
        const newDrinksList = cocktails.filter(drink=>{
          return drink.id !== cocktail.id;
        })
        setCocktails(newDrinksList);
      })
    }

  return (
    <div className="App">
      <NavigationBar />
      <Switch>
        <Route exact path={'/restaurants'}>
          <RestaurantList restaurants={restaurants} bartenders={bartenders} updateBartender={updateBartender} />
        </Route>
        <Route exact path={'/bartenders'}>
          <BartenderList bartenders={bartenders} restaurants={restaurants} cocktails={cocktails} postNewBartender={postNewBartender} postNewCocktail={postNewCocktail} destroyCocktail={destroyCocktail} />
        </Route>
        <Route exact path={'/cocktails'}>
          <CocktailList cocktails={cocktails} bartenders={bartenders} updateCocktail={updateCocktail} />
        </Route>
        <Route exact path={'/'}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
