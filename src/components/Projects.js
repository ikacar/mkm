

import React from "react";
import "../style/projects.css";
import project1 from "../img/project1.jpeg";
import project2 from "../img/project2.jpeg";
import project3 from "../img/project3.jpg";
import project4 from "../img/project4.jpeg";
import Baner from "./Baner";
import PathBottom from "./PathBottom";
import PathTop from "./PathTop";
import { useLayoutEffect } from "react";
const Projects = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    
    return (
        
        <div>
            <section className="projects-landing">
                <Baner image={project3} text1="NASI Projekti" background={true} className="first-section"/>
                <PathBottom />
            </section>
            
            <section className='projects'>
                <div className="project-container project-right" style={{  backgroundImage: `url(${project1})`}}>

                    <div className="project-info">
                        <h1>Izvođenje zidarskih i armirano betonskih radova</h1>
                        <p>Povrsina 500 m2</p>
                    </div>
                    <div className="project-heading">Mozzart Bet</div>                

                </div>
                <div className="project-container project-left" style={{  backgroundImage: `url(${project2})`}}>
                    <div className="project-heading">MK Usce Bulding</div>                
                    <div className="project-info">
                        <h1>Izvođenje zidarskih i armirano betonskih radova</h1>
                        <p>Objekat površine oko 10.000 ㎡</p>
                    </div>
                </div>
                <div className="project-container project-right" style={{  backgroundImage: `url(${project4})`}}>
                    <div className="project-info">
                        <h1>Izvođenje zidarskih i armirano betonskih radova</h1>
                        <p>Povrsina 500 m2</p>
                    </div>
                    <div className="project-heading">Aerodrom - NIŠ</div>                

                </div>
            </section>
        </div>
    );
    }

export default Projects;