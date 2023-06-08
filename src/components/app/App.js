import React, { useCallback, useState } from 'react';
import { Routes, Route } from 'react-router';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

import { ThemeProvider } from 'styled-components';

import Sidebar from '../sidebar/sidebar';
import Home from '../../pages/home/home';
import HtmlCss from '../../pages/html&css/htmlCss';
import SingleArticlePage from '../../pages/singleArticlePage/singleArticlePage';
import JavaScript from '../../pages/javaScript/javaScript';
import ReactPage from '../../pages/react/react';

import GlobalStyles from '../../mainStyles';
import { lightTheme, darkTheme } from '../../mainStyles';

const App = () => {
  const [ isMenuOpen, setIsMenuOpen ] = useState( true );
  const [ themeMode, setThemeMode ] = useState( 'dark' );

  const toggleTheme = ( ) => {
    setThemeMode( ( prevMode ) => ( prevMode === 'light' ? 'dark' : 'light' ) );
  };

  const theme = themeMode === 'light' ? lightTheme : darkTheme;

  const particlesInit = useCallback( async ( engine ) => {
    console.log( engine );
    await loadFull( engine );
  }, [] );

  const particlesLoaded = useCallback( async ( container ) => {
    await console.log( container );
  }, [] );

  return (
    <>
      <ThemeProvider theme={ theme }>
        <GlobalStyles />

        {/* eslint-disable-next-line max-len */}
        <Sidebar setIsMenuOpen={ setIsMenuOpen } toggleTheme={ toggleTheme } themeMode={ themeMode }/>

        <Routes>
          <Route exact path='/' element={ <Home isMenuOpen={ isMenuOpen }/> }/>
          <Route exact path='/html-and-css' element={ <HtmlCss isMenuOpen={ isMenuOpen }/> }/>
          <Route exact path='/javascript' element={ <JavaScript isMenuOpen={ isMenuOpen }/> }/>
          <Route exact path='/react' element={ <ReactPage isMenuOpen={ isMenuOpen }/> }/>
          {/* eslint-disable-next-line max-len */}
          <Route exact path='/article/:category/:id' element={ <SingleArticlePage isMenuOpen={ isMenuOpen }/> }/>
        </Routes>

        <Particles
          id="tsparticles"
          init={ particlesInit }
          loaded={ particlesLoaded }
          options={ {
            fpsLimit: 120,
            particles: {
              color: {
                value: '#ccc',
              },
              links: {
                color: '#fff',
                distance: 200,
                enable: true,
                opacity: 0.3,
                width: 0.5,
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'bounce',
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.2,
              },
              shape: {
                type: 'circle',
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
          } }
        />

        {/* TODO: 1. logo ? */}
        {/* TODO: 2. preloader */}
        {/* TODO: 4. particles ? */}
        {/* TODO: 6. add tags in each card ? */}
      </ThemeProvider>
    </>
  );
};

export default App;

