import React from 'react';

import { ReactPageWrapper } from './styled.js';

const ReactPage = ( { isMenuOpen } ) => {
  return (
    <ReactPageWrapper isMenuOpen={ isMenuOpen }>
      <div className="container" style={ { paddingLeft: '0' } }>
        <div className="row">
          <div className="column column-12" style={ { paddingLeft: '0' } }>
            <div className="section_title">React</div>
          </div>
        </div>
      </div>
    </ReactPageWrapper>
  );
};

export default ReactPage;
