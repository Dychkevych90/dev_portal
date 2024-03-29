import React, { useRef, useState } from 'react';

import Card from '../../components/card/card';

import { HomeWrapper } from './styled.js';

import SearchIcon from '@mui/icons-material/Search';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

import testArticle from '../../data.json';
import { NavLink } from 'react-router-dom';

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
                  <div className='post_block articles'>
                    <div className="post_block--title">Нещодавні публікації</div>

                    <div className="border" />

                    <div className="post_block--list articles--list">
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
                      opacity: '0.8',
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
                          <NavLink to='/html-and-css'>Html & Css </NavLink>

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
            <div className='blog_section articles'>
              <div className="blog_section--title">Статті</div>

              <div className="border" />

              <div className="blog_section--list articles--list">
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
            <div className='social_block'>
              <div className='social_block--title'>Follow Us:</div>

              <div className="border" />
              <div className='social_list'>
                <a href='#' target='_blank' className='social_list--item'>
                  <TelegramIcon/>
                </a>

                <a href='#' target='_blank' className='social_list--item unactive'>
                  <InstagramIcon/>
                </a>

                <a href='#' target='_blank' className='social_list--item unactive'>
                  <YouTubeIcon/>
                </a>
              </div>
            </div>
          </div>

          <div className="column-12">
            <div className='footer'>
              <div className="left">
                Всі права захищені© 2023
              </div>
              <div className="right social_icons">
                <a
                  target='_blank'
                  href="mailto:dychkevych.kolya@gmail.com"
                  rel="noreferrer"
                  className='link'
                >
                  <EmailIcon/>
                </a>
                <a
                  target='_blank'
                  href="https://www.linkedin.com/in/dychkevych"
                  rel="noreferrer"
                  className='link unactive'
                >
                  <LinkedInIcon/>
                </a>
                <a
                  target='_blank'
                  href="https://t.me/Dychkevych"
                  rel="noreferrer"
                  className='link'
                >
                  <TelegramIcon/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeWrapper>
  );
};

export default Home;
