import React, { useState, useRef, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom';
import CartDropdown from '../CartDropdown/CartDropdown';
import { useProducts } from '../CartContext';
import { get } from '../utils/http';

import './Layout.css'

interface Props {
  storeName: string;
}

const Layout = ({ storeName }: Props) => {
  const { products, setProducts } = useProducts();

  useEffect(() => {
    const loadProducts = async () => {
      const resp = await get('products');
      const products = await resp.json();
      setProducts(products);
    }
    
    loadProducts();
  }, []);

  return (
    <>
      <header>
        <ul>
          <Link to="/">{ storeName }</Link>
          <CartDropdown />
        </ul>
      </header>
      <Outlet />
    </>
  )
}

export default Layout;