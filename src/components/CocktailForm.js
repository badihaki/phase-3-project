import React from "react";

function CocktailForm({ bartender }){
    return(
        <form>
            <h3>Create a new cocktail</h3>
            <br />
            <input type={text} name={"name"} />
            <input type={text} name={"descripion"} />
        </form>
    )
}

export default CocktailForm;