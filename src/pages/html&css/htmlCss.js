import React from 'react';

import { HtmlCssWrapper } from './styled.js';
import Card from '../../components/card/card';

const HtmlCss = ( { isMenuOpen } ) => {
  return (
    <HtmlCssWrapper isMenuOpen={ isMenuOpen }>
      <div className="container" style={ { paddingLeft: '0' } }>
        <div className="row">
          <div className="column column-12" style={ { paddingLeft: '0' } }>
            <div className="section_title">HTML & CSS</div>
          </div>
        </div>
        <div className="row">
          <div className="column column-3"><Card/></div>
          <div className="column column-3"><Card/></div>
          <div className="column column-3"><Card/></div>
          <div className="column column-3"><Card/></div>
          <div className="column column-3"><Card/></div>
        </div>
      </div>
    </HtmlCssWrapper>
  );
};

export default HtmlCss;
