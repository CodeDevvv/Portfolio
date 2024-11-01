import React from 'react';
import ProjectBox from './ProjectBox';
import AtmSimulatorImage from '../images/AtmSimulator.png';
import OurVerseImage from '../images/OurVerse.png';
import OutfittersImage from '../images/Outfitters.png';
import NoteProImage from '../images/NotePro.png';
import QuickBiteImage from '../images/QuickBite.png'

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={QuickBiteImage} projectName="QuickBite" />
        <ProjectBox projectPhoto={NoteProImage} projectName="NotePro" />
        <ProjectBox projectPhoto={AtmSimulatorImage} projectName="AtmSimulator" />
        <ProjectBox projectPhoto={OurVerseImage} projectName="OurVerse" />
        <ProjectBox projectPhoto={OutfittersImage} projectName="Outfitters" />
      </div>
    </div>
  )
}

export default Projects