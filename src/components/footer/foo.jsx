import React from "react";
import './foo.css';

import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Foo = () => {
    return(
        <footer className="">
                <a href="#" className="footer__logo">Ahad</a>
              <ul className="permalinks">
                  <li><a href="#">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#exp">Experience</a></li>
                  <li><a href="#ser">Services</a></li>
                  <li><a href="#portfolio">Portfolio</a></li>
                  <li><a href="#test">Testimonials</a></li>
                  <li><a href="#contact">Contact</a></li>
                  </ul> 

                  <div className="footer__socials">
                      <a href="facebook.com"><FaFacebookF className="ico"/></a>
                      <a href="https://www.instagram.com/eddiykhan/?hl=en" arget="_blank"><FiInstagram className='ico' /></a>
                      <a href="twitter.com"><IoLogoTwitter className="ico"/></a>
                      </div> 
                <div className="footer__copyright">
                    <small>&copy; Ahad khan. All rights reserved.</small>
                </div>

        </footer>
    )
}

export default Foo;