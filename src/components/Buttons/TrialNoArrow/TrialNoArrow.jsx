import React from "react";
import '../../Buttons/Buttons.css';
import {Link} from 'react-router-dom';

function TrialNoArrow() {
    return (
        <button className="hover-yellow-button"><Link to="/form" className="hover-yellow">Zapisz się na lekcję próbną</Link></button>
    )
}

export default TrialNoArrow;