import React from 'react';
import onama from '../img/onama.jpg';
import '../style/aboutus.css';
import craneBuilding from '../img/CraneBuilding.jpg';

const AboutUs = () => {
    return (
        <div>
            <section className='landing-left-section'>
                <div className='landing-left-section-image'>
                    <img src={craneBuilding} alt="vodje_gradilista" />
                </div>
                <div className='landing-left-section-heading'>
                    <h1>O NAMA</h1>
                    <h2>MKM GLOBAL BUILDING</h2>
                    <p>
                        MKM Global Building d.o.o osnovana je 2015. god. sa ciljem da bude građevinsko preduzeće koje pruža efikasne, pristupačne, održive usluge najvišeg kvaliteta svojim klijentima.
                    </p>
                </div>
            
            </section>
            <section className='about-us'>
                <div className='about-us-heading'>
                    <h2>
                        KVALITET, TRUD I KREATIVNOST ČINE NAS POSEBNIM
                    </h2>
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
    )
}

export default AboutUs;
