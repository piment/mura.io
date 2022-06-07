import React from 'react';

function Footer() {
  return (
    <footer>
      <div id='credit'>
        <p className='copyright'>
          Background photo by{' '}
          <a
            href='https://unsplash.com/@jaymantri?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
            target='self'
          >
            Jay Mantri
          </a>{' '}
          on{' '}
          <a
            href='https://unsplash.com/backgrounds/nature/landscape?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
            target='self'
          >
            Unsplash
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
