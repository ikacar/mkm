import React from "react";
import '../style/contact.css';
import { useLayoutEffect } from "react";

const Contact = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <div>
            <section className="contact-form">
                <div className="contact-form-header">
                    <h2>Kontaktirajte nas</h2>
                    <p>Ukoliko ste zainteresovani za neku našu uslugu/rešenje ili imate bilo kakvih pitanja, nedoumica ili želite da nam pošaljete neki predlog, slobodno nas kontaktirajte. Vrlo rado ćemo Vam pomoći i odgovoriti u najkraćem mogućem roku.</p>
                    <p className="fill">Popunite kontakt formu ispod ili nam se javite</p>
                </div>

                <form>

                    <div className="form-group">
                        <div className="input-row">
                            <input className="row-item" type="text" placeholder="Ime i Prezime" />
                            <input className="row-item" type="text" placeholder="Email" />
                        </div>
                        <div className="input-row">
                            <input className="row-item" type="text" placeholder="Broj telefona" />
                            <input className="row-item" type="text" placeholder="Zvanje" />
                        </div>
                        <div className="input-row">
                            <input className="row-item" type="text" placeholder="Kompanija" />
                            <input className="row-item" type="text" placeholder="Tema" />
                        </div>
                        <textarea className="message" placeholder="Poruka"></textarea>

                    </div>
                    <div className="button-container">
                        <p>* Slanjem poruke prihvatate uslove korišćenja i politiku privatnosti</p>
                        <button>Posalji</button>

                    </div>
                </form>
            </section>
            <section className="contact-info">
                <div className="contact-info-left">
                    <h1>MKM GLOBAL BUILDING DOO</h1>
                    <div className="data">
                        <h2>Adresa</h2>
                        <p>Beograd, Srbija</p>
                        <h2>Telefon</h2>
                        <p>+381 11 123 456</p>
                        <h2>Email</h2>
                        <p>info@mkmglobal.rs</p>
                        <h2>PIB</h2>
                        <p>123456789</p>
                        <h2>Matični broj</h2>
                        <p>123456789</p>
                    </div>
                </div>
                <div className="contact-info-right">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.270964223989!2d20.45764641557388!3d44.81879907909872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a655f4d4c7d7f%3A0x5d0b4d1e4f8c4b5e!2sBeograd!5e0!3m2!1sen!2srs!4v1626740638658!5m2!1sen!2srs" width="100%" height="100%" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>

                </div>
            </section>
        </div>
    );
}

export default Contact;
