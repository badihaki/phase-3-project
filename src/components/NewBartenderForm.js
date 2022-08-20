import React, { useState } from "react";

function NewBartenderForm( { postNewBartender } ){
    const [bartenderForm, setBartenderForm] = useState(
        {
            "name": "",
            "handle": "",
            "restaurant_id":null
        }
    )
    
    function handleChangeEvent(event){
        const key = event.target.name;
        const value = event.target.value;
        const formChange = {...bartenderForm};
        formChange[key] = value;
        setBartenderForm(formChange);
    }
    
    function handleSubmit(e){
        e.preventDefault();
        postNewBartender(bartenderForm);
        clearForm();
    }
    function clearForm(){
        const form = {
            "name": "",
            "handle": "",
            "restaurant_id":null
        }
        setBartenderForm(form);
    }

    return(
        <div>
            <p>Add a new bartender to the registry using the form provided below.</p>
            <br/>
            <form onSubmit={handleSubmit}>
                <span>
                    <text>Name: </text>
                    <input type={"text"} name={"name"} placeholder={"Bartender Name"} value={bartenderForm.name} onChange={handleChangeEvent} />
                </span>
                <span>
                    <text> Handle/Nickname: </text>
                    <input type={"text"} name={"handle"} placeholder={"Nickname"} value={bartenderForm.handle} onChange={handleChangeEvent} />
                </span>
                <br />
                <button type='submit'>Create new Bartender</button>
            </form>
        </div>
    )
}

export default NewBartenderForm;