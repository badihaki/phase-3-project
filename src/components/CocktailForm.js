import React, {useState} from "react";

function CocktailForm({ bartender, postNewCocktail }){
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
    function handleSubmit(e){
        e.preventDefault();
        postNewCocktail(newCocktilForm);
        clearForm();
    }
    function clearForm(){
        const form = {
            "name":"",
            "description":"",
            "bartender_id":bartender.id
        }
        setNewCocktailForm(form);
    }

    return(
        <form onSubmit={handleSubmit}>
            <h4>Give the cocktail a name</h4>
            <input type={"text"} name={"name"} placeholder={"Cocktail Name"} onChange={handleFormChange} />
            <h4>And give it a description (ingredients, etc)</h4>
            <input type={"text"} name={"description"} placeholder={"Cocktail Description"} onChange={handleFormChange} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default CocktailForm;