import React from "react";
import '../style/services.css';
import craneBuilding from '../img/CraneBuilding.jpg';

const Services = () => {
    return (
        <div>
           <section className='landing-left-section'>
            <div className='landing-left-section-image'>
                    <img src={craneBuilding} alt="vodje_gradilista" />
                </div>
                <div className='landing-left-section-heading'>
                    <h1>USLUGE</h1>
                    <h2>MKM GLOBAL BUILDING</h2>
                    <p>
                    Izgradnja poslovnih, stambenih, maloprodajnih objekata, magacinskih hala kao i objekata javne namene.
                    </p>
                </div>
            </section>
            <section className="services">
                <div className="services-heading">
                    <h2>Izgradnja i građevinski radovi</h2>
                    <p>Osnovna delatnost uključuje, ali se ne ograničava na izvođenje završnih radova u građevinarstvu i inženjering. 
                        Naša delatnost obuhvata sve vrste građevinskih radova, od rušenja, demontaže, zidarskih, izolaterskih, gipsarskih, molersko-farbarskih, podopolagačkih, keramičarskih radova, do završnih radova. Cilj nam je da pružimo najbolje usluge na tržištu građevinarstva.
                    </p>
                    <p>
                        Ugradnja unutrašnje i spoljašnje stolarije, instalacije vodovoda i kanalizacije, elektroinstalacije, grejanje, klimatizacija i ventilacija, renoviranje i rekonstrukcija.
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
