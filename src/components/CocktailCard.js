import React from "react";

function CocktailCard({ cocktail, bartender, restaurant }){
    return(
        <div>
            <h1>{cocktail.name}</h1>
            <p>{cocktail.description}</p>
            <p>Have one made by <span style={{fontWeight:'bold'}}>{bartender.name}</span> at <span style={{fontWeight:'bold'}}>{restaurant.name}</span>!!</p>
        </div>
    )
}

export default CocktailCard;