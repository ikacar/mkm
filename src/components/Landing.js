// create a new file called Landing.js in the components folder and add the following code:

import React from 'react';
import '../style/landing.css';

import constructionSite from '../img/constructionSite.jpg';
import craneBuilding from '../img/craneBuilding.jpg';
import working2 from '../img/working2.jpg';
import kran from '../img/kran.jpg';
import blueprint from '../img/blueprint.png';
import Baner from './Baner';
import { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';




const Landing = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const scrollPercentage = (scrolled / (document.body.scrollHeight - window.innerHeight)) * 100;

        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <div>
            <section className='landing'>
                <div className='heading'>
                    <h1 className='landing-h1'>MKM GLOBAL BUILDING</h1>
                    <p className='heading-p'>
                        Zadovoljstvo klijenata je naš prioritet i naša najveća motivacija. Obezbedjujemo najbolje uslove za rad i najbolje usluge na tržištu. Kontaktirajte nas i uverite se u našu profesionalnost.  
                    </p>
                    <div className='line'></div>
                    <div className='button-container'>
                        <Link className='conntact-button' to='/kontakt'>Kontakt</Link>
                    </div>
                </div>
                
                <div className='landing-image box-shadow' style={{ backgroundImage: `url(${kran})`}}>

                    {/* <img className='box-shadow box-radius' src={kran} alt="kran" /> */}
                </div>
            </section>
            <div className="first-baner">
            <Baner  image={blueprint} text1="Zajedno gradimo" text2="Vašu budućnost" />
            </div>
            
            <section className='description-section'>
                <div className='right-section'>
                    <div className='right-section-heading'>
                        <h2>Naša misija</h2>
                        <p>
                            Naša misija je da pružimo najbolje usluge na tržištu građevinarstva. 
                            Naš tim se sastoji od profesionalaca sa dugogodišnjim iskustvom u građevinarstvu 
                            i spremni smo da se uhvatimo u koštac sa svim izazovima.
                        </p>
                        <div className='line'></div>

                        <p className='hover-color'> - Ilija Mikic</p>
                    </div>
                    <div className='right-section-image box-shadow' style={{ backgroundImage: `url(${craneBuilding})`}}/>
                </div>
                <div className='left-section'>
                    <div className='left-section-image-container'>
                        <div className='left-section-image box-shadow' style={{ backgroundImage: `url(${working2})`}}/>
                    </div>
                    <div className='left-section-heading'>
                        <h2>
                            Iskustvo
                        </h2>
                        <p>
                            Naš tim se sastoji od profesionalaca sa dugogodišnjim iskustvom u građevinarstvu 
                            i spremni smo da se uhvatimo u koštac sa svim izazovima.
                        </p>
                        <div className='line'></div>
                    <p className='hover-color'> - Mladen Vuksic</p>
                </div>
            </div>
            <div className='right-section'>
                    <div className='right-section-heading'>
                        <h2>Vrednosti</h2>
                        <p>
                            Vrednosti na kojima se zasniva naš rad su kvalitet, profesionalnost i posvećenost. Obezbedjujemo najbolje uslove za rad i najbolje usluge na tržištu.
                        </p>
                        <div className='line'></div>

                        <p className='hover-color'> - Miloš Kostic</p>
                    </div>
                    <div className='right-section-image box-shadow' style={{ backgroundImage: `url(${craneBuilding})`}}/>
                </div>
            </section>

            <div className="first-baner">
            <Baner image={blueprint} text1="Tokom 10 godina rada" text2="Preko 100 završenih projekata"/>
            </div>
        </div>

    );
}

export default Landing;