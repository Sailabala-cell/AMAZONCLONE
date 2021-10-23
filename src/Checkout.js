import React from 'react';
import {useStateValue} from "./StateProvider";
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';

import Subtotal from "./Subtotal"
function Checkout() {
    const [{basket}]=useStateValue();
    
    return (
        <div className="checkout">
        <div className="checkout_left">
          <img
          className="checkout_ad"
          src="./images/banner.jpg"
          alt="" 
          />
          {basket?.length===0 ? (
            <div> <h2 >
              Your Shopping basket is empty
            </h2>
            <p>
            You have no items in your basket .To buy click on "Add to Bsket" next to the item
            </p>
            </div>
          ):
          (
            <div>
            <h2 className="checkout_title"> Your Shopping Basket</h2>
            {/* List out all the checkout product */}
            {basket?.map((item) => (
              
              <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
               />
            ))}
            </div>
          )
          }
          </div>
          {basket.length > 0 && (
            <div className="checkout_right">
            <h1>Subtotal</h1>
            <Subtotal/>
            </div>
          )}
        </div>
    );
}

export default Checkout
