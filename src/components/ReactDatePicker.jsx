import React from 'react'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import '../App.css'

// React component DatePicker

export const ReactDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null)

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat='MM/dd/yyyy'
        minDate={new Date()} // Set only dates going forward, can also do maxDate so only past dates
        filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0} // weekdays only
        isClearable // adds delete button
        showYearDropdown
        scrollableYearDropdown // also at least 10 more props available, see docs
      />
    </div>
  )
}
