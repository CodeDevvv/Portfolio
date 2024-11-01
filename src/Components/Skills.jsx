import React from 'react';
import { FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap, FaJava } from "react-icons/fa";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import { SiExpress, SiMongodb, SiPostman, SiVercel, SiTailwindcss, SiPostgresql } from "react-icons/si";
import { GrMysql } from "react-icons/gr"; 
import { FiCode } from "react-icons/fi";

const Skills = ({ skill }) => {
    const icon = {
        C: <FiCode />,
        Python: <FaPython />,
        Java: <FaJava />,
        SQL: <GrMysql />,
        PostgreSQL: <SiPostgresql />,
        Postman: <SiPostman />,
        React: <FaReact />,
        Javascript: <DiJavascript1 />,
        Node: <DiNodejs />,
        Express: <SiExpress />,
        MongoDb: <SiMongodb />,
        Git: <FaGitAlt />,
        Github: <FaGithub />,
        Npm: <FaNpm />,
        Figma: <FaFigma />,
        Bootstrap: <FaBootstrap />,
        TailwindCSS: <SiTailwindcss />,
        Vercel: <SiVercel />
    };

    return (
        <div title={skill} className='SkillBox'>
            {icon[skill]}
        </div>
    );
}

export default Skills;
