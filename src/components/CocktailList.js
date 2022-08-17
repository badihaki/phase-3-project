import React from "react";
import CocktailCard from "./CocktailCard";

function CocktailList( { cocktails, bartenders, restaurants } ){
    const cocktailCards = cocktails.map(drink=>{
        const bartender = bartenders.filter(person=>{
            return drink.bartender_id === person.id;
        })
        const restaurant = restaurants.filter(location=>{
            //debugger;
            return location.id === bartender[0].restaurant_id;
        })
        return <CocktailCard key={drink.id} cocktail={drink} bartender={bartender[0]} restaurant={restaurant[0]} />;
    })

    return(
        <div>
            <h1>Cocktail List</h1>
            <br />
            {cocktailCards}
            Cocktails
        </div>
    )
}

export default CocktailList;