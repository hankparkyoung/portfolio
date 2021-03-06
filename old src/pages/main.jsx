import React from 'react';

import '../styles/main.scss';
import githubLogo from '../assets/github-logo.png';
import linkedinLogo from '../assets/linkedin-logo.png';
import gmailLogo from '../assets/gmail-logo.png';

const Main = () => {
return (
<div className='main'>
  <div className='hero'>
    <div className='hero__title'>
      <h1>Hank</h1>
      <h1>Park</h1>
    </div>
    {/* <div className='hero__content__contacts'>
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
    </div> */}
  </div>
  <section className='about'>
    <div className='about__overlay'>
      <div className='about__card'>
        <h2 className='about__title'>
          my story
        </h2>
        <p className='about__text'>
          Not just a software developer, but also a board game enthusiast, lover of puns, and a
          friend you can always lean on.
        </p>
        <p className='about__text'>
          My experience is both lived and learned, but what ties it all together is the excitement
          towards solving human-focused problems with the tools I have at my disposal. 
        </p>
        <p className='about__text'>
          Whether that's building a web application with my most comfortable tech stack, or it's
          listening to a colleague or friend and offering support and advice, I'm passionate about
          doing my best!
        </p>
        <p className='about__text'>
          Feel free to send an email if you'd like to get in contact! This webpage is still
          a work in progress.
        </p>
      </div>
    </div>
  </section>
</div>
);
};

export default Main;