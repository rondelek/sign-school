import React from 'react';
import Hero from '../Hero/Hero';
import Kids from '../Kids/Kids';
import Adults from '../Adults/Adults';
import LessonFirst from '../LessonFirst/LessonFirst';
import Why from '../Why/Why';
import LessonSecond from '../LessonSecond/LessonSecond';

function Main() {
    return (
        <>
            <Hero/>
            <Adults/>
            <Kids/>
            <LessonFirst/>
            <Why/>
            <LessonSecond/>
        </>
    )
}

export default Main;