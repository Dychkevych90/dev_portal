import React from 'react';

import { CardWrapper } from './styled.js';
import HtmlSlide from '../../assets/images/html.jpg';

const Card = () => {
  return (
    <CardWrapper>
      <img className='img' src={ HtmlSlide } alt="image"/>
      <div className="content">
        <div className="title">Title</div>
        {/* eslint-disable-next-line max-len */}
        <div className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus aperiam autem excepturi, non praesentium quisquam repudiandae. Cum dicta, eligendi? Enim eos, inventore itaque numquam praesentium quidem reiciendis soluta veniam.</div>
        <button className='read_more'>Read More</button>
      </div>
    </CardWrapper>
  );
};

export default Card;
