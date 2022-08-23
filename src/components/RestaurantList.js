import React from "react";
import RestaurantCard from "./RestaurantCard";

function RestaurantList( { restaurants, bartenders, updateBartender } ){
        const restaurantCards = restaurants.map( (restaurant)=>{
            const bartendersOnStaff = bartenders.filter((bartender)=>{
                return bartender.restaurant_id === restaurant.id;
            })
            const bartendersForHire = bartenders.filter(bartender=>{
                return bartender.restaurant_id === null;
            })
            return(
                <div key={restaurant.id}>
                    <RestaurantCard restaurant={restaurant} bartenders={bartendersOnStaff} forHireList={bartendersForHire} updateBartender={updateBartender} />
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