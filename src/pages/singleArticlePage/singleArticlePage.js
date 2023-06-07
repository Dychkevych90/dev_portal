import React from 'react';
import { useParams } from 'react-router';

import ShareButtons from '../../components/examples/shareBtn/shareButtons';
import RenderExamplesComponents from '../../components/examples/renderExamplesComponents';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { SingleArticle, CodeBlock } from './styled.js';

import testArticle from './../../data.json';

const SingleArticlePage = ( { isMenuOpen } ) => {
  const { id } = useParams();
  const articleUrl = window.location.href;
  const article = testArticle.find( ( article ) => article.id === Number( id ) );

  return (
    <SingleArticle isMenuOpen={ isMenuOpen }>
      <div className="main_block">
        <img className='main_block--image' src={ article.banner } alt="image"/>
        <div className="title">{article.title}</div>

        <ShareButtons url={ articleUrl } title={ article.title }/>

      </div>
      <div className="container">
        <div className='row' >
          {
            article.content.map( ( section, sectionIndex ) => {
              return (
                <div className={ `column ${article.classes}` } key={ sectionIndex }>
                  <div className='small_title'>
                    {section.title}
                  </div>
                  <div className="desc">{section.text}</div>
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

      <div className='example_block' style={ { position: 'relative' } }>
        <div className="container">
          <div className="row">
            <div className="column lolumn-12">
              Example:
            </div>
          </div>
          <div className="row">
            <div className="column">
              <RenderExamplesComponents articleId={ article.id }/>
            </div>
          </div>
        </div>
      </div>
    </SingleArticle>
  );
};

export default SingleArticlePage;
