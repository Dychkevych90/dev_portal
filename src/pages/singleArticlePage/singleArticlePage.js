import React from 'react';

import { SingleArticle, CodeBlock } from './styled.js';

import { useParams } from 'react-router';
// import articlesData from './../../articles.json';
import testArticle from './../../data.json';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const SingleArticlePage = ( { isMenuOpen } ) => {
  const { id } = useParams();
  const article = testArticle.find( ( article ) => article.id === Number( id ) );
  console.log( 'testArticle', testArticle );
  return (
    <SingleArticle isMenuOpen={ isMenuOpen }>
      <div className="main_block">
        <img className='main_block--image' src={ article.banner } alt="image"/>
        <div className="title">{article.title}</div>
      </div>
      <div className="container">
        <div className='row' >
          {
            article.content.map( ( section, sectionIndex ) => {
              return (
                <div className={ `column ${section.classes}` } key={ sectionIndex }>
                  <div className='small_title'>
                    {section.title}
                  </div>
                  <div className="desc">{section.description}</div>
                  <CodeBlock>
                    <div className="top">
                      <div className="dot"/>
                      <div className="dot"/>
                      <div className="dot"/>
                    </div>
                    <div className="bottom">
                      <SyntaxHighlighter
                        customStyle={ {
                          backgroundColor: 'transparent',
                          padding: '0',
                          margin: '0 10px 0 0',
                        } }
                        language="javascript"
                        style={ vscDarkPlus }
                        className='code'
                      >
                        {section.code}
                      </SyntaxHighlighter>
                    </div>
                  </CodeBlock>
                </div>
              );
            } )
          }
        </div>
      </div>
    </SingleArticle>
  );
};

export default SingleArticlePage;
