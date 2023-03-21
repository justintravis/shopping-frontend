import React, { useState, useRef } from 'react'
import { Link, Outlet } from 'react-router-dom';

import './Layout.css'

interface Props {
  storeName: string;
}

const Layout = ({ storeName }: Props) => {
  return (
    <>
      <header>
        <Link to="/">{ storeName }</Link>
      </header>
      <Outlet />
    </>
  )
}

export default Layout;