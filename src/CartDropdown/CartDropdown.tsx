import React, { useState, useRef, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { useLocation  } from 'react-router-dom';
import { CartItem } from '../models/store-models';
import { useCart } from '../hooks/useCart';

import './CartDropdown.css'

interface Props {
  cart: CartItem[];
}

const CartDropdown = ({ cart }: Props) => {
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const location = useLocation();
  const { removeItemFromCart } = useCart();

  useEffect(() => {
    setDropdownVisible(false);
  }, [location])

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
          <button className='CartDropdown-removeItem' onClick={ () => removeItemFromCart(item) }>&times;</button>
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
      { cart.length > 0 && <span className='CartDropdown-Badge'>{ getCartTotalQty() }</span>}
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