import "./App.css";
import TodoList from "./component/Todo/TodoList";
import React, { useState } from "react";
import { Items } from "./constant/data";
import AddItem from "./component/add/AddItem";
import { Switch,Route } from "react-router-dom";
import Test from "./component/test"
function App() {
  const [items, setItems] = useState(Items);

  const handleItem = (item) => {
    if (item !== "")
      setItems([...items, { id: Math.random(), name: item, done: false }]);
    console.log("item", items);
  };

  const deleteItem = (id) => {
    setItems(items.filter((el) => el.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>TO DO LIST</h1>
        <AddItem handleItem={handleItem} />
        <TodoList deleteItem={deleteItem} list={items} />
      </header>
    
    </div>
  );
}
export default App;

/* onClick={() => setCount(count + 1)} */

// const [count, setCount] = useState(0);
// const [name, setName] = useState("");
// const handName= ()=>{
//   setName("Taher")
// }

// <div>
//     <button onClick={() => setCount(count + 1)}>+</button>
// <p>{count}</p>
// <p onClick={handName}>name:{name}</p>
// <input onChange={(e)=>setName(e.target.value)} />
// </div>
