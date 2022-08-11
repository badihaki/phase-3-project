import React from "react";
import { NavLink } from "react-router-dom";

function NavigationBar(){
    return(
        <div className="navigation">
            <NavLink to={"/"}>
                Home
            </NavLink>
            <NavLink to={"/restaurants"}>
                Restaurants
            </NavLink>
            <NavLink to={"/bartenders"}>
                Bartenders
            </NavLink>
            <NavLink to={"/cocktails"}>
                Cocktails
            </NavLink>
        </div>
    )
}

export default NavigationBar;