import React from 'react';
import '../../Courses/Courses.css'
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import guarantee from '../../../assets/guarantee.svg';
import graduate from '../../../assets/graduate.svg';
import remote from '../../../assets/remote.svg';


function CoursesForMatura() {
    return (

        <div className="course">

            <h2>Dlaczego warto przygotować się z nami do <strong>matury z angielskiego</strong>?</h2>
            <div className="advantages">
                <div className='advantage course-card'>
                    <div className="advantage-img">
                        <img src={guarantee} alt="" />
                    </div>
                    <h3>Gwarancja zdanej matury</h3>
                    <p>100% naszych kursantów zdaje maturę podstawową z języka angielskiego</p>
                </div>
                <div className="advantage course-card">
                    <div className="advantage-img">
                        <img src={graduate} alt="" />
                    </div>
                    <h3>Wysoki wynik z matury rozszerzonej</h3>
                    <p>Nasi kursanci uzyskują wysoki wynik z matury rozszerzonej, co pozwala im dostać się na wymarzone studia</p>
                </div>
                <div className='advantage course-card'>
                    <div className="advantage-img">
                        <img src={remote} alt="" />
                    </div>
                    <h3>Możliwość zajęć zdalnych</h3>
                    <p>Oferujemy zajęcia zdalne, dzięki czemu możesz skutecznie przygotować się do matury, bez względu na to, gdzie przebywasz</p>
                </div>
            </div>
        </div>

    )
}


export default CoursesForMatura;
