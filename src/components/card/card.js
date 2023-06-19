import React from 'react';
import { Link } from 'react-router-dom';

import VisibilityIcon from '@mui/icons-material/Visibility';

import { CardWrapper } from './styled.js';
import JScover from '../modals/createArticle/covers/JScover';

const Card = ( { data } ) => {
  return (
    <CardWrapper id={ data.id }>
      {/* <img className='img' src={ data.banner } alt="image"/> */}

      <JScover/>

      <div className="content">
        <div className="date">{data.created_date}</div>
        <div className="title">{data.title}</div>
        {/* eslint-disable-next-line max-len */}
        <Link to={ `/article/${data.category}/${data.id}` } className='read_more'>Читати більше...</Link>
        <div className="visibility_block">
          <VisibilityIcon />
          <div className="count">0</div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default Card;
