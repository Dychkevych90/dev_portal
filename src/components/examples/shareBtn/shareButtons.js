import React, { useState } from 'react';

import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import CloseIcon from '@mui/icons-material/Close';
import ShareIcon from '@mui/icons-material/Share';

import { SocialMediaSharedBtnWrapper } from './styled';

const ShareButtons = ( { title = '', banner = null, url= '' } ) => {
  const [ hasClass, setHasClass ] = useState( false );

  const toggleClass = () => {
    setHasClass( !hasClass );
  };

  const handleShareTelegram = () => {
    const encodedUrl = encodeURIComponent( url );
    // eslint-disable-next-line max-len
    const encodedBannerUrl = encodeURIComponent( 'https://firebasestorage.googleapis.com/v0/b/dev-portal-5dbdc.appspot.com/o/html.jpg?alt=media&token=4ef29795-3110-4b85-8f81-a4b248fd8ac7&_gl=1*1pdbxu*_ga*Mzc3MDI0MjEwLjE2ODU2MDc0MjI.*_ga_CW55HF8NVT*MTY4NTYxMTUxNy4yLjEuMTY4NTYxNjMxOS4wLjAuMA..' );
    // eslint-disable-next-line max-len
    const telegramUrl = `https://t.me/share/url?url=${encodedUrl}&text=${title}&photo=${encodedBannerUrl}`;

    // Open Telegram share dialog in a new window or tab
    window.open( telegramUrl );
  };

  const shareOnFacebook = () => {
    // eslint-disable-next-line max-len
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent( url )}&picture=${encodeURIComponent( banner )}`;
    window.open( url, '_blank' );
  };

  const shareOnInstagram = () => {
    const encodedUrl = encodeURIComponent( url );
    // eslint-disable-next-line max-len
    const url = `https://www.instagram.com/?url=${encodeURIComponent( encodedUrl )}&caption=${encodeURIComponent( title )}&media=${encodeURIComponent( banner )}`;
    window.open( url, '_blank' );
  };

  return (
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
  );
};

export default ShareButtons;
