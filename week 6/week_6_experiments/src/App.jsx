import { useState } from "react"
import React,{Fragment} from "react"

function App() {
  const [title, setTitle] = useState("my name is mukul");

  function updateTitle(){
    setTitle("my name is "+Math.random());
  }


  return (
    <div>
      <button onClick={updateTitle}>update the Title</button>
      <Header title={title} />
      <Header title="My name is M12" />
    </div>
  )
}

function Header({title}) {
  return <div>
    {title}
  </div>
}
export default App
