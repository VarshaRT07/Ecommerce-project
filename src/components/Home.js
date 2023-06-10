import React from 'react'
import './Home.css'
import {useState} from 'react'

export default function Home() {
  const[counter,setcounter]=useState(0);
  if(counter<0){
    setcounter(0);
  }
  
  


  return (
    <div className="home">
        <div className="image-container">
          <div>
            <img src="/images/image-product-1.jpg" alt=""  className='mainprd'/>
          </div>
            <div className='container'>
              <div><img src="/images/image-product-1-thumbnail.jpg" alt="" /></div>
              <div><img src="/images/image-product-2-thumbnail.jpg" alt="" /></div>
              <div><img src="/images/image-product-3-thumbnail.jpg" alt="" /></div>
              <div><img src="/images/image-product-4-thumbnail.jpg" alt="" /></div>
            </div>
        </div>
        <div className="product-details">
          <h6 className="sneaker-title">Sneaker Company</h6>
          <h1>Fall Limited Edition Sneakers</h1>
          <p>These low-profile sneakers are your perfect casual wear companion. Featuring a 
        durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        <div className="actual-value">
          <h2>$125.00</h2>
          <h5 id="offer">50%</h5>
        </div>
        <p>$250.00</p>
        <div className='order-buttons'>
          
          <div className='counter-comp'>
          <button id="decrement" onClick={() =>setcounter((prev)=>prev-1)}>-</button>
         <input type="text" id="counter" value={counter}/>
         <button id="increment" onClick={() =>setcounter((prev)=>prev+1)}>+</button>
          </div>
         
          <button className="addtocart">
            Add to cart
            </button>
        </div>

      
        
          
        </div>
    </div>
  )
}
