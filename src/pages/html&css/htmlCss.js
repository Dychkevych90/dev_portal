import React from 'react';

import { HtmlCssWrapper } from './styled.js';

const HtmlCss = ( { isMenuOpen } ) => {
  return (
    <HtmlCssWrapper isMenuOpen={ isMenuOpen }>
      <div className="container">
        <div className="row">
          <div className="column-12">i am html and css page</div>
        </div>
      </div>
    </HtmlCssWrapper>
  );
};

export default HtmlCss;
