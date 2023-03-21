import React, { useState, useRef } from 'react'
import { Item } from '../models/store-models';

const ItemCard = ({ name, price, qtyAvailable, images }: Item) => {
  return (
    <div>
      { images.length > 0 && <img src={ encodeURI(images[0].url) } width={ 120 } /> }
      <p>{ name }</p>
      <p>{ price }</p>
      <p>View product info</p>
      { qtyAvailable === 0 && 'Out of stock'}
    </div>
  )
}

export default ItemCard;