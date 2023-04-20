import React from 'react'
import { useState } from 'react'

export function Counter() {
  const [count, setCount]=useState(0)

  function up() {
  setCount(count+1)
  }
  
  function down() {
    setCount(count-1)
  }
  

  return (
    <div>
     <h1> {count}</h1> 
      <button onClick={up}>Increase</button>
      <button onClick={down}>Decrease</button>
    

    </div>
  )
}




