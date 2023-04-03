import React from "react";

function Items(props) {


    


    return (
        <>

            <li id={props.id}>
                <input type="checkbox" onChange={() => {
                    props.delete(props.id)
                }} />

                {props.list}
            </li>
        </>
    );
}

export default Items;
