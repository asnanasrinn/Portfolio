import React from 'react'
import "./Footer.css"
import {BsGithub,BsWhatsapp} from "react-icons/bs"
import { RiInstagramLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div>
       <footer id="footer" style={{backgroundColor:"#f8bc20"}}>
        <div className="container-fluid">
            <div className="social-icons">
                {/* <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook"></i></a> */}
                <a href="https://www.instagram.com/" target="_blank"><RiInstagramLine /></a>
                <a href="https://www.whatsapp.com/" target="_blank"><BsWhatsapp /></a>
                {/* <a href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin"></i></a> */}
                <a href="https://github.com/asnanasrinn" target="_blank"><BsGithub /></a>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer
