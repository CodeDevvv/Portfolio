import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    OutfittersDesc: `Outfitters.com is a fully functional e-commerce website built using PHP, HTML, and CSS. It provides both user and admin control panels, allowing for efficient management of products and users. `,
    OutfittersGithub: "https://github.com/CodeDevvv/Outfitters.com.git",
    OutfittersWebsite: "",

    OurVerseDesc: "OurVerse is a video chat application that allows users to connect and communicate in real time. It provides a user-friendly interface, enabling users to start video calls, invite others, and manage their audio and video settings easily.",
    OurVerseGithub: "https://github.com/CodeDevvv/Ourverse.git",
    OurVerseWebsite: "https://ourverse-qkks.onrender.com/",

    AtmSimulatorDesc: "This ATM Simulation Application is built using Java, Swing for the graphical user interface, and SQL for database management. It provides users with functionalities similar to an actual ATM, including balance inquiry, deposit, withdrawal, and transaction history. ",
    AtmSimulatorGithub: "https://github.com/CodeDevvv/ATMSystemSimulator.git",
    AtmSimulatorWebsite: "",

    NoteProDesc: "NotePro offers a versatile platform for all your note-taking needs. With a sleek frontend built using Vite and React, and a robust backend powered by Supabase, NotePro provides secure user authentication and encrypted storage for your notes.",
    NoteProGithub: "https://github.com/CodeDevvv/NotePro.git",
    NoteProWebsite: "https://note-pro-five.vercel.app/",

    QuickBiteDesc: "QuickBite is a fully responsive web-based food management system designed to simplify online food ordering and management.",
    QuickBiteGithub: "https://github.com/CodeDevvv/QuickBite.git",
    QuickBiteWebsite: "",


  };

  let showGithub = '';
  let showWebsite = '';

  if (desc[projectName + 'Github'] === "") {
    showGithub = "none";
  }
  if (desc[projectName + 'Website'] === "") {
    showWebsite = "none";
  }

  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + 'Desc']}
        <br />

        <a style={{ display: showGithub }} href={desc[projectName + 'Github']} target='_blank' rel='noopener noreferrer'>
          <button className='projectbtn'><FaGithub className='btn-icon' /> Github</button>
        </a>

        <a style={{ display: showWebsite }} href={desc[projectName + 'Website']} target='_blank' rel='noopener noreferrer'>
          <button className='projectbtn'><CgFileDocument className='btn-icon' />Demo</button>
        </a>
      </div>
    </div>
  );
}

export default ProjectBox;
