import React from 'react';

import ShareButtons from './shareBtn/shareButtons';

const RenderExamplesComponents = ( articleId ) => {
  switch ( articleId.articleId ) {
    case 3:
      return <ShareButtons/>;

    default:
      return null;
  }
};

export default RenderExamplesComponents;
