import React, { useState, useRef } from 'react'
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import { Item } from '../models/store-models';

interface Props extends Item {
  handleAddItemToCart: Function;
}

const ItemPDP = ({ name, price, qtyAvailable, images, handleAddItemToCart }: Props) => {
  return (
    <div>
      <h2>{ name }</h2>
      <ImageCarousel images={ images } width={ 250 } height={ 250 } />
      <p>{ price }</p>
      { qtyAvailable > 0
        ? <button onClick={ () => handleAddItemToCart() }>Add to Cart</button>
        : 'Join Waitlist'
      }
    </div>
  )
}

export default ItemPDP;