import React, {useState} from 'react';
import CoursesCards from '../CoursesCards/CoursesCards';
import '../../Courses/Courses.css'
import guarantee from '../../../assets/guarantee.svg';
import graduate from '../../../assets/graduate.svg';
import remote from '../../../assets/remote.svg';


function CoursesForMatura() {


    const advantages = [
            {cardImg: guarantee, cardTitle: 'Gwarancja zdanej matury', cardContent: '100% naszych kursantów zdaje maturę podstawową z języka angielskiego'},
            {cardImg: graduate, cardTitle: 'Wysoki wynik z matury rozszerzonej', cardContent: 'Nasi kursanci uzyskują wysoki wynik z matury rozszerzonej, co pozwala im dostać się na wymarzone studia'},
            {cardImg: remote, cardTitle: 'Możliwość zajęć zdalnych', cardContent: 'Oferujemy zajęcia zdalne, dzięki czemu możesz skutecznie przygotować się do matury, bez względu na to, gdzie przebywasz'},
    ];

    return (

        <div className="course">
            <h2>Dlaczego warto przygotować się z nami do <strong>matury z angielskiego</strong>?</h2>
            <div className="advantages">
                {advantages.map((advantage) => (
                    <CoursesCards cardImg={advantage.cardImg} cardTitle={advantage.cardTitle} cardContent={advantage.cardContent} />
                ))}
            </div>
        </div>

    )
}


export default CoursesForMatura;
