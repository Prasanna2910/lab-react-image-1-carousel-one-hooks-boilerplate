import React, { useState } from 'react';
import './Carousel.css';
import { images } from '../data/CarouselData';

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// complete the function below:
function Carousel() {
  let [state, changestate] = useState(0);

  const backward = () => {
    if (state == 0) {
      changestate(2);
    } else {
      changestate(state - 1);
    }
  };

  const forward = () => {
    if (state == 2) {
      changestate(0);
    } else {
      changestate(state + 1);
    }
  };

  return (
    <div className="container">
      <ArrowBackIosIcon onClick={backward} />
      <img
        src={images[state].img}
        style={{ height: '400px', width: '400px' }}
      />
      <ArrowForwardIosIcon onClick={forward} />
    </div>
  );
}

export default Carousel;
