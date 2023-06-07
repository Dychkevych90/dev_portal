import React, { useState } from 'react';

import { SingleArticle, CodeBlock, SocialMediaSharedBtnWrapper } from './styled.js';

import { useParams } from 'react-router';
// import articlesData from './../../articles.json';
import testArticle from './../../data.json';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ShareIcon from '@mui/icons-material/Share';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import CloseIcon from '@mui/icons-material/Close';

const SingleArticlePage = ( { isMenuOpen } ) => {
  const { id } = useParams();
  const [ hasClass, setHasClass ] = useState( false );

  const article = testArticle.find( ( article ) => article.id === Number( id ) );
  const articleUrl = window.location.href;

  const toggleClass = () => {
    setHasClass( !hasClass );
  };

  const handleShareTelegram = () => {
    const encodedUrl = encodeURIComponent( articleUrl );
    // eslint-disable-next-line max-len
    const encodedBannerUrl = encodeURIComponent( 'https://firebasestorage.googleapis.com/v0/b/dev-portal-5dbdc.appspot.com/o/html.jpg?alt=media&token=4ef29795-3110-4b85-8f81-a4b248fd8ac7&_gl=1*1pdbxu*_ga*Mzc3MDI0MjEwLjE2ODU2MDc0MjI.*_ga_CW55HF8NVT*MTY4NTYxMTUxNy4yLjEuMTY4NTYxNjMxOS4wLjAuMA..' );
    // eslint-disable-next-line max-len
    const telegramUrl = `https://t.me/share/url?url=${encodedUrl}&text=${article.title}&photo=${encodedBannerUrl}`;

    // Open Telegram share dialog in a new window or tab
    window.open( telegramUrl );
  };

  const shareOnFacebook = () => {
    // eslint-disable-next-line max-len
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent( articleUrl )}&picture=${encodeURIComponent( article.banner )}`;
    window.open( url, '_blank' );
  };

  const shareOnInstagram = () => {
    const encodedUrl = encodeURIComponent( articleUrl );
    // eslint-disable-next-line max-len
    const url = `https://www.instagram.com/?url=${encodeURIComponent( encodedUrl )}&caption=${encodeURIComponent( article.text )}&media=${encodeURIComponent( article.banner )}`;
    window.open( url, '_blank' );
  };

  return (
    <SingleArticle isMenuOpen={ isMenuOpen }>
      <div className="main_block">
        <img className='main_block--image' src={ article.banner } alt="image"/>
        <div className="title">{article.title}</div>

        <SocialMediaSharedBtnWrapper
          className={ hasClass && 'active' }
        >
          <div className="btn_container">
            <button className='link item telegram' onClick={ handleShareTelegram }>
              <TelegramIcon />
            </button>
            <button className='link item instagram' onClick={ shareOnInstagram }>
              <InstagramIcon />
            </button>
            <button className='link item facebook' onClick={ shareOnFacebook }>
              <FacebookIcon />
            </button>
            <button className='btn' onClick={ toggleClass }>
              {hasClass ? <CloseIcon/> : <ShareIcon/>}
            </button>
          </div>
        </SocialMediaSharedBtnWrapper>


      </div>
      <div className="container">
        <div className='row' >
          {
            article.content.map( ( section, sectionIndex ) => {
              console.log( 'section', section );
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
    </SingleArticle>
  );
};

export default SingleArticlePage;
