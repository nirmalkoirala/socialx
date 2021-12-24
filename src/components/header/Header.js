import React, { useEffect } from 'react'
import './Header.css'
import phoneHeader from '../../assets/phone-header-bg.png'
import Button from '../UI/button/Button'
import "../UI/button/Button.css"
import { BsMouse } from 'react-icons/bs' 

import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, 
        });
    }, [])

    return (
        <section id='header'>
        <div className='container header'>
            <div className="header-left" data-aos="fade-right">
                <h1>
                    <span>THE WORLD'S LEADING</span>
                    <span>CROSS-PLATFORM</span>
                    <span>MESSAGING SYSTEM</span>
                </h1>
                    <p className='uotext-small u-text-light'>
                    In publishing and graphic design, Lorem ipsum is a placeholder
                     text commonly used to demonstrate the visual form of a document
                      or a typeface without relying on meaningful content. Lorem ipsum 
                      may be used as a placeholder before the final copy is available. 
                    </p>
                    <div className="header-cta">
                <Button text={"Get Started"} btnClass={"btn-dark"} href={"#"}/>
                <Button text={"How it Works"} btnClass={"btn-orange"} href={"#"}/>
            </div>
            </div>

            <div className="header-right" data-aos="fade-left">
                <img src={phoneHeader} alt="phone" />
            </div>
        </div>
        <div className="floating-icon">
            <a href="features">
                <BsMouse color="#fff" size={25} className="mouse" />
            </a>
        </div>
        </section>
    )
}

export default Header
