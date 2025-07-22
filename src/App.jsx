import './App.css'
import Navbar from './components/Navbar'
import FlowerBackground from './components/FlowerBackground'
import Home from './pages/Home'

function App() {
  return (
    <div className="relative w-full min-h-screen bg-[#181c2e] flex flex-col overflow-hidden">
      <Navbar />
      <FlowerBackground />
      <Home/>
    </div>
  )
}

export default App
