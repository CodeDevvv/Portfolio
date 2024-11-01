import React from 'react';
import Typewriter from 'typewriter-effect';

const AniText = () => {
  return (
    <div className="TypeEffect">
      <Typewriter
        options={{
          strings: ['Software Developer', 'Full Stack Web Developer'],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed: 20,
        }}
      />
    </div>
  )
}

export default AniText
