import React, {useState} from "react";
import CocktailForm from "./CocktailForm";
import {NavLink} from "react-router-dom";

function BartenderCard({ bartender, restaurant, cocktails, postNewCocktail, destroyCocktail }){
    const hasRestaurant = ()=>{
        return restaurant !== undefined;
    }
    const [showCokctailForm, setShowCocktailForm] = useState(false);
    const cocktailListings = cocktails.map(cocktail=>{
    function handleDeleteButton(){
        console.log('deleting');
        console.log(cocktail);
        destroyCocktail(cocktail);
    }
        return(
            <li key={cocktail.id}>
                <span style={{fontWeight: 'bold'}}>{cocktail.name}</span>
                <br />
                {cocktail.description}
                <button onClick={handleDeleteButton}>Forget Cocktail</button>
            </li>
        )
    })
    

    function handleShowFormButton(){
        const result = !showCokctailForm;
        setShowCocktailForm(result);
    }

    // debugger;
    return(
        <div>
            <h1>{bartender.name}</h1>
            <h2>They call me "{bartender.handle}"</h2>
            <h3>{hasRestaurant() ? `See me at ${restaurant.name}` : "I'm looking for work!!" }!</h3>
            <p style={{fontWeight:'bold'}} >Created Cocktails</p>
            <ul>{cocktailListings}</ul>
            <button onClick={handleShowFormButton}>{showCokctailForm ? "Hide Form" : "Add New Cocktail"}</button>
            {showCokctailForm? <CocktailForm bartender={bartender} postNewCocktail={postNewCocktail} /> : "" }
        </div>
    )
}

export default BartenderCard;