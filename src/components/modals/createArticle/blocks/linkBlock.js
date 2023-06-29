import React from 'react';

import { BlockWrapper } from './styled';

const LinkComponent = ( { onChange, add } ) => {
  return (
    <BlockWrapper>
      <input
        type="text"
        placeholder='link text: link'
        name='link'
        onChange={ onChange }
      />

      <button className='add' type='button' onClick={ add }>Add Value</button>
    </BlockWrapper>
  );
};

export default LinkComponent;
