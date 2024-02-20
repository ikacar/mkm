

import React from "react";
import "../style/projects.css";
import project1 from "../img/project1.jpeg";
import project2 from "../img/project2.jpeg";
import project3 from "../img/project3.jpeg";

const Projects = () => {
    return (
        <div>
            <section className='projects'>
                <div className="project-container project-right" style={{  backgroundImage: `url(${project1})`}}>
                    <div className="project-info">
                        <h1>Izvođenje zidarskih i armirano betonskih radova</h1>
                        <p>Povrsina 500 m2</p>
                    </div>
                    <div className="project-heading">Mozzart Bet Smederevo</div>                

                </div>
                    <div className="project-container project-left" style={{  backgroundImage: `url(${project2})`}}>
                    <div className="project-heading">MK Usce Bulding</div>                
                    <div className="project-info">
                        <h1>Izvođenje zidarskih i armirano betonskih radova</h1>
                        <p>Objekat površine oko 10.000 ㎡</p>
                    </div>
                </div>
                <div className="project-container project-right" style={{  backgroundImage: `url(${project3})`}}>
                    <div className="project-info">
                        <h1>Izvođenje zidarskih i armirano betonskih radova</h1>
                        <p>Povrsina 500 m2</p>
                    </div>
                    <div className="project-heading">AERODROM „KONSTANTIN VELIKI“-NIŠ</div>                

                </div>
            </section>
        </div>
    );
    }

export default Projects;