import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import '../../Courses/Courses.css';


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
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    
                    <main role="main" class="main-content">
  <div class="calendar">
    <div class="calendar__wrapper">
      <div class="calendar__spacer"></div>

      <div class="calendar__week">
        <div class="calendar__week-day">Pon<span>iedziałek</span></div>
        <div class="calendar__week-day">Wt<span>orek</span></div>
        <div class="calendar__week-day">Śr<span>oda</span></div>
        <div class="calendar__week-day">Czw<span>artek</span></div>
        <div class="calendar__week-day">P<span>ią</span>tek</div>
      </div>

      <div class="calendar__time">
        <div class="calendar__time-slot">08:00</div>
        <div class="calendar__time-slot">09:00</div>
        <div class="calendar__time-slot">10:00</div>
        <div class="calendar__time-slot">11:00</div>
        <div class="calendar__time-slot">12:00</div>
        <div class="calendar__time-slot">13:00</div>
        <div class="calendar__time-slot">14:00</div>
        <div class="calendar__time-slot">15:00</div>
        <div class="calendar__time-slot">16:00</div>
        <div class="calendar__time-slot">17:00</div>
        <div class="calendar__time-slot">18:00</div>
        <div class="calendar__time-slot">19:00</div>
        <div class="calendar__time-slot">20:00</div>
        <div class="calendar__time-slot">21:00</div>
      </div>

      <div class="calendar__planner">
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>
        <div class="calendar__planner-cell"></div>


  


        <div class="calendar__planner-task calendar__planner-task--1 calendar__planner-task--reminder">
            <span>GRUPA MAX. 8 OSÓB</span> 
            <span>KURS OGÓLNY</span>
            <div className="highlighted">Start: 1 grudnia</div>
            <button>Zapisz się</button>
        </div>
        <div class="calendar__planner-task calendar__planner-task--2 calendar__planner-task--todo">TODO: Prep. meetup</div>
        {/* <div class="calendar__planner-task calendar__planner-task--3 calendar__planner-task--fun">TI 2019 - Grand Finals</div> */}
        {/* <div class="calendar__planner-task calendar__planner-task--4 calendar__planner-task--todo">Code review & mentoring</div> */}
        <div class="calendar__planner-task calendar__planner-task--5 calendar__planner-task--lunch">I wish my week looked this empty...</div>
      </div>
    </div>
  </div>
</main>

                </motion.div>
}

        </div>
    )
}

export default CoursesForGroups;