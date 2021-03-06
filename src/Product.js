import { Button } from '@material-ui/core'
import React  from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'

function Product({id,title,image,price,rating}) {
    const[{basket},dispatch]=useStateValue();

    const addtobasket=()=>{

        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating
            }
        })

    }
    return (
        <div className="product">
            <div className="product__info">
            <p>{title}</p>
            <p className="product__price"><small>$</small><strong>{price}</strong></p>

            <div className="product__rating">
                {
                    Array(rating).fill().map((_)=>(
                        <img className='product__star' src="https://www.bing.com/th?id=OIP.WXSgEEDN0tIXutWNxql1xQHaHC&w=98&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" alt="star"/>
                    ))
                }
            </div>

            </div>
            
            <img className='product__img' src={image} alt="image"/>
            <Button onClick={addtobasket} >Add to Basket</Button>
            
        </div>
    )
}

export default Product
