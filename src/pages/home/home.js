import React from 'react';

import { HomeWrapper } from './styled.js';
const Home = ( { isMenuOpen } ) => {
  return (
    <HomeWrapper isMenuOpen={ isMenuOpen }>
      <div className='container'>
        <div className="row">
          <div className="column-12">
            {/* eslint-disable-next-line max-len */}
            <div style={ {
              background: 'rgb(62 62 62 / 100%)',
              height: '150px', margin: '10px', borderRadius: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            } }>
ABOUT US & SEARCH...
            </div>
          </div>
          <div className="column-8">
            {/* eslint-disable-next-line max-len */}
            <div style={ {
              background: 'rgb(62 62 62 / 100%)',
              height: '300px', margin: '10px', borderRadius: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            } }>
TOp categories (tabs)
            </div>
          </div>
          {/* eslint-disable-next-line max-len */}
          <div className="column-4">
            <div style={ {
              background: 'rgb(62 62 62 / 100%)',
              height: '300px', margin: '10px', borderRadius: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            } }>
Help us
            </div>
          </div>
          <div className="column-8">
            {/* eslint-disable-next-line max-len */}
            <div style={ {
              background: 'rgb(62 62 62 / 100%)',
              height: '300px', margin: '10px', borderRadius: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            } }>
Latest articles
            </div>
          </div>
          {/* eslint-disable-next-line max-len */}
          <div className="column-4">
            <div style={ {
              background: 'rgb(62 62 62 / 100%)',
              height: '500px', margin: '10px', borderRadius: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            } }>
Categories
            </div>
          </div>
          <div className="column-12">
            {/* eslint-disable-next-line max-len */}
            <div style={ {
              background: 'rgb(62 62 62 / 100%)',
              height: '300px', margin: '10px', borderRadius: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            } }>
Blog
            </div>
          </div>
        </div>
      </div>
    </HomeWrapper>
  );
};

export default Home;
