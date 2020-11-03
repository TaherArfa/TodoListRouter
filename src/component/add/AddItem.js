import React, { useState } from "react";

function AddItem({ handleItem }) {
  const [todo, setTodo] = useState("");
  return (
    <div>
      <input onChange={(e) => setTodo(e.target.value)} />
      {/* <button onClick={() => handleItem(todo)}>Add </button> */}
      <button onClick={()=> handleItem(todo)}>Add</button>
    </div>
  );
}

export default AddItem;
