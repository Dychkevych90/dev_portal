import React, { useState } from 'react';
import { Routes, Route } from 'react-router';

import { ThemeProvider } from 'styled-components';

import Sidebar from '../sidebar/sidebar';
import Home from '../../pages/home/home';
import HtmlCss from '../../pages/html&css/htmlCss';

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
        </Routes>

        {/* eslint-disable-next-line max-len */}
        <div style={ {
          position: 'fixed',
          background: '#fff',
          width: '200px',
          right: '0',
          top: '0',
          flexDirection: 'column',
          display: 'flex',
        } }>
          <div>1. logo ?</div>
          <div>2. preloader</div>
          <div>3. add users block in sidebar</div>
          <div>4. particles ?</div>
          <div>5. add animated names if section</div>
          <div>6. add tags in each card ?</div>
          <div>7. add created date in cards</div>
          <div>8. add eye (count how many times article watches)</div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
