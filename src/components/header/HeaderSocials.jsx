import React from "react";
import {BsLinkedin} from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';


const HeaderSocials = ()=>{
    return(
    <div className="header__soacials">
        <a href="https://www.linkedin.com/in/ahad-khan-74b633238" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/Ahadeddiy" target="_blank"><FaGithub /></a>
        <a href="https://www.instagram.com/eddiykhan/?hl=en" target="_blank"><BsInstagram /></a>
    </div>
    )
}
export default HeaderSocials;