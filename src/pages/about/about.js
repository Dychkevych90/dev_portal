import React from 'react';
import { AboutPageWrapper } from './styled';

const About = ( { isMenuOpen } ) => {
  return (
    <AboutPageWrapper isMenuOpen={ isMenuOpen }>
      <div className="container" style={ { paddingLeft: '0' } }>
        <div className="row">
          <div className="column column-12" style={ { paddingLeft: '0' } }>
            <div className="section_title">Про нас</div>
          </div>
        </div>
      </div>
    </AboutPageWrapper>
  );
};

export default About;
