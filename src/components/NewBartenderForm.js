import React, { useState } from "react";

function NewBartenderForm(){
    const [bartenderForm, setBartenderForm] = useState(
        {
            "name": "",
            "handle": "",
            "restaurant_id":null
        }
    )
    
    return(
        <div>
            <p>Add a new bartender to the registry using the form provided below.</p>
            <br/>
            <form>
                <input type={"text"} name={"name"} placeholder={"Bartender Name"} value={bartenderForm.name} />
                <input type={"text"} name={"handle"} placeholder={"Nickname"} value={bartenderForm.handle} />
                <br />
                <button type='submit'>Create new Bartender</button>
            </form>
        </div>
    )
}

export default NewBartenderForm;