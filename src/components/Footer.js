// create a new file called Footer.js in the components folder and add the following code:

import React from 'react';
import '../style/footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
<footer class="footer">
    
  	 <div class="container">
  	 	<div class="row">
  	 	
  	 		<div class="footer-col">
  	 			<h4>Informacije</h4>
  	 			<ul>
                   <li>PIB: 108977989 </li>
  	 				<li>MB: 21092142 </li>
                </ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Kontakt</h4>
  	 			<ul>
                    <li>info@mkmglobal.rs</li>
                    <li>011/ 123-456</li>

  	 			</ul>
  	 		</div>
               <div class="footer-col">
  	 			<h4>Adresa</h4>
  	 			<ul>
                    <li>MKM Global Building d.o.o Beograd</li>
  	 				<li>Bulevar Oslobođenja 94/31, Beograd</li>
  	 			</ul>
  	 		</div>
  	 	</div>
  	 </div>
		<p id="rights">© Copyright 2024 MKM GLOBAL DOO</p>
  </footer>
        </footer>
    );
    }

export default Footer;