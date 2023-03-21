import React, { useState, useRef, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { CartItem } from '../models/store-models';

import './CartDropdown.css'

interface Props {
  cart: CartItem[];
}

const CartDropdown = ({ cart }: Props) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    if (!dropdownVisible && Object.keys(cart).length > 0) {
      setDropdownVisible(true);
    }
  }, [cart])

  const renderCartItems = () => {
    return cart.map(item => {
      return (
        <li key={ item.id }>
          <span>({ item.quantity })</span>
          <span><strong>{ item.name }</strong></span>
          <span>${ item.totalPrice }</span>
        </li>
      )
    })
  }

  return (
    <div className='CartDropdown'>
      <button onClick={ () => setDropdownVisible(!dropdownVisible)}>🛒</button>
      { dropdownVisible &&
        <ul>
          { cart.length > 0
          ? renderCartItems()
          : <span>Empty :( Plz buy some stuff!</span> }
        </ul>
      }
    </div>
  )
}

export default CartDropdown;