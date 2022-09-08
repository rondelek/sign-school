import React from "react";
import TrialWithArrow from "../Buttons/TrialWithArrow/TrialWithArrow";
import './LessonSecond.css';


function LessonSecond() {
    return (
        <div className="lessonSecond">
            <h2 className="lessonSecond-text-h2">
                Pierwsza lekcja bez zobowiązań!
            </h2>
            <p className="lessonSecond-text-p">
                Umów się na darmową 30-minutową lekcję próbną i zobacz, że nauka języka angielskiego w Sign może być przyjemna i efektywna! Przekonaj się o skuteczności naszych zajęć!
            </p>
            <TrialWithArrow/>
            <div className="phone">
                <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    >
                    <path fill="none" d="M0 0h48v48H0z"></path>
                    <path d="M13.25 21.59a30.12 30.12 0 0013.18 13.17l4.4-4.41c.55-.55 1.34-.71 2.03-.49C35.1 30.6 37.51 31 40 31c1.11 0 2 .89 2 2v7c0 1.11-.89 2-2 2C21.22 42 6 26.78 6 8a2 2 0 012-2h7c1.11 0 2 .89 2 2 0 2.49.4 4.9 1.14 7.14.22.69.06 1.48-.49 2.03l-4.4 4.42z"></path>
                </svg>
                <a className="phone-number" href="+48 111 222 333">+48 111 222 333</a>
            </div>
        </div>
    )
}

export default LessonSecond;