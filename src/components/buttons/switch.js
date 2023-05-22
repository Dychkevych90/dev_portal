import React from 'react';

import { SwitchWrapper } from './styled.js';

const SwitchButton = ( { checked, toggleTheme } ) => {
  return (
    <SwitchWrapper
      className={ `switcher ${checked === 'dark' ? 'off' : 'on'}` }
      onClick={ toggleTheme }
    >
      <span className="slider" />
    </SwitchWrapper>
  );
};

export default SwitchButton;
