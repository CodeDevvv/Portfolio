import React from 'react';
import AniText from "./AniText.jsx";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import About from './About.jsx';

const Home = () => {
  return (
    <div >
      <div className='HomePage'>
        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>VIJAY S PATIL</b></h1>
          <AniText />
        </div>
      </div>

      <About />
    </div>
  )
}

export default Home