import React from "react";
import BartenderCard from "./BartenderCard";

function BartenderList( { bartenders, restaurants, cocktails } ){
    
    const bartenderCards = bartenders.map((bartender)=>{
        const restaurant = restaurants.find(place=>{
            return place.id === bartender.restaurant_id;
        })
        const bartenderCocktails = cocktails.filter(cocktail=>{
            return cocktail.bartender_id === bartender.id
        })
        return (
        <BartenderCard key={bartender.id} bartender={bartender} restaurant={restaurant} cocktails={bartenderCocktails} />
        )
    })
    
    return(
        <div>
            <h1>Bartenders List</h1>
            {bartenderCards}
        </div>
    )
}

export default BartenderList;