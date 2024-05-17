import { useState } from "react"
// import React,{Fragment} from "react"

function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    title:"go to gym",
    description:"go to gym today"

  },{
    id: 2,
    title:"go to college",
    description:"just go today"
  },{
    id: 3,
    title:"go to office",
    description:"just go"
  }]);

  function addTodo(){
    const newTodos=[];
    for(let i=0;i<todos.length;i++){
      newTodos.push(todos[i]);
    }
    newTodos.push({
      id: todos.length+1,
      title:Math.random(),
      description: Math.random()
  
  })
  setTodos(newTodos);

  }
  return (
    <div>
      <button onClick={addTodo}>Add a todo</button>
      {todos.map(todo => <Todo title={todo.title} description={todo.description}/>)}
    </div>
  )
}

function Todo({title,description}){
  return <div>
    <h1>{title}</h1>
    <h5>{description}</h5>
  </div>
}
export default App
