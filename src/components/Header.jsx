import React from 'react'
import './header.css'
import bgHeader1 from '../images/bg-header-desktop.svg'
import bgHeader2 from '../images/bg-header-mobile.svg'


const Header = () => {
  return (
    <div className='header'>
      <img className='bg-desktop' src={bgHeader1} alt="header" />
      <img className='bg-mobile' src={bgHeader2} alt="header" />
    </div>
  )
}

export default Header
