import React from "react";
import BartenderCard from "./BartenderCard";
import NewBartenderForm from "./NewBartenderForm";

function BartenderList( { bartenders, restaurants, cocktails, postNewBartender, postNewCocktail, destroyCocktail } ){
    
    const bartenderCards = bartenders.map((bartender)=>{
        const restaurant = restaurants.find(place=>{
            return place.id === bartender.restaurant_id;
        })
        const bartenderCocktails = cocktails.filter(cocktail=>{
            return cocktail.bartender_id === bartender.id
        })
        return (
        <BartenderCard key={bartender.id} bartender={bartender} restaurant={restaurant} cocktails={bartenderCocktails} postNewCocktail={postNewCocktail} destroyCocktail={destroyCocktail} />
        )
    })
    
    return(
        <div>
            <h1>Bartenders</h1>
            <NewBartenderForm postNewBartender={postNewBartender} />
            <p>Below is the complete list of bartenders:</p>
            {bartenderCards}
        </div>
    )
}

export default BartenderList;