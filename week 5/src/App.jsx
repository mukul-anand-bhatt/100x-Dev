// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }


import './App.css'

//we will use a hook 

// let state = {    react will not see aany global variable defined by us
//   count:0
// }
// function App(){
//   const [count,setCount]=useState(0);
  
//   return (
//     <div>
//       <CustomButton count={count} setCount={setCount}></CustomButton>
//     </div>
//   )


// function CustomButton(props){
//   function onClickHandler(){
//     props.setCount(props.count+1);
//   }

//   return<button onClick={onClickHandler}>Counter {props.count}</button>

// }



//   function onClickHandler(){
//     // state.count+=1  ;   // not the right way to set state variables

//     // the right way=>
//      setCount(count+1);
//   }
//   return(
//   <div>
//     <button onClick={onClickHandler}>Counter {count}</button>
//   </div>)
// }

// //making a to do list
// import { useState } from 'react';

// // Define the Todo component
// function Todo(props) {
//   return (
//     <div>
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </div>
//   );
// }

// // Define the CustomButton component outside the App component
// function CustomButton(props) {
//   function onClickHandler() {
//     props.setCount(props.count + 1);
//   }

//   return <button onClick={onClickHandler}>Counter {props.count}</button>;
// }

// function App() {
//   const [todos, setTodos] = useState([
//     {
//       title: "Go to gym",
//       description: "go to gym from 7-9",
//       completed: false
//     },
//     {
//       title: "dsa",
//       description: "study dsa from 9-11",
//       completed: true
//     }
//   ]);
//   const [count, setCount] = useState(0); // Added state for count

//   function addTodo() {
//     setTodos([
//       ...todos,
//       {
//         title: "new todo",
//         description: "desc of new todo"
//       }
//     ]);
//   }

//   return (
//     <div>
//       <button onClick={addTodo}>add a random todo</button>
//       {todos.map(function (todo) {
//         return <Todo title={todo.title} description={todo.description} />;
//       })}
//       <CustomButton count={count} setCount={setCount} /> {/* Added count prop */}
//     </div>
//   );
// }



import './App.css'
import { useState } from 'react';



function App() {
  const [count,setCount]=useState(0);
  return(<div>
    <Custombtn count={count} setCount={setCount}></Custombtn>
    </div>
    )
}  


function Custombtn(statee){
  
  function onclickk(){
    statee.setCount(statee.count+1)
  }
  return(
    <button onClick={onclickk}>Count - {statee.count}</button>
  )

}


// export default App 



// ////////// PLease Explore p5.js Web Editor it is a web editor just like replet what the yhave used in ther front end and back end

export default App;
