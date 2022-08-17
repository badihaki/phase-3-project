import React, {useState} from "react";

function BartenderCard({ bartender, restaurant, cocktails }){
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
            <h1>{bartender.name}</h1>
            <h2>They call me "{bartender.handle}"</h2>
            <h3>See me at {restaurant.name}!</h3>
            <p style={{fontWeight:'bold'}} >Created Cocktails</p>
            <ul>{cocktailListings}</ul>
        </div>
    )
}

export default BartenderCard;