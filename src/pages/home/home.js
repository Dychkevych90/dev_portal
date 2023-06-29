import React from 'react';

import { HomeWrapper } from './styled.js';
import testArticle from '../../data.json';
import Card from '../../components/card/card';
const Home = ( { isMenuOpen } ) => {
  return (
    <HomeWrapper isMenuOpen={ isMenuOpen }>
      <div className='container'>
        <div className="row">
          <div className="column-12">
            {/* eslint-disable-next-line max-len */}
            <div className='about_us'>
              ABOUT US
            </div>
          </div>

          <div className="column-12">
            <input
              type="text"
              placeholder='SEARCH...'
              name='search'
              className='search'
              autoComplete='off'
            />
          </div>
        </div>
      </div>


      <div className='container'>
        <div className="row">
          <div className="column-12">
            <div
              className="container"
              style={ { padding: 0 } }
            >
              <div className="row">
                <div className="column-8">
                  <div className='post_block'>
                    <div className="post_block--title">Нещодавні публікації</div>
                    <div className="border" />
                    <div className="post_block--list">
                      {
                        testArticle.map( ( item ) => {
                          return (
                            <Card key={ item.id } data={ item }/>
                          );
                        } )
                      }
                    </div>
                    <button className='load_more--btn'>Завантижити ще</button>
                  </div>
                </div>
                <div className="column-4">
                  <div className="column-12">
                    <div style={ {
                      background: 'rgb(62 62 62 / 100%)',
                      height: '300px', borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                    } }>
                      Help us
                    </div>
                  </div>

                  <div className="column-12">
                    <div style={ {
                      background: 'rgb(62 62 62 / 100%)',
                      height: '300px', borderRadius: '10px',
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
                </div>
              </div>
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
              height: '300px',
              margin: '10px',
              borderRadius: '5px',
              padding: '50px',
            } }>
              <div>Follow Us:</div>
              <div>telegram</div>
              <div>Instagram</div>
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
