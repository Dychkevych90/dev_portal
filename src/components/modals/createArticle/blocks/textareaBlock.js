import React from 'react';

import { BlockWrapper } from './styled';

const TextAreaComponent = ( { onChange, add } ) => {
  return (
    <BlockWrapper>
      <textarea
        className='textarea'
        name="description"
        onChange={ onChange }
        placeholder='type text here...'
      ></textarea>

      <button className='add' type='button' onClick={ add }>Add Value</button>
    </BlockWrapper>
  );
};

export default TextAreaComponent;
