import React from 'react';

import { SingleArticle, CodeBlock } from './styled.js';
import JSmath from '../../assets/images/html.jpg';

const SingleArticlePage = ( { isMenuOpen } ) => {
  return (
    <SingleArticle isMenuOpen={ isMenuOpen }>
      <div className="main_block">
        <img className='main_block--image' src={ JSmath } alt="image"/>
        <div className="title">JavaScript Math</div>
      </div>
      <div className="container">
        <div className="row">
          <div className="column column-12">
            <div className='small_title'>
              Math
              <span className='text_color-aqua'>.PI</span>
            </div>
            <div className="desc">Повертає число РI:</div>
            <CodeBlock>
              <div className="top">
                <div className="dot"/>
                <div className="dot"/>
                <div className="dot"/>
              </div>
              <div className="bottom">
                <div className="code_row">
                  <div className='text text_color-violet'>Math.PI</div>
                  {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                  <span className='console_log_color'>// 3.141592653589793</span>
                </div>
              </div>
            </CodeBlock>
          </div>
        </div>
        <div className="row">
          <div className="column column-12">
            <div className='small_title'>
              Math
              <span className='text_color-aqua'>.round(x)</span>
            </div>
            <div className="desc">Округляє число до найближчого цілого.:</div>
            <CodeBlock>
              <div className="top">
                <div className="dot"/>
                <div className="dot"/>
                <div className="dot"/>
              </div>
              <div className="bottom">
                <div className="code_row">
                  <div className='text text_color-violet'>
                    Math
                    <span className='text_color-green'>.round(</span>
                    4.6
                    <span className='text_color-green'>)</span>
                  </div>
                  {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                  <span className='console_log_color'>// 5</span>
                </div>
                <div className="code_row">
                  <div className='text text_color-violet'>
                    Math
                    <span className='text_color-green'>.round(</span>
                    4.4
                    <span className='text_color-green'>)</span>
                  </div>
                  {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                  <span className='console_log_color'>// 4</span>
                </div>
              </div>
            </CodeBlock>
          </div>
        </div>
      </div>
    </SingleArticle>
  );
};

export default SingleArticlePage;
