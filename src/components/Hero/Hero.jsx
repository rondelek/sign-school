import React from "react";
import hero from '../../assets/hero.png'
import TrialWithArrow from "../Buttons/TrialWithArrow/TrialWithArrow";
import './Hero.css'


function Hero() {
    return (
        <div className="hero">
            <div className="hero-text">
                <h1 className="hero-text-h1">
                    Sign - Szkoła języka angielskiego
                </h1>
                <p className="hero-text-p">
                    Jesteśmy szkołą języka angielskiego, oferującą kursy dla dzieci, młodzieży i dorosłych w samym sercu Poznania. Specjalizujemy się w korepetycjach, konwersacjach i przygotowaniach do certyfikatów. Naszym celem jest prowadzenie zajęć języka angielskiego nie tylko efektywnie, ale też przyjemnie!
                </p>
                <div className="hero-text-button">
                    <TrialWithArrow/>
                </div>
            </div>
            <div className="hero-img">
                <img src={hero} alt="" />
            </div>
        </div>
    )
}

export default Hero;