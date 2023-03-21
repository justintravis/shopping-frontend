import React, { useState, useRef } from 'react'
import { ItemImage } from '../models/store-models';

import './ImageCarousel.css';

interface CarouselProps {
  images: ItemImage[];
  width: number;
  height: number;
}

const ImageCarousel = ({ images, width, height }: CarouselProps) => {
  const [active, setActive] = useState<number>(0);

  const navigateCarousel = (direction: 'next' | 'previous') => {
    if (direction === 'next' && active + 1 < images.length) {
      setActive(active + 1);
    } else if (direction === 'previous' && active > 0) {
      setActive(active - 1);
    }
  }

  return (
    <div className='ImageCarousel' style={{ width: width, height: height + 80 }}>
      <div style={{ width: width, height: height + 40 }} className='ImageCarousel-container'>
      { images.map((image, index) => {
        return (
          <div key={`image-${ index }`} className={ active === index ? 'active' : ''}>
            <img src={ image.url } />
          </div>
        )
      }) }
      </div>
      <button onClick={ () => navigateCarousel('previous') }>Previous</button>
      <button onClick={ () => navigateCarousel('next') }>Next</button>
    </div>
  )
}

export default ImageCarousel;