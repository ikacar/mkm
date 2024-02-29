import React, { useRef, useEffect, useState } from 'react';
import onama from '../img/onama.jpg';
import '../style/aboutus.css';
import { useLayoutEffect } from 'react';

const AboutUs = () => {
    const [isVisible, setIsVisible] = useState(false);
    const aboutUsRef = useRef(null);


    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });


    useEffect(() => {
        const handleScroll = () => {
            if (aboutUsRef.current) {
                const topPosition = aboutUsRef.current.getBoundingClientRect().top;
                const isVisible = topPosition < window.innerHeight;
                setIsVisible(isVisible);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <section className='landing-left-section'>
                <div className='landing-left-section-image box-shadow' style={{ backgroundImage: `url(${onama})` }} />
                <div className='landing-left-section-heading'>
                    <h1 className='landing-h1'>O NAMA</h1>
                    <h2 className='landing-h2'>MKM GLOBAL</h2>
                    <p className='landing-p'>
                        MKM Global Building d.o.o osnovana je 2015. god. sa ciljem da bude građevinsko preduzeće koje pruža efikasne, pristupačne, održive usluge najvišeg kvaliteta svojim klijentima.
                    </p>
                    <div className='line'></div>

                </div>
            </section>
            <section ref={aboutUsRef} className='about-us'>
                <div className={`about-us-heading ${isVisible ? 'visible' : ''}`}>
                    <h2>
                        KVALITET, TRUD I KREATIVNOST ČINE NAS POSEBNIM
                    </h2>
                    <div className='line-80'></div>
                
                    <p>
                        Primarna delatnost firme jeste izgradnja stambenih i nestambenih zgrada.
                        Trenutno brojimo više od 250 zaposlenih, od kojih većinu čine armirači, tesari, građevinski radnici, zidari, moleri ali i stručni kadar sačinjen od licenciranih građevinskih inženjera, diplomiranih ekonomista i pravnika.                    </p>
                    
                    <p>
                        Za obavljanje poslova bezbednosti i zdravlja na radu, firma je angažovala lice sa licencom.
                    </p>
                    
                    <p>
                        U dosadašnjem radu firma se može pohvaliti maksimalnim kvalitetom, uloženim trudom i ispoljenom kreativnošću. Osim pružanja kvalitetnih građevinskih usluga, ciljevi firme u narednom periodu su ulaganje u građevinsku opremu, stručni kadar, kao i unapređivanje saradnje sa investitorima i kooperantima. Kao relativno mlado preduzeće možemo se pohvaliti značajnim projektima, takođe i opremom koju posedujemo za izvođenje građevinsko-zanatskih radova.

                    </p>
                </div>
            </section>
        </div>
    );
}

export default AboutUs;
