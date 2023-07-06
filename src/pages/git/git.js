import React from 'react';

import { GitPageWrapper } from './styled';

const GitPage = ( { isMenuOpen } ) => {
  return (
    <GitPageWrapper isMenuOpen={ isMenuOpen }>
      <div className="container" style={ { paddingLeft: '0' } }>
        <div className="row">
          <div className="column column-12" style={ { paddingLeft: '0' } }>
            <div className="section_title">Git & Github</div>
          </div>
        </div>
      </div>
    </GitPageWrapper>
  );
};

export default GitPage;
