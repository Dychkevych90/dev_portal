import React from 'react';

import { JavascriptWrapper } from './styled.js';
// import articlesData from './../../articles.json';
import testArticle from './../../data.json';
import Card from '../../components/card/card';

const JavaScript = ( { isMenuOpen } ) => {
  return (
    <JavascriptWrapper isMenuOpen={ isMenuOpen }>
      <div className="container" style={ { paddingLeft: '0' } }>
        <div className="row">
          <div className="column column-12" style={ { paddingLeft: '0' } }>
            <div className="section_title">JavaScript</div>
          </div>
        </div>
        <div className="row">
          {
            testArticle.map( ( item ) => {
              return (
                <div className="column column-3" key={ item.id }><Card data={ item }/></div>
              );
            } )
          }
        </div>
      </div>
    </JavascriptWrapper>
  );
};

export default JavaScript;
