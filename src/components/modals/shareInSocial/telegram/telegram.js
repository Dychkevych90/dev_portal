import React from 'react';

const ShareArticle = ( { articleUrl, bannerImageUrl } ) => {
  const handleShareTelegram = () => {
    const encodedUrl = encodeURIComponent( articleUrl );
    const encodedBannerUrl = encodeURIComponent( bannerImageUrl );
    // eslint-disable-next-line max-len
    const telegramUrl = `https://t.me/share/url?url=${encodedUrl}&text=Check out this article!&photo=${encodedBannerUrl}`;

    // Open Telegram share dialog in a new window or tab
    window.open( telegramUrl );
  };

  return (
    <div>
      <p>Check out this article:</p>
      <a href={ articleUrl } target="_blank" rel="noopener noreferrer">
        <img src={ bannerImageUrl } alt="Article Banner" />
      </a>
      <button onClick={ handleShareTelegram }>Share on Telegram</button>
    </div>
  );
};

export default ShareArticle;
