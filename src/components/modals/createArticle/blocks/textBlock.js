import React from 'react';

import { BlockWrapper } from './styled';

const TextComponent = ( { onChange, add } ) => {
  return (
    <BlockWrapper>
      <input
        type="text"
        placeholder='title'
        name='title'
        onChange={ onChange }
      />

      <button className='add' type='button' onClick={ add }>Add Value</button>
    </BlockWrapper>
  );
};

export default TextComponent;
