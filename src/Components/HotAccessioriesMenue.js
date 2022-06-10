import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/HotAccessioriesmenue.css"
const HotAccessioriesMenue=()=> {
  return (
    <div className='HotAccessioriesMenue'>
        <Link className='HotAccessiorieslink' to ="/music">Music Store</Link>
        <Link className='HotAccessiorieslink' to ="/smartDevices">Smart Devices</Link>
        <Link className='HotAccessiorieslink' to ="/home">Home</Link>
        <Link className='HotAccessiorieslink' to ="/lifestyle">lifestyle</Link>
        <Link className='HotAccessiorieslink' to ="/mobileAccessiories">Mobile Accessories</Link>





    </div>
  )
}

export default HotAccessioriesMenue