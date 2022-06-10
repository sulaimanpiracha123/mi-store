import React from 'react'
import "../styles/starProduct.css"

const  StarProduct=({starproduct})=> {
  return (
    <div className='starProduct'>
        <div>
            <a href = {starproduct[0].url}><img src ={starproduct[0].image}alt = "1stProduct"/></a></div>
            <div> 
            <a href= {starproduct[1].url}><img src = {starproduct[1].image}alt = "1stProduct"/></a>
            <a href = {starproduct[2].url}><img src={starproduct[2].image}alt = "1stProduct"/></a>
            <a href = {starproduct[3].url}><img src={starproduct[3].image}alt = "1stProduct"/></a>
 
            </div> 
        </div>
  )
}

export default StarProduct