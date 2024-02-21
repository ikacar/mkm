import React from "react";
import beton from "../img/beton.jpg";
import '../style/contact.css';
import { useLayoutEffect } from "react";

const Contact = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <div>
            <main data-scroll-container="" horizontal="">
                <section data-scroll-section="" className="sec-2" data-scroll-section-inview="">
                    <div className="naslov"><h1>Kontakt</h1></div>
                    <div className="mask">
                        {/* <img data-scroll="" data-scroll-speed="-1" src={beton} alt="Power Westt inženjering d.o.o preduzeće. Primarna delatnost firme jeste izgradnja stambenih i nestambenih zgrada." className="hero is-inview" /> */}
                    </div>
                </section>
                <section data-scroll-section="" className="sec-4" data-scroll-section-inview="">
                    <h2>MKM Global Building d.o.o Beograd</h2>  
                    <p href="mailto:info@mkmglobal.rs">office@powerwest.rs</p>
                    <p>Bulevar Oslobođenja 94/31, Beograd</p>
                    <p>PIB: 108977989 </p>  
                    <p>MB: 21092142 </p>  
                    <p>Broj računa: 325 – 9500500452010 – 32 - OTP banka </p>  
                </section>
            </main>
        </div>
    );
}

export default Contact;
