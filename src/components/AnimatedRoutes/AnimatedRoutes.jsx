import React from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import Main from '../Main/Main';
import Pricing from '../Pricing/Pricing'
import Form from '../Form/Form';
import Contact from '../Contact/Contact';
import CoursesForMatura from "../Courses/CoursesForAdults/CoursesForAdults";


function AnimatedRoutes() {

    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Main/>}/>
                <Route path="form" element={<Form/>}/>
                <Route path="cennik" element={<Pricing/>}/>
                <Route path="kontakt" element={<Contact/>}/>
                <Route path="matura" element={<CoursesForMatura/>}/>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;