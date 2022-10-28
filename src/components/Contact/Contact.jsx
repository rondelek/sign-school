import React from "react";
import './Contact.css';
import {motion} from 'framer-motion';
import Iframe from 'react-iframe';


function Contact() {
    return (
        <motion.div
            className="contact"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: {duration: 0.3}}}
        >
            <div className="contact-left">
                <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.059856831382!2d16.922404215606296!3d52.40559137979265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045b39dc4ab449%3A0x9ef8a86bf76efe28!2sRatajczaka%2021%2C%2061-891%20Pozna%C5%84!5e0!3m2!1spl!2spl!4v1666788313718!5m2!1spl!2spl"
                    className="contact-left-map"
                />
            </div>
            <div className="contact-right">
                <div className="contact-right-form">
                    <h2 className="contact-form-title">
                        Napisz do nas
                    </h2>
                    <div className="contact-form-row">
                        <label htmlFor="name">
                            Imię i nazwisko: 
                        </label>
                        <input type="text" id="name" name="name"/>
                    </div>
                    <div className="contact-form-row">
                        <label htmlFor="mail">
                            E-mail:
                        </label>
                        <input type="text" id="mail" name="mail"/>
                    </div>
                    <div className="contact-form-row">
                        <label htmlFor="message">
                            Wiadomość:
                        </label>
                        <textarea name="message" id="message" cols="30" ></textarea>
                    </div>
                    <button className="contact-form-button hover-yellow">Wyślij wiadomość</button>
                </div>
            </div>
            
        </motion.div>
    )
}


export default Contact;