import React, {useState} from "react";

function CocktailForm({ bartender }){
    const [newCocktilForm, setNewCocktailForm] = useState({
        "name":"",
        "description":"",
        "bartender_id":bartender.id
    })

    function handleFormChange(event){
        const key = event.target.name;
        const value = event.target.value;
        const formChange = {...newCocktilForm};
        formChange[key] = value;
        setNewCocktailForm(formChange);
    }

    return(
        <form>
            <h3>Create a new cocktail</h3>
            <br />
            <h4>Give the cocktail a name</h4>
            <input type={"text"} name={"name"} placeholder={"Cocktail Name"} onChange={handleFormChange} />
            <br />
            <h4>And give it a description (ingredients, etc)</h4>
            <input type={"text"} name={"descripion"} placeholder={"Cocktail Description"} onChange={handleFormChange} />
        </form>
    )
}

export default CocktailForm;