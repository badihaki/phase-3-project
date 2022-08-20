import React from "react";
import RestaurantCard from "./RestaurantCard";

function RestaurantList( { restaurants, bartenders } ){
    const restaurantCards = restaurants.map( (restaurant)=>{
        const bartendersOnStaff = bartenders.filter((bartender)=>{
            return bartender.restaurant_id === restaurant.id;
        })
        return(
            <div key={restaurant.id}>
                <RestaurantCard restaurant={restaurant} bartenders={bartendersOnStaff} />
                <br />
            </div>
        )
    })
    
    return(
        <div>
            <h1>Restaurants List</h1>
            <p>
                Below is a list of restaurants.
            </p>
            {restaurantCards}
        </div>
    )
}

export default RestaurantList;