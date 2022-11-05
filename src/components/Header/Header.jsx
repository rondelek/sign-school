import React, { useState } from "react";
import './Header.css';
import logo from '../../assets/sign-logo.png';
import TrialNoArrow from '../Buttons/TrialNoArrow/TrialNoArrow';
import Dropdown from "../Dropdown/Dropdown";
import {Link} from 'react-router-dom';

function Header() {

  const [burgerState, setBurgerState] = useState(1);

  function showCourses() {
    setBurgerState(0);
  }

  function showMenu() {
    setBurgerState(1)
  }

  function unCheck() {
    let inputCheckbox = document.getElementById("input-checkbox");
    inputCheckbox.checked = false;
  }

    return (
        <div className="header">
          <a href="/">
          <div className="logo">
              <img src={logo} alt="" />
          </div>
          </a>
          <div className="menu">
            <div className="menu-element menu-underlined">Test poziomujący</div>
            <div className="menu-element dropdown-btn">
              <span>Kursy</span> 
              <Dropdown/>
            </div>
            <Link to="/cennik"><div className="menu-element">Cennik</div></Link>
            <div className="menu-element">O nas</div>
            <Link to="/kontakt"><div className="menu-element">Kontakt</div></Link>
            <div className="menu-element-social">
              <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M20 3H4C1.8 3 0 4.8 0 7v10c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V7c0-2.2-1.8-4-4-4zm1.6 5.8l-7.9 5.3c-.5.3-1.1.5-1.7.5s-1.2-.2-1.7-.5L2.4 8.8c-.4-.3-.5-.9-.2-1.4.3-.4.9-.5 1.4-.2l7.9 5.3c.3.2.8.2 1.1 0l7.9-5.3c.5-.3 1.1-.2 1.4.3.2.4.1 1-.3 1.3z"></path>
              </svg>
              <svg 
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="2"
                clipRule="evenodd"
                viewBox="0 0 512 512"
              >
                <path
                  fillRule="nonzero"
                  d="M374.244 285.825l14.105-91.961h-88.233v-59.677c0-25.159 12.325-49.682 51.845-49.682h40.116V6.214S355.67 0 320.864 0c-72.67 0-120.165 44.042-120.165 123.775v70.089h-80.777v91.961h80.777v222.31A320.565 320.565 0 00250.408 512c16.911 0 33.511-1.324 49.708-3.865v-222.31h74.128z"
                ></path>
              </svg>
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                version="1.1"
                viewBox="0 0 56.7 56.7"
                xmlSpace="preserve"
              >
                <path d="M28.2 16.7c-7 0-12.8 5.7-12.8 12.8s5.7 12.8 12.8 12.8S41 36.5 41 29.5s-5.8-12.8-12.8-12.8zm0 21c-4.5 0-8.2-3.7-8.2-8.2s3.7-8.2 8.2-8.2 8.2 3.7 8.2 8.2-3.7 8.2-8.2 8.2z"></path>
                <circle cx="41.5" cy="16.4" r="2.9"></circle>
                <path d="M49 8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7 0-14.5 5.8-14.5 14.5v20.5c0 4.3 1.4 8 4.2 10.7 2.7 2.6 6.3 3.9 10.4 3.9h20.4c4.3 0 7.9-1.4 10.5-3.9 2.7-2.6 4.1-6.3 4.1-10.6V19.3c0-4.2-1.4-7.8-4-10.4zm-.4 31c0 3.1-1.1 5.6-2.9 7.3s-4.3 2.6-7.3 2.6H18c-3 0-5.5-.9-7.3-2.6C8.9 45.4 8 42.9 8 39.8V19.3c0-3 .9-5.5 2.7-7.3 1.7-1.7 4.3-2.6 7.3-2.6h20.6c3 0 5.5.9 7.3 2.7 1.7 1.8 2.7 4.3 2.7 7.2v20.6z"></path>
              </svg>
            </div>
            <div className="menu-element-button">
              <TrialNoArrow/>
            </div>
          </div>

          <nav role="navigation">
            <div id="menuToggle">
              <input type="checkbox" id="input-checkbox" onClick={showMenu}/>
              <span></span>
              <span></span>
              <span></span>
              <ul id="menu">
                {burgerState === 1 &&
                <div className="hamburger-list">
                  <li className="menu-element" onClick={unCheck}>Test poziomujący</li>
                  <div id="menu-courses-hamburger">
                    <li className="menu-element" onClick={showCourses}>Kursy</li>
                    <svg className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path
                          fill="#525252"
                          d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"
                          className="fill-000000">
                        </path>
                    </svg>
                  </div>
                  <Link to="/cennik"><li className="menu-element" onClick={unCheck}>Cennik</li></Link>
                  <li className="menu-element" onClick={unCheck}>O nas</li>
                  <Link to="/kontakt"><li className="menu-element" onClick={unCheck}>Kontakt</li></Link>
                </div>
}
                {burgerState === 0 &&
                <div className="hamburger-list">
                    <li className="back-menu" onClick={showMenu}>
                      <svg className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path
                          fill="#525252"
                          d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"
                          className="fill-000000">
                        </path>
                      </svg>
                      <div>Menu</div>
                    </li>
                    <Link to="/matura"><li className="menu-element" onClick={unCheck}>Kursy maturalne</li></Link>
                    <li className="menu-element" onClick={unCheck}>Kursy dla młodzieży i dorosłych</li>
                    <li className="menu-element" onClick={unCheck}>Kursy dla dzieci</li>
                    <li className="menu-element" onClick={unCheck}>Kursy indywidualne</li>
                    <Link to="/groups"><li className="menu-element" onClick={unCheck}>Kursy grupowe</li></Link>
                </div>
}
                <li><div className="menu-element-social-hamburger">
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M20 3H4C1.8 3 0 4.8 0 7v10c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V7c0-2.2-1.8-4-4-4zm1.6 5.8l-7.9 5.3c-.5.3-1.1.5-1.7.5s-1.2-.2-1.7-.5L2.4 8.8c-.4-.3-.5-.9-.2-1.4.3-.4.9-.5 1.4-.2l7.9 5.3c.3.2.8.2 1.1 0l7.9-5.3c.5-.3 1.1-.2 1.4.3.2.4.1 1-.3 1.3z"></path>
                    </svg>
                    <svg 
                      className="icon"
                      xmlns="http://www.w3.org/2000/svg"
                      fillRule="evenodd"
                      strokeLinejoin="round"
                      strokeMiterlimit="2"
                      clipRule="evenodd"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fillRule="nonzero"
                        d="M374.244 285.825l14.105-91.961h-88.233v-59.677c0-25.159 12.325-49.682 51.845-49.682h40.116V6.214S355.67 0 320.864 0c-72.67 0-120.165 44.042-120.165 123.775v70.089h-80.777v91.961h80.777v222.31A320.565 320.565 0 00250.408 512c16.911 0 33.511-1.324 49.708-3.865v-222.31h74.128z"
                      ></path>
                    </svg>
                    <svg
                      className="icon"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0"
                      y="0"
                      version="1.1"
                      viewBox="0 0 56.7 56.7"
                      xmlSpace="preserve"
                    >
                      <path d="M28.2 16.7c-7 0-12.8 5.7-12.8 12.8s5.7 12.8 12.8 12.8S41 36.5 41 29.5s-5.8-12.8-12.8-12.8zm0 21c-4.5 0-8.2-3.7-8.2-8.2s3.7-8.2 8.2-8.2 8.2 3.7 8.2 8.2-3.7 8.2-8.2 8.2z"></path>
                      <circle cx="41.5" cy="16.4" r="2.9"></circle>
                      <path d="M49 8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7 0-14.5 5.8-14.5 14.5v20.5c0 4.3 1.4 8 4.2 10.7 2.7 2.6 6.3 3.9 10.4 3.9h20.4c4.3 0 7.9-1.4 10.5-3.9 2.7-2.6 4.1-6.3 4.1-10.6V19.3c0-4.2-1.4-7.8-4-10.4zm-.4 31c0 3.1-1.1 5.6-2.9 7.3s-4.3 2.6-7.3 2.6H18c-3 0-5.5-.9-7.3-2.6C8.9 45.4 8 42.9 8 39.8V19.3c0-3 .9-5.5 2.7-7.3 1.7-1.7 4.3-2.6 7.3-2.6h20.6c3 0 5.5.9 7.3 2.7 1.7 1.8 2.7 4.3 2.7 7.2v20.6z"></path>
                    </svg>
                  </div></li>
                <Link to="/form"><button className="hover-yellow" onClick={unCheck}>Zapisz się na lekcję próbną</button></Link>
              </ul>

            </div>
          </nav>
        </div>
    )
};

export default Header;
