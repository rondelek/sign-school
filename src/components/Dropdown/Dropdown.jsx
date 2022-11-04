import React from "react";
import '../Header/Header.css';
import {Link} from 'react-router-dom';


function Dropdown() {
    return (
        <div className="dropdown-content">
            <Link to="/matura"><a className="dropdown-underlined" href="#">Kursy maturalne</a></Link>
            <a className="dropdown-underlined" href="#">Kursy dla młodzieży i dorosłych</a>
            <a className="dropdown-underlined" href="#">Kursy dla dzieci</a>
            <a className="dropdown-underlined" href="#">Kursy indywidualne</a>
            <a href="#">Kursy grupowe</a>
        </div>
    )
}

export default Dropdown;

