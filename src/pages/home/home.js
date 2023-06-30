import React, { useRef, useState } from 'react';

import Card from '../../components/card/card';

import { HomeWrapper } from './styled.js';

import SearchIcon from '@mui/icons-material/Search';
import testArticle from '../../data.json';

const Home = ( { isMenuOpen } ) => {
  const [ searchExpanded, setSearchExpanded ] = useState( false );

  const inputRef = useRef( null );
  const handleSearchIconClick = () => {
    setSearchExpanded( ( prevExpanded ) => !prevExpanded );
    if ( !searchExpanded ) {
      inputRef.current.focus();
    }
  };

  return (
    <HomeWrapper isMenuOpen={ isMenuOpen }>
      <div className='container'>
        <div className="row">
          <div className="column-12">
            <div className='about_us'>
              <div className="title">ABOUT US</div>
              <div className="text">
                {/* eslint-disable-next-line max-len */}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad debitis doloribus error, eum exercitationem facilis itaque mollitia necessitatibus perspiciatis repellendus ut voluptatem voluptates! Deserunt earum laboriosam molestias, natus quasi ullam.
                {/* eslint-disable-next-line max-len */}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolores officiis quod sequi voluptatibus. Assumenda est facere nihil non rerum sapiente tenetur, unde ut! Alias dolorum eaque nihil praesentium voluptatibus!
              </div>
            </div>
          </div>

          <div className="column-12">
            <div className={ `search_block ${searchExpanded ? 'expanded' : ''}` }>
              <button
                onClick={ handleSearchIconClick }
                className={ `search-icon ${searchExpanded ? 'expanded' : ''}` }
              >
                <SearchIcon className='icon' />
              </button>

              <input
                type="text"
                placeholder='SEARCH...'
                name='search'
                className='search-input'
                autoComplete='off'
                ref={ inputRef }
              />
            </div>
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
