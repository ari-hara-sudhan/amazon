import { Button } from '@material-ui/core'
import React from 'react'
import "./Subtotal.css"
import Currencyformat from "react-currency-format"
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer'
function Subtotal() {
    const[{basket}]=useStateValue()
    return (
        <div className="subtotal">
            <Currencyformat 

            renderText={(value)=>(
                <>
                <p>SubTotal ({basket.length}items):<strong>{`${value}`}</strong> </p>
                <small className="subtotal__gifts">
                    <input type="checkbox" />This order contains
                </small>
                </>
            )}

            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}

            />

            <Button className="subtotal__button">Procced to Checkout</Button>
        </div>
    )
}

export default Subtotal
