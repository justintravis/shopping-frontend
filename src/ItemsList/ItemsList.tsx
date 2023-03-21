import React, { useState, useRef } from 'react'
import { Items } from '../models/store-models';
import ItemCard from '../ItemCard/ItemCard';
import { Link } from "react-router-dom";

import './ItemsList.css'

const ItemsList = ({ items }: Items) => {
  return (
    <>
      <div className='ItemsList'>
        { items.map(i => {
          const { id, name, price, qtyAvailable, images } = i;
          return (
            <div className='ItemsList-card' key={ id }>
              <Link to={`/item/${ id }`}>
                <ItemCard
                  id={ id }
                  name={ name }
                  price={ price }
                  qtyAvailable={ qtyAvailable }
                  images={ images }
                />
              </Link>
              </div>
          )
        }) }
      </div>
    </>
  )
}

export default ItemsList;