import React, { useState } from 'react';
import { Routes, Route } from 'react-router';

import { ThemeProvider } from 'styled-components';

import Sidebar from '../sidebar/sidebar';
import Home from '../../pages/home/home';
import HtmlCss from '../../pages/html&css/htmlCss';
import SingleArticlePage from '../../pages/singleArticlePage/singleArticlePage';

import GlobalStyles from '../../mainStyles';
import { lightTheme, darkTheme } from '../../mainStyles';

const App = () => {
  const [ isMenuOpen, setIsMenuOpen ] = useState( true );
  const [ themeMode, setThemeMode ] = useState( 'dark' );

  const toggleTheme = ( ) => {
    setThemeMode( ( prevMode ) => ( prevMode === 'light' ? 'dark' : 'light' ) );
  };

  const theme = themeMode === 'light' ? lightTheme : darkTheme;

  return (
    <>
      <ThemeProvider theme={ theme }>
        <GlobalStyles />

        {/* eslint-disable-next-line max-len */}
        <Sidebar setIsMenuOpen={ setIsMenuOpen } toggleTheme={ toggleTheme } themeMode={ themeMode }/>

        <Routes>
          <Route exact path='/' element={ <Home isMenuOpen={ isMenuOpen }/> }/>
          <Route exact path='/html-and-css' element={ <HtmlCss isMenuOpen={ isMenuOpen }/> }/>
          {/* eslint-disable-next-line max-len */}
          <Route exact path='/article' element={ <SingleArticlePage isMenuOpen={ isMenuOpen }/> }/>
        </Routes>

        {/* TODO: 1. logo ? */}
        {/* TODO: 2. preloader */}
        {/* TODO: 4. particles ? */}
        {/* TODO: 6. add tags in each card ? */}
      </ThemeProvider>
    </>
  );
};

export default App;

