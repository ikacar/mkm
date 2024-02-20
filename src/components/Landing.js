// create a new file called Landing.js in the components folder and add the following code:

import React from 'react';
import '../style/landing.css';

import bager3 from '../img/bager3.jpg';
import constructionSite from '../img/constructionSite.jpg';
import craneBuilding from '../img/craneBuilding.jpg';
import working2 from '../img/working2.jpg';
import vodje_gradilista from '../img/vodje_gradilista.jpg';
import radnici from '../img/radnici-power.jpg';
import logo from '../img/logo1.jpg';
import kran from '../img/kran.jpg';
import blueprint from '../img/blueprint.png';
import Baner from './Baner';
import { useLayoutEffect } from 'react';

const Landing = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    
    return (
        <div>
            <section className='landing'>
                <div className='heading'>
                    <h1>MKM GLOBAL BUILDING</h1>
                    <p className='heading-text'>
                        Zadovoljstvo klijenata je naš prioritet i naša najveća motivacija.
                    </p>
                </div>
                
                <div className='landing-image'>

                    <img src={kran} alt="kran" />
                </div>
            </section>
            <div className="first-baner">
            <Baner  image={blueprint} text1="zajedno gradimo" text2="vasu buducnost"/>
            </div>
            
            <section className='right-section'>
                <div className='right-section-heading'>
                    <h2>Naša misija</h2>
                    <p>
                        Naša misija je da pružimo najbolje usluge na tržištu građevinarstva. 
                        Naš tim se sastoji od profesionalaca sa dugogodišnjim iskustvom u građevinarstvu 
                        i spremni smo da se uhvatimo u koštac sa svim izazovima.
                    </p>
                    <p> - Ilija Mikic</p>
                </div>
                <div className='right-section-image'>
                    
                    <img src={craneBuilding} alt="vodje_gradilista" />
                </div>
            </section>
            <Baner image={constructionSite} text1="zajedno gradimo" text2="vasu buducnost"/>

            <section className='left-section'>
                <div className='left-section-image'>
                    <img src={working2} alt="vodje_gradilista" />
                </div>
                <div className='left-section-heading'>
                    <h2>
                        Iskustvo
                    </h2>
                    <p>
                      
                        Naš tim se sastoji od profesionalaca sa dugogodišnjim iskustvom u građevinarstvu 
                        i spremni smo da se uhvatimo u koštac sa svim izazovima.
                    </p>
                    <p > - Mladen Vuksic</p>
                </div>

            </section>

        </div>

    );
}

export default Landing;