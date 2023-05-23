import React from 'react';
import { Link } from 'react-router-dom';

import VisibilityIcon from '@mui/icons-material/Visibility';

import { CardWrapper } from './styled.js';
import HtmlSlide from '../../assets/images/html.jpg';

const Card = () => {
  return (
    <CardWrapper>
      <img className='img' src={ HtmlSlide } alt="image"/>
      <div className="content">
        <div className="date">23.05.2023</div>
        <div className="title">JavaScript Math</div>
        {/* /!* eslint-disable-next-line max-len *!/ */}
        {/* eslint-disable-next-line max-len */}
        {/* <div className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus aperiam autem excepturi, non praesentium quisquam repudiandae. Cum dicta, eligendi? Enim eos, inventore itaque numquam praesentium quidem reiciendis soluta veniam.</div> */}

        <Link to='/article' className='read_more'>Read More</Link>
        <div className="visibility_block">
          <VisibilityIcon />
          <div className="count">4</div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default Card;
