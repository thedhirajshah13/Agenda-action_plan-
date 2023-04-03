import React from "react";

function Input(props){
return <>
    <input onChange={props.handleinput}  type="text" name="list" value={props.value} />
</>

}
export default Input