import React from 'react'
import { useState } from 'react'

const ChildComponent = ({inputValue, setInputValue}) => {

  return (
    <div className='child'>
      <h2>Child Component</h2>
      <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
    </div>
  )
}


export default ChildComponent