import React, {createRef, useState} from 'react';
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/light.css";
import './Time.css'

const datepickerRef = createRef();
const options = {
  enableTime: true,
  noCalendar: true,
  time_24hr: true,
  dateFormat: "H:i"
};

function Time() {

    const [date, setDate] = useState("");

    function handleFlatPickerChange(selectedDates){
      setDate(selectedDates);
    }

    return (
        <Flatpickr
            placeholder= "12:00"
            ref={datepickerRef}
            options={options}
            value={""}
            id = "time"
            onChange={handleFlatPickerChange}
        />
    )
}

export default Time;