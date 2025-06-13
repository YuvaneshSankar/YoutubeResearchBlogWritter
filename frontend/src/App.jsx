import { useState } from 'react'
import './App.css'
import { Loginform } from './components/loginform/Loginform.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Signup } from './components/loginform/Signup.jsx';
import { Home } from './components/Home/Home.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginform />} />
        <Route path="/Login" element={<Loginform />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
