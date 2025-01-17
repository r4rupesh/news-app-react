import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import News from './components/News'

function App() {
  const [category,setCategory]=useState("");
  return (
    <>
      <div>
      <Navbar setCategory={setCategory} />
       <News category={category}/>
      </div>
    </>
  )
}

export default App
