import React, {useState} from "react";
import {motion} from 'framer-motion';
import './Form.css';
import Time from "../Time/Time";

function Form() {

    const [timeState, setTimeState] = useState(0);

    function deleteTime() {
      setTimeState(0);
    }
  
    function addTime() {
      setTimeState(1)
    }

    return (

        <motion.form 
            className="form"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: {duration: 0.3}}}
        >
        
            <h2 className="form-title">Zapisz się na darmową lekcję próbną</h2>

            <fieldset>
                <legend><span className="number">1</span>Poziom języka</legend>
                <label>Wybierz swój orientacyjny poziom języka (wykonaj <b>test poziomujący</b>):</label>
                <div className="choose-box">
                        <div className="choose">
                            <input type="radio" id="a" value="a" name="level"/>
                            <label htmlFor="a" className="light">A1/A2</label>
                        </div>
                        <div className="choose">
                            <input type="radio" id="b" value="b" name="level"/>
                            <label htmlFor="b" className="light">B1/B2</label>
                        </div>
                        <div className="choose">
                            <input type="radio" id="c" value="c" name="level"/>
                            <label htmlFor="c" className="light">C1/C2</label>
                        </div>
                </div>
                
                <label>Kategoria wiekowa:</label>
                    <div className="choose-box">
                        <div className="choose">
                            <input type="radio" id="kid" value="kid" name="age"/>
                            <label htmlFor="kid" className="light">Dziecko</label>
                        </div>
                        <div className="choose">
                            <input type="radio" id="teenager" value="teenager" name="age"/>
                            <label htmlFor="teenager" className="light">Młodzież</label>
                        </div>
                        <div className="choose">
                            <input type="radio" id="adult" value="adult" name="age"/>
                            <label htmlFor="adult" className="light">Dorosły</label>
                        </div>
                    </div>
                
            </fieldset>

            <fieldset>
                <legend><span className="number">2</span><span>Preferowane terminy </span></legend>
                <label>Preferowane dni zajęć:</label>
                <div className="choose-box days">
                    <div className="choose">
                        <input type="checkbox" id="monday" value="monday" name="day"/>
                        <label className="light" htmlFor="monday">Poniedziałek</label>
                    </div>
                    <div className="choose">
                        <input type="checkbox" id="tuesday" value="tuesday" name="day"/>
                        <label className="light" htmlFor="tuesday">Wtorek</label>
                    </div>
                    <div className="choose">
                        <input type="checkbox" id="wednesday" value="wednesday" name="day"/>
                        <label className="light" htmlFor="wednesday">Środa</label>
                    </div>
                    <div className="choose">
                        <input type="checkbox" id="thursday" value="thursday" name="day"/>
                        <label className="light" htmlFor="thursday">Czwartek</label>
                    </div>
                    <div className="choose">
                        <input type="checkbox" id="friday" value="friday" name="day"/>
                        <label className="light" htmlFor="friday">Piątek</label>
                    </div>
                </div>
                <label>Preferowane godziny zajęć:</label>
                <div className="time-box">
                    <Time/>
                    <div className="hyphen">&#8208;</div> 
                    <Time/>
                </div>
                {timeState == 1 &&
                    <div className="time-box">
                        <Time/>
                        <div className="hyphen">&#8208;</div> 
                        <Time/>
                        <i className="delete fa-solid fa-trash" onClick={deleteTime}></i>
                    </div>
                }
                {timeState == 0 &&
                <div className="add-time" onClick={addTime}>+ Dodaj kolejny przedział czasowy</div>
                }
            </fieldset>
            
            <fieldset className="form-contact">
                <legend><span className="number">3</span>Dane kontaktowe</legend>
                <label htmlFor="name">Imię i nazwisko:</label>
                <input type="text" id="name" name="name"/>
                
                <label htmlFor="mail">Email:</label>
                <input type="email" id="mail" name="email"/>

                <label htmlFor="number">Nr telefonu:</label>
                <input onWheel={(e) => e.target.blur()} className="tel" type="number" id="number" name="number"/>
            
            </fieldset>

            <fieldset className="form-message">
                <legend><span className="number">4</span>Uwagi</legend>
                <label htmlFor="message">Wiadomość do nas:</label>
                <textarea id="message" name="message"></textarea>
            </fieldset>
            
            <button className="form-button" type="submit">Zapisz się</button>
        </motion.form>
    )
}

export default Form;