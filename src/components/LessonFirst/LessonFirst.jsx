import React from "react";
import lesson from '../../assets/lesson.png';
import TrialWithArrow from "../Buttons/TrialWithArrow/TrialWithArrow";
import './LessonFirst.css';


function LessonFirst() {
    return (
        <div className="lessonFirst">
            <div className="lessonFirst-text">
                <h2 className="lessonFirst-text-h2">
                    Pierwsza lekcja bez zobowiązań!
                </h2>
                <p className="lessonFirst-text-p">
                    Umów się na darmową 30-minutową lekcję próbną i zobacz, że nauka języka angielskiego w Sign może być przyjemna i efektywna! Przekonaj się o skuteczności naszych zajęć!
                </p>
                <TrialWithArrow/>
            </div>
            <div className="lessonFirst-img">
                <img src={lesson} alt="" />
            </div>
        </div>
    )
}

export default LessonFirst;