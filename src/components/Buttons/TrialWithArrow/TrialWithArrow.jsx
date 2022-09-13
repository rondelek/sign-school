import React from "react";
import '../../Buttons/Buttons.css';
import {Link} from 'react-router-dom';

function TrialWithArrow() {
    return (
        <Link to="/form">
            <button className="hover-white button-arrow">
                <div>Zapisz się na lekcję próbną</div> 
                <div className="arrow">
                    <svg width="15" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M7.844.39a1.25 1.25 0 0 0-.049 1.667l.094.1 2.733 2.593H1.25a1.25 1.25 0 1 0 0 2.5h9.37L7.89 9.844a1.25 1.25 0 0 0-.135 1.663l.089.104a1.25 1.25 0 0 0 1.663.134l.104-.089 5-4.75a1.25 1.25 0 0 0 .097-1.71l-.097-.102-5-4.75a1.25 1.25 0 0 0-1.767.045Z" fill="currentColor" fillRule="evenodd"></path></svg>
                </div>
            </button>
        </Link>
    )
}

export default TrialWithArrow;