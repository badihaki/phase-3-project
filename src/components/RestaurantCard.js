import React, {useState} from "react";
import ForeHireDropDown from "./ForHireDropdown";

function RestaurantCard({ restaurant, bartenders, forHireList }){
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
            <p>
                Hire more bartenders: <br />
                <ForeHireDropDown forHireList={forHireList} />
            </p>
        </div>
    )
}

export default RestaurantCard;