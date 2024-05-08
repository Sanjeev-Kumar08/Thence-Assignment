import React from 'react'
import './Footer.css'
import copyright from '../../assets/images/copyright.png'
const Footer = () => {
  return (
    <div className='footerMainContainer'>
        <div className='maincontainer'>
        <div className='footerSubContainer'>
        <img src={copyright}/>
      Talup 2023. All rights reserved
      </div>
      <div className='footerSubContainer'>
     <span>
     Terms & Conditions
     </span>
     <span>
     Privacy Policy
     </span>
      </div>
        </div>
     
    </div>
  )
}

export default Footer
