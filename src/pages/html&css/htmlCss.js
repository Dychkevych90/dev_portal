import React from 'react';

import { HtmlCssWrapper } from './styled.js';

const HtmlCss = ( { isMenuOpen } ) => {
  return (
    <HtmlCssWrapper isMenuOpen={ isMenuOpen }>
      <div className="container" style={ { paddingLeft: '0' } }>
        <div className="row">
          <div className="column column-12" style={ { paddingLeft: '0' } }>
            <div className="section_title">HTML & CSS</div>
          </div>
        </div>
      </div>
    </HtmlCssWrapper>
  );
};

export default HtmlCss;
