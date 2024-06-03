import { useState } from "react"
function App() {
  const [count, setcount] = useState(0)
  return(
    <div>
      <button onClick={function(){
        setcount(count+1);
      }}>
        count is {count}
      </button>
    </div>
  )
}

export default App