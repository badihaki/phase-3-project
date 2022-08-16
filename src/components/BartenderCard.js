import React from "react";
import RestaurantCard from "./RestaurantCard";

function BartenderCard({ bartender, restaurant, cocktails }){
    return(
        <div>
            <h1>{bartender.name}</h1>
            <h3>See me at {restaurant.name}!</h3>
        </div>
    )
}

export default BartenderCard;