import React, { useState, useRef, useEffect, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { useLocation  } from 'react-router-dom';
import { CartItem, CartActionProps } from '../models/store-models';
import { useCart } from '../hooks/useCart';

import './CartDropdown.css'
import { CartContext } from '../CartContext';

const CartDropdown = () => {
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const location = useLocation();
  const { state, dispatch } = useContext(CartContext);;

  useEffect(() => {
    setDropdownVisible(false);
  }, [location])

  useEffect(() => {
    if (!dropdownVisible && Object.keys(state).length > 0) {
      setDropdownVisible(true);
    }
  }, [state])

  const renderCartItems = () => {
    return state.map((item: CartItem) => {
      return (
        <li key={ item.id }>
          <span>({ item.quantity })</span>
          <span><strong>{ item.name }</strong></span>
          <span>${ item.totalPrice }</span>
          <button className='CartDropdown-removeItem' onClick={ () => dispatch({ type: 'REMOVE_FROM_CART', item }) }>&times;</button>
        </li>
      )
    });
  }

  const getCartTotalQty = () => {
    return state.reduce((acc: number, curr: CartItem) => {
      return acc + curr.quantity;
    }, 0) as number;
  }

  return (
    <div className='CartDropdown'>
      <button onClick={ () => setDropdownVisible(!dropdownVisible)}>🛒</button>
      { state.length > 0 && <span className='CartDropdown-Badge'>{ getCartTotalQty() }</span>}
      { dropdownVisible &&
        <ul>
          { state.length > 0
          ? renderCartItems()
          : <span>Empty :( Plz buy some stuff!</span> }
        </ul>
      }
    </div>
  )
}

export default CartDropdown;