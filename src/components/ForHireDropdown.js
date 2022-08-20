import React from "react";

function ForeHireDropDown( { restaurant, forHireList }){
    const bartendersOptions = forHireList.map(bartender=>{
        return(
            <option value={bartender.id} key={bartender.id} >{bartender.name}</option>
        )
    })
    
    return(
        <select name="forHire" id="forHire">
            {bartendersOptions}
        </select>
    )
}

export default ForeHireDropDown;