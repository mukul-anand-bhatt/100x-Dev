import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <MyComponent />
    </>
  )
}

function MyComponent(){
  const [count,setCount] = useState(0);

  const incrementCount = () =>{
    setCount(count+1);
  };
  return(
    <div>
      <p>{count}</p>
      <button onClick={incrementCount}>count</button>
    </div>
  );
}

export default App
