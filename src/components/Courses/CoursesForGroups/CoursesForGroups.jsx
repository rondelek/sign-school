import React, {useState} from 'react';
import '../../Courses/Courses.css';
import {motion, AnimatePresence} from 'framer-motion';


function CoursesForGroups() {

    const [groupState, setGroupState] = useState('all');
    
    function showGroupInfoA() {
        setGroupState('a');
    }

    function closeGroupInfo() {
        setGroupState('all')
    }

    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
      };


    return (
        <div className="course">
            <AnimatePresence>
            {groupState === 'all' && 
            <motion.div 
                className="group-courses"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div className="group-course">
                    <div className="progress-steps">
                        <span className="step step-one step-a"></span>
                        <span className="step step-two step-opacity"></span>
                        <span className="step step-three step-opacity"></span>
                    </div>
                    <h3>Początkujący</h3>
                    <p className='green'>&#10004; &#160; Dostępne miejsca w grupie!</p>
                    <button onClick={showGroupInfoA}>Dowiedz się więcej</button>
                </div>
                <div className="group-course">
                    <div className="progress-steps">
                        <span className="step step-one"></span>
                        <span className="step step-two step-b"></span>
                        <span className="step step-three step-opacity"></span>
                    </div>
                    <h3>Średniozaawansowany</h3>
                    <p className='red'>&#10008; &#160; Brak dostępnych miejsc</p>
                    <button>Dowiedz się więcej</button>
                </div>
                <div className="group-course">
                    <div className="progress-steps">
                        <span className="step step-one"></span>
                        <span className="step step-two"></span>
                        <span className="step step-three step-c"></span>
                    </div>
                    <h3>Zaawansowany</h3>
                    <p className='green'>&#10004; &#160; Dostępne miejsca w grupie!</p>
                    <button>Dowiedz się więcej</button>
                </div>
            </motion.div>
            }
            </AnimatePresence>

            {/* <AnimatePresence> */}
            {groupState === 'a' &&
                <motion.div 
                    className="group-course"
                    layout transition={spring}
                >
                    <div className="progress-steps">
                        <span className="step step-one step-a"></span>
                        <span className="step step-two step-opacity"></span>
                        <span className="step step-three step-opacity"></span>
                    </div>
                    <h3>Początkujący</h3>
                    <p className='green'>&#10004; &#160; Dostępne miejsca w grupie!</p>
                </motion.div>
}

            {/* </AnimatePresence> */}
        </div>
    )
}

export default CoursesForGroups;