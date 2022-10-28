import React from "react";
import '../Header/Header.css'


function Dropdown() {
    return (
        <div className="dropdown-content">
            <a className="dropdown-underlined" href="#">Kursy dla młodzieży i dorosłych</a>
            <a className="dropdown-underlined" href="#">Kursy dla dzieci</a>
            <a className="dropdown-underlined" href="#">Kursy indywidualne</a>
            <a href="#">Kursy grupowe</a>
        </div>
    )
}

export default Dropdown;

