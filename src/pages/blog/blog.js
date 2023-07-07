import React from 'react';
import { BlogPageWrapper } from './styled';

const Blog = ( { isMenuOpen } ) => {
  return (
    <BlogPageWrapper isMenuOpen={ isMenuOpen }>
      <div className="container" style={ { paddingLeft: '0' } }>
        <div className="row">
          <div className="column column-12" style={ { paddingLeft: '0' } }>
            <div className="section_title">Статті</div>
          </div>
        </div>
      </div>
    </BlogPageWrapper>
  );
};

export default Blog;
