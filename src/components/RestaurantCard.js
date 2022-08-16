import React, {useState} from "react";

function RestaurantCard({ restaurant, bartenders }){
    const [showBartender, setShowBartender] = useState(true);

    const bartenderingStaff = bartenders.map( (bartender)=>{
        return(
            <li key={bartender.id}>{bartender.name}</li>
        )
    })
    
   function handleButtonClick(event){
    const toggle = !showBartender;
    setShowBartender(toggle);
   }

    return(
        <div>
            <h1>{restaurant.name}</h1>
            <h3>Find us @ {restaurant.city}</h3>
            <button onClick={handleButtonClick}>{showBartender? "Bartenders":"Hide Staff"}</button>
            <ul>
                {showBartender? "" : bartenderingStaff }
            </ul>            
        </div>
    )
}

export default RestaurantCard;