

import React from "react";
import "../style/projects.css";
import project1 from "../img/project/project1.jpeg";
import project2 from "../img/project/project2.jpeg";
import project3 from "../img/project/project3.jpg";
import project4 from "../img/project/project4.jpeg";

import gallery1 from "../img/project/gallery/1.jpg";
import gallery2 from "../img/project/gallery/2.jpg";
import gallery3 from "../img/project/gallery/3.jpg";
import gallery4 from "../img/project/gallery/4.jpg";
import gallery5 from "../img/project/gallery/5.jpg";
import gallery6 from "../img/project/gallery/6.jpg";


import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import untitled from "../img/project/gallery.png";
const Projects = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    
    return (
        
        <div>
            <section className="landing-right-section projects-landing-section">
                <div className="landing-right-section-heading">

                    <h2 className="landing-h2">Poverenje</h2>
                    <p className="landing-p">
                        Kroz godine rada i iskustva stekli smo poverenje mnogih klijenata. Izgradili smo preko 100 objekata i naša misija je da nastavimo da gradimo i unapredjujemo našu ponudu.
                    </p>
                    <div className='line'></div>
                    <div className='button-container'>
                        <Link className='conntact-button' to='/kontakt'>Imate Projekat?</Link>
                    </div>
                    </div>
                    <div className="landing-right-section-gallery">
                        <img src={untitled} alt="untitled" />
                    {/* <img className='box-shadow box-radius' src={working2} alt="vodje_gradilista" /> */}
                    </div>

            </section>
            <section className='projects'>
                <div className="project-header-section">
                    <div className="project-header">
                        <h2>Dugoročna saradnja</h2>
                        <p>Izborom nas kao partnera, dobijate dugoročnu saradnju i podršku u svakom trenutku. Naš tim je tu da vam pomogne u svakom trenutku.</p>
                    </div>
                </div>
                <div className="project-container project-right" style={{  backgroundImage: `url(${project1})`}}>

                    <div className="project-info">
                        <h1>Izvođenje zidarskih i armirano betonskih radova</h1>
                        <p>Povrsina 500 m2</p>
                    </div>
                    <div className="project-heading">Mozzart Bet</div>                

                </div>
                <div className="project-container project-left" style={{  backgroundImage: `url(${project2})`}}>
                    <div className="project-heading">MK Usce Bulding</div>                
                    <div className="project-info right-info">
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
            <section className='gallery'>
                <div className="gallery-header-section">
                    <div className="gallery-header">
                        <h2>Zadovaljni klijenti su najbolja preporuka</h2>
                        <p>Pogledajte našu galeriju i uverite se u kvalitet radova. </p>
                    </div>
                </div>
                <div className="gallery-container">
                    <div className="gallery-row">
                        <div className="gallery-item" style={{  backgroundImage: `url(${gallery1})`}}/>
                        <div className="gallery-item" style={{  backgroundImage: `url(${gallery2})`}}/>
                    </div>
                    <div className="gallery-row">
                        <div className="gallery-item" style={{  backgroundImage: `url(${gallery3})`}}/>
                        <div className="gallery-item" style={{  backgroundImage: `url(${gallery4})`}}/>
                    </div>
                    <div className="gallery-row">
                        <div className="gallery-item" style={{  backgroundImage: `url(${gallery5})`}}/>
                        <div className="gallery-item" style={{  backgroundImage: `url(${gallery6})`}}/>
                    </div>
                </div>
            </section>
        </div>
    );
    }

export default Projects;