import React from 'react';

import { CustomCover } from './styled.js';

const CustomCoverJS = ( { data } ) => {
  console.log( 'data', data.category );
  const renderIcons = () => {
    switch ( data.category ) {
      case 'JavaScript':
        {/* eslint-disable-next-line max-len */}
        return <svg className='icon' viewBox="0 0 32 32" fill="currentColor" height="1em" width="1em"><path fill="gold" d="M.384.67v31.296H31.68V.67H.384zm16.334 26.772c-.461.937-1.342 1.553-2.362 1.85-1.568.36-3.067.155-4.183-.515-.747-.458-1.33-1.163-1.725-1.975.794-.485 1.586-.973 2.38-1.458.021.009.083.122.167.268.303.509.565.869 1.08 1.121.506.172 1.615.283 2.044-.607.262-.452.178-1.936.178-3.545 0-2.529.012-5.016.012-7.576h2.927c0 2.688.015 5.383 0 8.067.006 1.645.149 3.14-.518 4.369zm12.144-.827c-1.017 3.481-6.691 3.594-8.957 1.294-.479-.541-.779-.824-1.065-1.449 1.205-.693 1.205-.693 2.377-1.371.637.979 1.226 1.517 2.285 1.737 1.437.175 2.883-.318 2.559-1.844-.333-1.247-2.942-1.55-4.718-2.883-1.803-1.211-2.225-4.153-.744-5.834.494-.622 1.336-1.086 2.219-1.309l.922-.119c1.77-.036 2.877.431 3.689 1.339.226.229.41.476.756 1.012-.943.601-.94.595-2.291 1.47-.289-.622-.767-1.012-1.273-1.181-.785-.238-1.776.021-1.981.851-.071.256-.056.494.057.916.318.726 1.386 1.041 2.344 1.481 2.758 1.119 3.689 2.317 3.918 3.745.22 1.229-.054 2.026-.095 2.145z"></path></svg>;

      case 'Css':
        {/* eslint-disable-next-line max-len */}
        return <svg className='icon css' viewBox="0 0 32 32" fill="currentColor" height="1em" width="1em"><path fill="currentColor" d="M16.017 21.044zM4.743 3.519L6.792 26.5l9.194 2.552 9.22-2.556 2.051-22.977H4.743zM23 8.775l-.693 7.767-.48 5.359-.042.476-5.781 1.603-5.773-1.603-.395-4.426h2.829l.201 2.248 3.142.847.008-.002h.002l3.134-.846.329-3.655h-6.579l-.056-.633-.129-1.429-.067-.756h7.081l.258-2.886H9.203l-.056-.634-.129-1.429-.067-.756h14.118l-.068.756z"></path></svg>;

      default:
        return null;
    }
  };

  return (
    <CustomCover>
      <div className='pill'>{data.category}</div>
      <div className="title">{data.title}</div>
      <div className="icons_block">

        { renderIcons() }
        {/* eslint-disable-next-line max-len */}
        {/* <svg className='icon' viewBox="0 0 32 32" fill="currentColor" height="1em" width="1em"><path fill="currentColor" d="M4.665 3.411l2.063 23.176 9.258 2.574 9.284-2.578 2.065-23.172H4.664zm4.286 5.5l-.068-.763h7.107v2.842h-4.005l.259 2.911h3.746v2.842H9.649L8.951 8.91zm13.567 5.754l-.667 7.483-.043.48-5.822 1.616-5.814-1.616-.398-4.463h2.849l.202 2.267 3.163.854 3.165-.856.329-3.686h-3.485v-2.842h6.587l-.069.763zm.514-5.754l-.129 1.441-.057.639H16V8.149h7.1l-.068.762z"></path></svg> */}
      </div>
    </CustomCover>
  );
};

export default CustomCoverJS;
