import React from 'react';

import { SingleArticle, CodeBlock } from './styled.js';

import { useParams } from 'react-router';
import articlesData from './../../data.json';

const SingleArticlePage = ( { isMenuOpen } ) => {
  const { id } = useParams();
  const article = articlesData.find( ( article ) => article.id === Number( id ) );
  console.log( 'article', article );
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
              return section.fields.map( ( field, fieldIndex ) => {
                console.log( 'field', field );
                return (
                  <div className={ `column ${article.classes}` } key={ fieldIndex }>
                    <div className='small_title'>
                      {field.value}
                    </div>
                    <div className="desc">{field.description}</div>
                    <CodeBlock>
                      <div className="top">
                        <div className="dot"/>
                        <div className="dot"/>
                        <div className="dot"/>
                      </div>
                      <div className="bottom">
                        {/* {Object.values( block.code ).map( ( codeValue, index ) => ( */}
                        {/*   <div className="code_row" key={ index }> */}
                        {/*     <SyntaxHighlighter */}
                        {/*       customStyle={ { */}
                        {/*         backgroundColor: 'transparent', */}
                        {/*         padding: '0', */}
                        {/*         margin: '0 10px 0 0', */}
                        {/*       } } */}
                        {/*       language="javascript" */}
                        {/*       style={ vscDarkPlus } */}
                        {/*       className='code' */}
                        {/*     > */}
                        {/*       {codeValue.method} */}
                        {/*     </SyntaxHighlighter> */}
                        {/*     <span className='console_log_color'>{codeValue.output}</span> */}
                        {/*   </div> */}
                        {/* ) )} */}
                      </div>
                    </CodeBlock>
                  </div>
                );
              } );
            } )
            // article.content.map( ( item ) =>
            //   Object.values( item ).map( ( block ) => {
            //     return (
            //       <div className={ `column ${article.classes}` } key={ block.id }>
            //         <div className='small_title'>
            //           {block.small_title}
            //         </div>
            //         <div className="desc">{block.desc}</div>
            //         <CodeBlock>
            //           <div className="top">
            //             <div className="dot"/>
            //             <div className="dot"/>
            //             <div className="dot"/>
            //           </div>
            //           <div className="bottom">
            //             {Object.values( block.code ).map( ( codeValue, index ) => (
            //               <div className="code_row" key={ index }>
            //                 <SyntaxHighlighter
            //                   customStyle={ {
            //                     backgroundColor: 'transparent',
            //                     padding: '0',
            //                     margin: '0 10px 0 0',
            //                   } }
            //                   language="javascript"
            //                   style={ vscDarkPlus }
            //                   className='code'
            //                 >
            //                   {codeValue.method}
            //                 </SyntaxHighlighter>
            //                 <span className='console_log_color'>{codeValue.output}</span>
            //               </div>
            //             ) )}
            //           </div>
            //         </CodeBlock>
            //       </div>
            //     );
            //   } ),
            // )
          }
        </div>
      </div>
    </SingleArticle>
  );
};

export default SingleArticlePage;
