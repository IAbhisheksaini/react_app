import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const addValue=()=>{
    if(counter < 25){
      setCounter(counter+1);
      console.log(counter+1);
    }
  }

  const RemValue=()=>{
    if(counter > 0){
      setCounter(counter-1);
      console.log(counter-1);
    }
  }

  return (
    <>
      <h3>Counter := {counter}</h3>
      <br/><br/>
      <button onClick={addValue}>
        Add value
      </button>
      <br/><br/>
      <button onClick={RemValue}>
        Remove value
      </button>
    </>
  )
}

export default App
