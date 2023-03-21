import React, { useState, useRef } from 'react'
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import { Item } from '../models/store-models';

const ItemPDP = ({ name, price, inStock, images }: Item) => {
  return (
    <div>
      <h2>{ name }</h2>
      <ImageCarousel images={ images } width={ 250 } height={ 250 } />
      <p>{ price }</p>
      { inStock === true ? 'Buy' : 'Join Waitlist' }
    </div>
  )
}

export default ItemPDP;