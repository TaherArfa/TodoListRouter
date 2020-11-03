import React from "react";
import Items from "../item/Items";

function TodoList({ list, deleteItem }) {
  console.log("list", list);
  return (
    <div>
      {list.map((el) => (
        <Items key={el.id} item={el} deleteItem={deleteItem} />
      ))}
    </div>
  );
}

export default TodoList;
