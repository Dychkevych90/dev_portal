import React from 'react';

import { HomeWrapper } from './styled.js';
const Home = ( { isMenuOpen } ) => {
  return (
    <HomeWrapper isMenuOpen={ isMenuOpen }>
      <div className='container'>
        <div className="row">
          <div className="column-12">aloha</div>
        </div>
      </div>
    </HomeWrapper>
  );
};

export default Home;
