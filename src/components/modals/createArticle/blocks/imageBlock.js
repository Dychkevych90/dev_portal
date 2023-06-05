import React from 'react';

import { BlockWrapper } from './styled';

const ImageComponent = ( { onChange, add } ) => {
  return (
    <BlockWrapper>
      <input
        type="file"
        placeholder='title'
        name='image'
        onChange={ onChange }
      />

      <button className='add' onClick={ add }>Add Value</button>
    </BlockWrapper>
  );
};

export default ImageComponent;
