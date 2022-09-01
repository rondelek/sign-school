import React from "react";
import adults from '../../assets/adults.png';
import More from "../Buttons/More/More";
import './Adults.css';


function Adults() {
    return (
        <div className="adults">
            <div className="adults-text">
                <h2 className="adults-text-h2">
                    Kursy dla młodzieży i dorosłych
                </h2>
                <p className="adults-text-p">
                    Ten typ kursu językowego oferujemy młodzieży powyżej dwunastego roku życia oraz dorosłym, którzy pragną nauczyć się języka angielskiego. Niezależnie od Twojego celu, z pewnością znajdziesz u nas coś dla siebie. Dzięki temu, że znajdujemy się w centrum Poznania, nie będziesz miał problemów z dotarciem na Twój kurs angielskiego. Zapraszamy do zapoznania się z ofertą kursów indywidualnych, grupowych oraz online.
                </p>
                <More/>
            </div>
            <div className="adults-img">
                <img src={adults} alt="" />
            </div>
        </div>
    )
}

export default Adults;