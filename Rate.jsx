import React, { useState } from 'react'
import starIcon from '../assets/Group 4 (1).png'
export default function Rate({setSubmit,rate,setRate}) {
    const buttons = [1,2,3,4,5]
    
  return (
    
    <div className='container'>
      <div className="star">
        <img src={starIcon} alt="" />
      </div>
      <div className="maintext">
        <h1>How did we do?</h1>
      </div>
      <div className="text">
        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      </div>
      <div className="buttons">
        {buttons.map(item => <button key={item} onClick={()=>setRate(item) } style={{backgroundColor: rate == item ? "orange" : "" }} >{item}</button> )}
      </div>
      <div className="submit">
        <button onClick={()=> rate && setSubmit(true) } >SUBMIT</button>
      </div>
    </div>
  )
}
