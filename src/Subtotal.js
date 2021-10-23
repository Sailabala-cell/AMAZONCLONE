import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "./StateProvider"
import { getBasketTotal } from './reducer';
function Subtotal() {

    const [{basket},dispatch]=useStateValue();
    return (
        <div className="subtotal">
        <CurrencyFormat
        renderText={(value)=>(
        <>
        <p>
            Subtotal ({basket.length} items):<strong>{`${value}`}</strong>
        </p>
        <small className="subtotal_gift">
            <input type="checkbox"/>
            <p>The order contains a gift</p>
        </small>
        </>
        )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={'\u20B9'}
        /> 
        {/* price */}
        <button>Proceed to Checkout</button>
            
        </div>
    )
}

export default Subtotal
