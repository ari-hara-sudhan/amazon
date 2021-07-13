import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal';
function Checkout() {
    const[{basket}]=useStateValue();
    console.log(basket)
    return (
        <div className="checkout">
            <div className="checkout__left">
            <img className="checkout__ads" src="https://cdn.iphoneincanada.ca/wp-content/uploads/2018/04/amazon-prime-video.png" alt="ads"/>

         
{basket?.length ===0 ?(
<div>
<h3 >Your shoping card is empty</h3>
<p>You have no items in your basket.To buy one or Two items u need to Add to the</p>
</div>
)
:
(
<div >
<h2 className="checkout__title">Your Shopping Basket</h2>

{
  basket?.map(item=>(
      <CheckoutProduct 
      id={item.id}
      title={item.title}
      image={item.image}
      price={item.price}
      rating={item.rating}/>

  ))
}
</div>
)

}

 </div>
    
    {basket.length>0 && (
        
            <div className="checkout__right">
                <Subtotal/>

            </div>
    )}

          
          
            
        </div>
    )
}

export default Checkout
