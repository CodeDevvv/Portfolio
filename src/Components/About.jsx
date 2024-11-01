import React from 'react';
import Skills from './Skills.jsx';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react";
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>About <b>me!</b></h1>
          <p>
            Hi, my name is <b>Vijay S Patil</b>, and I am currently pursuing my <b>Master of Computer Applications (MCA)</b> degree at VIT Vellore.
            I am actively looking for internships and job opportunities where I can apply my abilities and advance my career.<br /><br />
            <b>Technical Skills:</b><br />
            Frontend Development: ReactJS, HTML5, CSS, Tailwind CSS, and JavaScript.<br />
            Backend Development: NodeJS, ExpressJS.<br />
            Database: MongoDB, SQL, PostgreSQL.<br />
            Programming Languages: Java, Python, C.<br /><br />
            Currently learning <b>Next.js</b> and <b>TypeScript</b>, with an interest in <b>Machine Learning</b> and <b>Generative AI</b>.
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>
      </div>

      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='C' /> {/* Updated from C++ to C */}
        <Skills skill='Python' /> {/* Added Python */}
        <Skills skill='Java' /> {/* Added Java */}
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap' />
        <Skills skill='TailwindCSS' /> {/* Added Tailwind CSS */}
      </div>
    </>
  );
}

export default About;
