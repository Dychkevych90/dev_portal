import React from 'react';
import { BlockWrapper } from './styled';

const CodeComponent = ( { onChange, add } ) => {
  return (
    <BlockWrapper>
      <textarea
        className='textarea'
        name="description"
        onChange={ onChange }
        placeholder='type code here...'
      ></textarea>

      <button className='add' type='button' onClick={ add }>Add Value</button>
    </BlockWrapper>
  );
};

export default CodeComponent;
