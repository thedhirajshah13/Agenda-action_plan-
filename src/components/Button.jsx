import React,{useState} from "react"

function Button(props){
    const [button, setbutton]=useState(false)
    function handelmouseover(){
        setbutton((pre)=>{
            return !pre
        })
        console.log("hello")
       
    }
    return<>
 <button onClick={props.handelButton} onMouseOver={handelmouseover} style={{background: button ? "red":"#f1f5f8"}}>
          <span>ADD</span>
        </button>
    </>
}
export default Button