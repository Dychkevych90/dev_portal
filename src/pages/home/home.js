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
                    <div className='categories'>
                      <div className='categories--title'>Категорії</div>
                      <div className="border" />
                      <ul className='categories_list'>
                        <li className='categories_list--item'>
                          <a>Html & Css</a>
                          <div className='count'>20</div>
                        </li>
                        <li className='categories_list--item'>
                          <a>JavaScript</a>
                          <div className='count'>10</div>
                        </li>
                        <li className='categories_list--item'>
                          <a>Git</a>
                          <div className='count'>2</div>
                        </li>
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
            <div className='social_block' style={ {
              background: 'rgb(62 62 62 / 100%)',
              height: '300px',
              margin: '10px',
              borderRadius: '5px',
              padding: '50px',
            } }>
              <div className='social_block--title'>Follow Us:</div>
              <div className='social_block--item'>Telegram</div>
              <div className='social_block--item'>Instagram</div>
              <div className='social_block--item'>YouTube</div>
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
