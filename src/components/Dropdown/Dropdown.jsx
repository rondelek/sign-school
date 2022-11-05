import React from "react";
import '../Header/Header.css';
import {Link} from 'react-router-dom';


function Dropdown() {
    return (
        <div className="dropdown-content">
            <Link to="/matura"><a className="dropdown-underlined">Kursy maturalne</a></Link>
            <a className="dropdown-underlined">Kursy dla młodzieży i dorosłych</a>
            <a className="dropdown-underlined">Kursy dla dzieci</a>
            <a className="dropdown-underlined">Kursy indywidualne</a>
            <Link to="/groups"><a className="dropdown-underlined">Kursy grupowe</a></Link>
        </div>
    )
}

export default Dropdown;

