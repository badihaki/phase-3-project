import React, {useState} from "react";

function ForeHireDropDown( { restaurant, forHireList, updateBartender }){
    const [optionSelect, setOptionSelect] = useState(0);
    const bartendersOptions = forHireList.map(bartender=>{
        return(
            <option value={bartender.id} key={bartender.id} >{bartender.name}</option>
        )
    })
    
    function handleChange(e){
        const optionChange = e.target.value;
        setOptionSelect(optionChange);
    }

    function handleSubmit(e){
        e.preventDefault();
        if(optionSelect != 0 ){
            const selectedBartender = forHireList.find(bartender=>bartender.id === parseInt(optionSelect))
            const updatedBartender = {...selectedBartender, restaurant_id:restaurant.id};
            console.log('sending the data below for PATCHing:');
            console.log(updatedBartender);
            updateBartender(updatedBartender);            
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <select name="forHire" id="forHire" onChange={handleChange}>
                <option value={0}>Bartenders</option>
                {bartendersOptions}
            </select>
            <button type={"submit"}>Hire</button>
        </form>
    )
}

export default ForeHireDropDown;