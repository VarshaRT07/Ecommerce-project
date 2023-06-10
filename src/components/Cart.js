import React from 'react'
import {useState} from 'react'
import './Cart.css'

export default function Cart({show,cost,activecart}) {
    const [cart,setCart]= useState(activecart)
   
    

    
  return (
    <div className="cartcard">
   {cart && <div className="emptycart">
      <div>
        <h4 className='carttitle'>Cart</h4>
      </div>
      <hr />
      <div className='empty'>
        <p >Your Cart is empty.</p>
      </div>
      </div>}

     {!cart && <div className="prdcart">
      <div>
        <h4 className='carttitle'>Cart</h4>
      </div>
      <hr />
      <div>
        <div>
        <div class="cart-info ">
             <div className="images">

              <img src="images/image-product-1-thumbnail.jpg" className='shoe' alt="shoe"/>
             </div>
              <div class="price-info">
                <p>
                Fall Limited Edition Sneakers
                $125.00 × <span id="quantity">2</span> <span id="total">${cost}</span></p>
              </div>
              <div className="icons">
               <img src="images/icon-delete.svg" alt="icon-delete" class="delete-icon" onClick={() => setCart(true)}/>
              </div>
            </div>

            <button class="addtocart">Checkout</button>
        </div>
      </div>
      </div>}
          </div>
  )
}
