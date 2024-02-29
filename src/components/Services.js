import React, { useEffect, useState } from "react";
import "../style/services.css";
import working2 from "../img/working2.jpg";
import { useLayoutEffect } from "react";
import { useRef } from "react";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const servicesRef = useRef(null);

  
  useLayoutEffect(() => {
    console.log("useLayoutEffect");
    window.scrollTo(0, 0)
    });


    useEffect(() => {
        const handleScroll = () => {
            if (servicesRef.current) {
                const topPosition = servicesRef.current.getBoundingClientRect().top;
                const isVisible = topPosition < window.innerHeight;
                setIsVisible(isVisible);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <div>
      <section className="landing-right-section">
      <div className="landing-right-section-heading">
      <div className='line'></div>

          <h1 className="landing-h1">USLUGE</h1>
          <h2 className="landing-h2">MKM GLOBAL</h2>
          <p className="landing-p">
            Izgradnja poslovnih, stambenih, maloprodajnih objekata, magacinskih
            hala kao i objekata javne namene. Izgradnja i rekonstrukcija
          </p>
        </div>
        <div className="landing-right-section-image box-shadow" style={{ backgroundImage: `url(${working2})` }}/>  

      </section>
      <section ref={servicesRef} className={`services ${isVisible ? "visible" : ""}`}>
        <div className="services-heading">
          <h2>Izgradnja i građevinski radovi</h2>
          <p>
            Osnovna delatnost uključuje, ali se ne ograničava na izvođenje
            završnih radova u građevinarstvu i inženjering. Naša delatnost
            obuhvata sve vrste građevinskih radova, od rušenja, demontaže,
            zidarskih, izolaterskih, gipsarskih, molersko-farbarskih,
            podopolagačkih, keramičarskih radova, do završnih radova. Cilj nam
            je da pružimo najbolje usluge na tržištu građevinarstva.
          </p>
          <p>
            Ugradnja unutrašnje i spoljašnje stolarije, instalacije vodovoda i
            kanalizacije, elektroinstalacije, grejanje, klimatizacija i
            ventilacija, renoviranje i rekonstrukcija.
          </p>
        </div>
        <div className="services-list-container">
          <div className="services-list">
            <h2>Građevinski radovi</h2>
            <ul>
              <li>Rušenje</li>
              <li>Demontaža</li>
              <li>Zidarski radovi</li>
              <li>Izolaterski radovi</li>
              <li>Gipsarski radovi</li>
              <li>Molersko-farbarski radovi</li>
              <li>Podopolagački radovi</li>
              <li>Keramičarski radovi</li>
              <li>Završni radovi</li>
            </ul>
          </div>
          <div className="services-list">
            <h2>Inženjerski radovi</h2>
            <ul>
              <li>Ugradnja unutrašnje i spoljašnje stolarije</li>
              <li>Instalacije vodovoda i kanalizacije</li>
              <li>Elektroinstalacije</li>
              <li>Grejanje, klimatizacija i ventilacija</li>
              <li>Renoviranje i rekonstrukcija</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
