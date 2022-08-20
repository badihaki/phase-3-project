import React from "react";
import CocktailCard from "./CocktailCard";

function CocktailList( { cocktails, bartenders } ){
    const cocktailCards = cocktails.map(drink=>{
        const bartender = bartenders.filter(person=>{
            return drink.bartender_id === person.id;
        })
        return <CocktailCard key={drink.id} cocktail={drink} bartender={bartender[0]} />;
    })

    return(
        <div>
            <h1>Cocktail List</h1>
            <br />
            {cocktailCards}
        </div>
    )
}

export default CocktailList;