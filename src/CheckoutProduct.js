import { Button } from '@material-ui/core'
import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider'
function CheckoutProduct({id,title,image,price,rating}) {

    const [{basket},dispatch]=useStateValue()
        const removeBasket=()=>{
            dispatch({
                type:"REMOVE_FROM_BASKET",
                id:id,
            })

    }
    return (
        <div className="checkoutproduct">
            <img className="checkoutproduct__image" src={image} alt={title}/>

            <div className="checkoutproduct__info">
                <p className="checkoutproduct__title">{title}</p>
                <p className="checkoutproduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                
            <div className="checkoutproduct__rating">
                {
                    Array(rating).fill().map((_)=>(
                        <img className='product__star' src="https://www.bing.com/th?id=OIP.WXSgEEDN0tIXutWNxql1xQHaHC&w=98&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" alt="star"/>
                    ))
                }
            </div>
            <Button className="checkoutproduct__button" onClick ={removeBasket}>Remove from Basket</Button>

            </div>
            
        </div>
    )
}

export default CheckoutProduct
