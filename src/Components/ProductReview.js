import React from 'react'
import ProductReviewcard from './ProductReviewcard'
import "../styles/ProductReviews.css"

const ProductReview = ({productReview})=>{
    return(
        <div className='ProductReview'>
        {productReview.map((item,index)=>(
                <ProductReviewcard price={item.price} name = {item.name} image ={item.image} review={item.review} index = {item.index} key = {item.image}/>
            ))}
        </div>
    )
}
export default ProductReview