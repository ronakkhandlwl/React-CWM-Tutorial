import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)
  // let counter = 4
  const addValue = () => {
    // counter++;
    setCounter(counter+1)
  }
  const removeValue = () => {
    // counter--;
    if(counter-1>=0) {
      setCounter(counter-1)
    }
  }
  return (
    <>
    <h1>Chai or React</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addValue}>Add value</button>
    <br />
    <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
