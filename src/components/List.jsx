import React, { useState } from "react";
import Items from "./Delete";
import Input from "./Input";
import Button from "./Button";

// State to handle the list items...
function List() {
  //Change input-value handel...
  const [input, setinput] = useState("");
  // State for Handling the list array...
  const [item, setitems] = useState(["Web-Development","Machine-Learing","Android-Development",]);

  //  function for input handling...
  function handelInput(event) {
    const itemref = event.target.value;
    setinput(itemref);
  }


  // ADD button handle....
  function handelButton() {
    setitems([...item, input]);
    setinput("");
  }

  // delete button handle...
  function deletechange(id) {
    setitems((pre) => {
      return pre.filter((item, index) => {
        return index !== id
      })
    })

  }
  // Returing the value to the UI....
  return (
    <>
      <div className="form">
        <Input handleinput={handelInput} value={input} />
        <Button handelButton={handelButton} />
      </div>
{/* List item */}
      <ul>
        {item.map((items, index) => {
          return <Items
            key={index}
            id={index}
            delete={deletechange}
            list={items} />;
        })}
      </ul>
    </>
  );
}
export default List;
