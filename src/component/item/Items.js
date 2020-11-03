import React from "react";
import { Link } from "react-router-dom";

function Items({ item,deleteItem }) {
    console.log("item.id",item)
  return (
    <div>
     
        <p>{item.name}</p>
        <button onClick={()=>deleteItem(item.id)}>Delete</button>
        <button>Done</button>
        <Link to={`/item/${item.id}`}> <button>click</button></Link>
       
     
    </div>
  );
}

export default Items;
