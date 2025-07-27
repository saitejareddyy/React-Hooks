import { div } from "motion/react-client"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./Pages/Home"
import UseLocalStorage from "./hooks/UseLocalStorage"

function App() {

  const [name, setName] = UseLocalStorage('username', '');

  return (
    /* <div className="min-h-screen flex flex-col">
       <Navbar/>
       <div className="flex-grow flex justify-center items-center">
         <Home />
       </div>
       <Footer />
    </div> */ 

    <div className="h-screen flex flex-col justify-center items-center">
      <input className="bg-[gray] px-4 py-3 rounded mb-5" type="text" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} />
      <h2 className="text-3xl">Hello, {name}!</h2>
    </div>
  )
}

export default App
