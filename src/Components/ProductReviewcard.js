import React from 'react'
import "../styles/ProductreviewCard.css"

const ProductReviewcard=({image,index,name,price,review})=>{
 {
  return (
    <div className='productReviewcard'>
        <img src = {image} alt= {`${index} review`}/>
        <h5>{review}</h5>
        <span>{name}</span>
        <b>{price}</b>


    </div>
  )

}
}
export default  ProductReviewcard