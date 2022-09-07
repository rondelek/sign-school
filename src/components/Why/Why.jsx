import React from "react";
import why from '../../assets/why.png'
import './Why.css';

function Why() {
    return (

        <div className="why">
            <div className="why-text">
                <h2 className="why-text-h2">Dlaczego warto zapisać się na kurs językowy w Sign?</h2>
                <p className="why-text-p">Bo mamy najlepszą ofertę ze wszystkich szkół językowych w Poznaniu! Nasze kursy językowe to nie tylko znakomita jakość, ale też świetna cena.</p>
            </div>
            <div className="why-content">
                <div className="why-content-column">
                    <div className="element">
                        <svg width="51" height="49" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero" fill="none"><path d="M50.452 16.194c2.5 9-3.85 19.61-13.02 26.133-9.208 6.563-21.156 9.039-28.737 3.97-7.581-5.07-10.757-17.724-7.304-27.98C4.845 8.099 14.927.24 25.683.004c10.757-.197 22.228 7.191 24.769 16.19Z" fill="#FFC96A"></path><path d="M29.782 19.46a1.25 1.25 0 0 1 2.017 1.47l-.08.11-7.75 9.5a1.25 1.25 0 0 1-1.934.005l-.082-.112-3.75-5.75a1.25 1.25 0 0 1 2.014-1.476l.08.11 2.815 4.317 6.67-8.174Z" fill="#131415"></path></g></svg>
                        <h3>Dogodna lokalizacja</h3>
                        <p>Nasza szkoła zlokalizowana jest w centrum Poznania, na ul. Ratajczaka 21/5 - co zapewnia wygodny i szybki dojazd.</p>
                    </div>
                    <div className="element">
                        <svg width="51" height="47" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero" fill="none"><path d="M.475 31.679c-2.588-9.235 5.81-20.825 15.39-26.8C25.444-1.142 36.158-1.55 43.013 3.43c6.81 4.935 9.715 15.256 6.946 24.672-2.724 9.416-11.168 17.972-22.2 18.832C16.727 47.75 3.108 40.868.475 31.68Z" fill="#FFC96A"></path><path d="M29.782 18.46a1.25 1.25 0 0 1 2.017 1.47l-.08.11-7.75 9.5a1.25 1.25 0 0 1-1.934.005l-.082-.112-3.75-5.75a1.25 1.25 0 0 1 2.014-1.476l.08.11 2.815 4.317 6.67-8.174Z" fill="#131415"></path></g></svg>
                        <h3>Niskie ceny kursów</h3>
                        <p>Wysoka jakość idzie u nas w parze z niską ceną! Proponujemy rozłożenie płatności w nieoprocentowanych ratach!</p>
                    </div>
                </div>
                <div className="why-content-img">
                    <img src={why} alt="" />
                </div>
                <div className="why-content-column">
                    <div className="element">
                        <svg width="51" height="47" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero" fill="none"><path d="M.475 31.679c-2.588-9.235 5.81-20.825 15.39-26.8C25.444-1.142 36.158-1.55 43.013 3.43c6.81 4.935 9.715 15.256 6.946 24.672-2.724 9.416-11.168 17.972-22.2 18.832C16.727 47.75 3.108 40.868.475 31.68Z" fill="#FFC96A"></path><path d="M29.782 18.46a1.25 1.25 0 0 1 2.017 1.47l-.08.11-7.75 9.5a1.25 1.25 0 0 1-1.934.005l-.082-.112-3.75-5.75a1.25 1.25 0 0 1 2.014-1.476l.08.11 2.815 4.317 6.67-8.174Z" fill="#131415"></path></g></svg>
                        <h3>Indywidualne podejście</h3>
                        <p>Każde zajęcia dopasowujemy do indywidualnych predyspozycji, wieku oraz poziomu językowego ucznia.</p>
                    </div>
                    <div className="element">
                        <svg width="51" height="49" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero" fill="none"><path d="M50.452 16.194c2.5 9-3.85 19.61-13.02 26.133-9.208 6.563-21.156 9.039-28.737 3.97-7.581-5.07-10.757-17.724-7.304-27.98C4.845 8.099 14.927.24 25.683.004c10.757-.197 22.228 7.191 24.769 16.19Z" fill="#FFC96A"></path><path d="M29.782 19.46a1.25 1.25 0 0 1 2.017 1.47l-.08.11-7.75 9.5a1.25 1.25 0 0 1-1.934.005l-.082-.112-3.75-5.75a1.25 1.25 0 0 1 2.014-1.476l.08.11 2.815 4.317 6.67-8.174Z" fill="#131415"></path></g></svg>
                        <h3>Bezpłatna lekcja próbna</h3>
                        <p>Oferujemy darmowe zajęcia próbne, dzięki którym dowiesz się, czy forma naszych lekcji Ci odpowiada.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Why;