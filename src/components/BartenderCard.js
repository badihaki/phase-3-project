import React, {useState} from "react";

function BartenderCard({ bartender, restaurant, cocktails }){
    const hasRestaurant = ()=>{
        return bartender.restaurant_id !== null;
    }

    const cocktailListings = cocktails.map(cocktail=>{
        return(
            <li key={cocktail.id}>
                <span style={{fontWeight: 'bold'}}>{cocktail.name}</span>
                <br />
                {cocktail.description}
            </li>
        )
    })
    return(
        <div>
            {console.log(bartender)}
            <h1>{bartender.name}</h1>
            <h2>They call me "{bartender.handle}"</h2>
            <h3>{hasRestaurant? "I'm looking for work!!" : `See me at ${restaurant.name}` }!</h3>
            <p style={{fontWeight:'bold'}} >Created Cocktails</p>
            <ul>{cocktailListings}</ul>
        </div>
    )
}

export default BartenderCard;