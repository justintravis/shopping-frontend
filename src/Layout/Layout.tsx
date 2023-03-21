import React, { useState, useRef } from 'react'
import { Link, Outlet } from 'react-router-dom';
import CartDropdown from '../CartDropdown/CartDropdown';
import { CartItem } from '../models/store-models';
import './Layout.css'

interface Props {
  storeName: string;
  cart: CartItem[];
}

const Layout = ({ storeName, cart }: Props) => {
  return (
    <>
      <header>
        <ul>
          <Link to="/">{ storeName }</Link>
          <CartDropdown cart={ cart } />
        </ul>
      </header>
      <Outlet />
    </>
  )
}

export default Layout;