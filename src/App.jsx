import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./Pages/Home"

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <div className="flex-grow flex justify-center items-center">
        <Home />
      </div>
      <Footer />
    </div>
  )
}

export default App
