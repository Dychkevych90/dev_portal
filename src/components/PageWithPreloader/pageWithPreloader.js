import React, { useEffect, useState } from 'react';
import Preloader from '../preloader/preloader';

const PageWithPreloader = ( WrappedComponent, isMenuOpen ) => {
  const WithPreloader = ( props ) => {
    const [ isLoading, setIsLoading ] = useState( true );
    // eslint-disable-next-line no-unused-vars
    const [ progress, setProgress ] = useState( 0 );

    useEffect( () => {
      const images = document.querySelectorAll( 'img' );
      const totalImages = images.length;
      let loadedImages = 0;

      const handleImageLoad = () => {
        loadedImages++;
        const progressPercentage = ( 1 / totalImages ) * 100;
        setProgress( progressPercentage );

        if ( loadedImages === totalImages ) {
          setTimeout( () => {
            setIsLoading( false );
          }, 500 );
        }
      };

      images.forEach( ( img ) => {
        if ( img.complete ) {
          handleImageLoad();
        } else {
          img.addEventListener( 'load', handleImageLoad );
        }
      } );

      return () => {
        images.forEach( ( img ) => {
          img.removeEventListener( 'load', handleImageLoad );
        } );
      };
    }, [] );

    return isLoading ? <Preloader /> : <WrappedComponent isMenuOpen={ isMenuOpen } />;
  };

  return WithPreloader;
};

export default PageWithPreloader;
