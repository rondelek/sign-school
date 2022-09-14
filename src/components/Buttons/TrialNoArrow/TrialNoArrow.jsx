import React from "react";
import '../../Buttons/Buttons.css';
import {Link} from 'react-router-dom';

function TrialNoArrow() {
    return (
        <Link to="/form"><button className="hover-yellow">Zapisz się na lekcję próbną</button></Link>
    )
}

export default TrialNoArrow;