import React from 'react';
import './About.scss';

class About extends React.Component {

render() {
  return(
    <div className="about">
      <h2 className="about__header">my story</h2>
      <p className="about__body">
        Not just a software developer, but also a board game enthusiast, lover of puns, and a
        friend you can always lean on.
      </p>
      <p className="about__body">
        My experience is both lived and learned, but what ties it all together is the excitement
        towards solving human-focused problems with the tools I have at my disposal. 
      </p>
      <p className='about__body'>
        Whether that's building a web application with my most comfortable tech stack, or it's
        listening to a colleague or friend and offering support and advice, I'm passionate about
        doing my best!
      </p>
      <p className='about__body'>
        Feel free to send an email if you'd like to get in contact! This webpage is still
        a work in progress.
      </p>
    </div>
  )
}

}

export default About;