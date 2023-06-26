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
              height: '300px', margin: '10px 10px 0', borderRadius: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            } }>
              Recent Posts (tabs by categories)
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
              height: '300px', margin: '0 10px 10px', borderRadius: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            } }>
              Recent Posts (tabs by categories) + pagination
            </div>
          </div>
          {/* eslint-disable-next-line max-len */}
          <div className="column-4">
            <div style={ {
              background: 'rgb(62 62 62 / 100%)',
              height: '300px', margin: '10px', borderRadius: '5px',
              padding: '50px',
            } }>
              <div>Розділи:</div>
              <ul>
                <li>Html & Css - 20</li>
                <li>JavaScript - 10</li>
                <li>React - 5</li>
                <li>Git & Github - 2</li>
                <li>Node - 2</li>
                <li>Sliders</li>
                <li>Tabs</li>
                <li>Hovers</li>
                <li>Pagination</li>
              </ul>
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
Blog
            </div>
          </div>
          <div className="column-4">
            <div style={ {
              background: 'rgb(62 62 62 / 100%)',
              height: '200px', margin: '10px', borderRadius: '5px',
              padding: '50px',
            } }>
              <div>Follow Us:</div>
              <div>telegram</div>
              <div>Insta</div>
              <div>YouTube</div>
            </div>
          </div>
          <div className="column-12">
            <div style={ {
              background: 'rgb(62 62 62 / 100%)',
              height: '200px', margin: '10px', borderRadius: '5px',
              padding: '50px',
            } }>
             Footer
            </div>
          </div>
        </div>
      </div>
    </HomeWrapper>
  );
};

export default Home;
