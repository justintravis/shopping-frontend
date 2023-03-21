import React, { useState, useRef } from 'react'
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import { Item } from '../models/store-models';

const ItemPDP = ({ name, price, qtyAvailable, images }: Item) => {
  return (
    <div>
      <h2>{ name }</h2>
      <ImageCarousel images={ images } width={ 250 } height={ 250 } />
      <p>{ price }</p>
      { qtyAvailable > 0 ? 'Add to Cart' : 'Join Waitlist' }
    </div>
  )
}

export default ItemPDP;