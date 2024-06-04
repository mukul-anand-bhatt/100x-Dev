//suspense api asynchronous component fectching asyncronous data fetching
import {BrowserRouter,Routes,Route, useNavigate} from 'react-router-dom'
import './App.css'
import {Suspense,lazy} from "react"; 
// import  Dashboard  from './components/Dashboard'
// import Landing  from './components/Landing'
const Dashboard =lazy(()=>import('./components/Dashboard'));
const Landing  = lazy(()=>import('./components/Landing'));
function App() {
  return(
    <div>
      <BrowserRouter>
      <Appbar/>
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback = {"loading..."}><Dashboard /> </Suspense>}/>
          <Route path="/" element={<Suspense fallback = {"loading..."}><Landing /></Suspense>} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}
function Appbar(){
  const navigate = useNavigate();
  return <div>
      <div>
        <button onClick={()=>{
          navigate("/");
        }}>Landing Page</button>

        <button onClick={()=>{
          navigate("/dashboard");
        }}>Dashboard Page</button>
      </div>
    </div>
}
export default App
