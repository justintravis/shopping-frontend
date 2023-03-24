import React, { useState, useRef, useEffect } from 'react'
import { useLocation  } from 'react-router-dom';
import { useCart, useCartDispatch } from '../CartContext';
import { CartActions } from '../models/store-models';

import './CartDropdown.css'

const CartDropdown = () => {
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const location = useLocation();
  const cart = useCart();
  const dispatch = useCartDispatch();

  useEffect(() => {
    setDropdownVisible(false);
  }, [location])

  useEffect(() => {
    if (!dropdownVisible && cart && Object.keys(cart).length > 0) {
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
          <button className='CartDropdown-removeItem' onClick={ () => dispatch({ type: CartActions.Remove, item }) }>&times;</button>
        </li>
      )
    })
  }

  const getCartTotalQty = () => {
    return cart.reduce((acc, curr) => {
      return acc + curr.quantity;
    }, 0) as number;
  }

  return (
    <div className='CartDropdown'>
      <button onClick={ () => setDropdownVisible(!dropdownVisible)}>🛒</button>
      { cart?.length > 0 && <span className='CartDropdown-Badge'>{ getCartTotalQty() }</span>}
      { dropdownVisible &&
        <ul>
          { cart?.length > 0
          ? renderCartItems()
          : <span>Empty :( Plz buy some stuff!</span> }
        </ul>
      }
    </div>
  )
}

export default CartDropdown;