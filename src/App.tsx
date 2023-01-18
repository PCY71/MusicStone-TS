import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Main} from './pages'
import './App.css'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />          
        </Routes>
      </Router>
    </div>
  )
}

export default App
