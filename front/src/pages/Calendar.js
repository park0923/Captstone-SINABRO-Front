import React, {useState} from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {

  const [startDate, setStartDate] = useState(new Date());
  
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}      
      highlightDates={21}
      inline
    />
  );
};


export default Calendar