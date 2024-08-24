import React from 'react'
import phoneImage from '../assets/phone.png'
export default function Result({rate}) {
  return (
    <div className='container'>
        <div className="phoneimage">
            <img src={phoneImage} alt="" />
        </div>
        <div className="maintext">
        <div className="resulttext">
            <p> you selected {rate} out of 5</p>
        </div>
        </div>
        <div className="thanks">
            Thank you!
        </div>
        <div className="appreciate">
            <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
        </div>
        
    </div>
  )
}
