import React, {useState} from "react";

function CocktailCardBase({ cocktail, bartender }){
    function Message(){
        // debugger;
        return(
            <p>Have one made by <span style={{fontWeight:'bold'}}>{bartender.name}</span></p>
        )
    }
    return(
        <div>
            <h1>{cocktail.name}</h1>
            <p>{cocktail.description}</p>
            <Message />
        </div>
    )
}

function CocktailUpdateForm({cocktail, updateCocktail, bartender}){
    const [cocktailForm, setForm] = useState({
        "id" : cocktail.id,
        "name" : cocktail.name,
        "description" : cocktail.description,
        "bartender_id" : bartender.id
    })

    function handleFormChange(e){
        const key = e.target.name;
        const value = e.target.value;
        const formChange = {...cocktailForm};
        formChange[key] = value;
        setForm(formChange);
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(cocktailForm);
        updateCocktail(cocktailForm);
        setForm(
            {
                "id" : cocktail.id,
                "name" : cocktail.name,
                "description" : cocktail.description,
                "bartender_id" : bartender.id
            }
        )
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <h4>Cocktail Name</h4>
            <input type={"text"} name={"name"} placeholder={cocktailForm.name} onChange={handleFormChange} />
            <h4>Description</h4>
            <input type={"text"} name={"description"} placeholder={cocktailForm.description} onChange={handleFormChange} />
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}

function CocktailCard({ cocktail, bartender, updateCocktail }){
    const [showUpdateForm, setShowUpdateForm] = useState(false);

    function handleButton(){
        const result = !showUpdateForm;
        setShowUpdateForm(result);
    }

    return(
        <div>
            {showUpdateForm? <CocktailUpdateForm cocktail={cocktail} bartender={bartender} updateCocktail={updateCocktail} /> : <CocktailCardBase cocktail={cocktail} bartender={bartender} /> }
            <button onClick={handleButton}>{showUpdateForm ? "Hide Form" : "Update Listing" }</button>
        </div>
    )
}

export default CocktailCard;