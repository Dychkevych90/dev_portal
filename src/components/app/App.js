import React, { useState } from 'react';
import { Routes, Route } from 'react-router';

import { ThemeProvider } from 'styled-components';

import Sidebar from '../sidebar/sidebar';
import Home from '../../pages/home/home';
import HtmlCss from '../../pages/html&css/htmlCss';
import SingleArticlePage from '../../pages/singleArticlePage/singleArticlePage';
import JavaScript from '../../pages/javaScript/javaScript';
import ReactPage from '../../pages/react/react';
import PageWithPreloader from '../PageWithPreloader/pageWithPreloader';
import Git from '../../pages/git/git';
import Blog from '../../pages/blog/blog';
import About from '../../pages/about/about';
import AdminPage from '../../pages/admin/admin';

import GlobalStyles from '../../mainStyles';
import { lightTheme, darkTheme } from '../../mainStyles';

import test from '../../assets/images/test123.png';

const App = () => {
  const [ isMenuOpen, setIsMenuOpen ] = useState( true );
  const [ themeMode, setThemeMode ] = useState( 'dark' );


  // eslint-disable-next-line new-cap
  const HomePageWithPreloader = PageWithPreloader( Home, isMenuOpen );
  // eslint-disable-next-line new-cap
  const HtmlCssPageWithPreloader = PageWithPreloader( HtmlCss, isMenuOpen );
  // eslint-disable-next-line new-cap
  const JSPageWithPreloader = PageWithPreloader( JavaScript, isMenuOpen );
  // eslint-disable-next-line new-cap
  const ReactPageWithPreloader = PageWithPreloader( ReactPage, isMenuOpen );
  // eslint-disable-next-line new-cap
  const SingleArticlePageWithPreloader = PageWithPreloader( SingleArticlePage, isMenuOpen );
  // eslint-disable-next-line new-cap
  const GitPageWithPreloader = PageWithPreloader( Git, isMenuOpen );
  // eslint-disable-next-line new-cap
  const BlogPageWithPreloader = PageWithPreloader( Blog, isMenuOpen );
  // eslint-disable-next-line new-cap
  const AboutPageWithPreloader = PageWithPreloader( About, isMenuOpen );

  const toggleTheme = ( ) => {
    setThemeMode( ( prevMode ) => ( prevMode === 'light' ? 'dark' : 'light' ) );
  };

  const theme = themeMode === 'light' ? lightTheme : darkTheme;

  return (
    <>
      <ThemeProvider theme={ theme }>
        <GlobalStyles />

        <Sidebar
          setIsMenuOpen={ setIsMenuOpen }
          toggleTheme={ toggleTheme }
          themeMode={ themeMode }
        />

        <Routes>
          <Route exact path='/' element={ <HomePageWithPreloader /> }/>
          <Route exact path='/html-and-css' element={ <HtmlCssPageWithPreloader/> }/>
          <Route exact path='/javascript' element={ <JSPageWithPreloader/> }/>
          <Route exact path='/react' element={ <ReactPageWithPreloader/> }/>
          <Route exact path='/git&github' element={ <GitPageWithPreloader/> }/>
          <Route exact path='/blog' element={ <BlogPageWithPreloader/> }/>
          <Route exact path='/about' element={ <AboutPageWithPreloader/> }/>
          <Route exact path='/admin' element={ <AdminPage isMenuOpen={ isMenuOpen }/> }/>
          <Route exact path='/article/:category/:id' element={ <SingleArticlePageWithPreloader/> }/>
        </Routes>

        <img src={ test } alt="" style={ {
          objectFit: 'cover',
          opacity: .3,
          width: '600px',
          height: '600px',
          position: 'fixed',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: '-100',
        } }/>


        {/* TODO: 1. create telegram ? */}
        {/* TODO: 2  create instagram ? */}
        {/* TODO: 3. create youtube ? */}
        {/* TODO: 4. add searching in main page and each category page */}
        {/* TODO: 6. create category page ? */}
        {/* TODO: 8. need to add in sidebar section with other category ?! */}
        {/* TODO: 9. create admin page ? */}
        {/* TODO: 10. connect to BFF ?! */}
      </ThemeProvider>
    </>
  );
};

export default App;

