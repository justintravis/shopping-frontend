import React, { useState, useRef } from 'react'
import { Link, Outlet } from 'react-router-dom';

import './Layout.css'

const Layout = () => {
  return (
    <>
      <header><Link to="/">Store</Link></header>
      <Outlet />
    </>
  )
}

export default Layout;