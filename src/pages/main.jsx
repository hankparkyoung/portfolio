import React from 'react';

import '../styles/main.scss';
import githubLogo from '../assets/github-logo.png';
import linkedinLogo from '../assets/linkedin-logo.png';
import gmailLogo from '../assets/gmail-logo.png';

const Main = () => {
  // to-do: change certain divs to the correct semantic tags
return (
<div className='main'>
  <div className='hero'>
    <div className='hero__overlay'>
      <div className='hero__content'>
        <h1 className='hero__content__header'>
          Hank Park
        </h1>
        <div className='hero__content__contacts'>
          <a className='hero__content__row' href='https://github.com/hankparkyoung'>
            <img className='hero__content__logo' alt='github logo' src={githubLogo} />
            <p className='hero__content__contact'>hankparkyoung</p>
          </a>
          <a className='hero__content__row' href='https://www.linkedin.com/in/hankparkyoung/'>
            <img className='hero__content__logo' alt='linkedin logo' src={linkedinLogo} />
            <p className='hero__content__contact'>hankparkyoung</p>
          </a>
          <a className='hero__content__row' href='mailto:hankparkyoung@gmail.com'>
            <img className='hero__content__logo' alt='gmail logo' src={gmailLogo} />
            <p className='hero__content__contact'>hankparkyoung</p>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="intro">
    <p>Work in progress</p>
  </div>
</div>
);
};

export default Main;