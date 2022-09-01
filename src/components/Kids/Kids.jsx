import React from "react";
import kids from '../../assets/kids.png';
import More from "../Buttons/More/More";
import './Kids.css';


function Kids() {
    return (
        <div className="kids">
            <div className="kids-text">
                <h2 className="kids-text-h2">
                    Kursy dla dzieci
                </h2>
                <p className="kids-text-p">
                    Chcesz, aby Twoje dziecko podniosło swoje kompetencje z języka angielskiego, śmiało weszło w dorosły świat i było przygotowane do wejścia na rynek pracy? A może Twoja pociecha nie przepada za nauką angielskiego w szkole i mało z niej wynosi? Ten kurs rozwiąże wszelkie problemy! Kursy językowe dla dzieci są przygotowywane w taki sposób, aby w sposób efektywny oraz interesujący dla młodego odbiorcy pomóc mu w komunikacji w języku angielskim.
                </p>
                <More/>
            </div>
            <div className="kids-img">
                <img src={kids} alt="" />
            </div>
        </div>
    )
}

export default Kids;