import React from 'react'
import {useState} from 'react'
import './Cart.css'

export default function Cart() {
    const [cart,setCart]= useState([])
    const [activecart,setActiveCart]= useState();
  return (
    
    <div className="cartcard">Cart</div>
  )
}
