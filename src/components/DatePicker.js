import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";

const App = (props) => {
  const [selectedDay, setSelectedDay] = useState(
    props.containerState.initialDate
  );

  function setAllSelectedDay(value) {
    props.containerState.initialDate = value;
    setSelectedDay(value);
  }

  // render regular HTML input element
  const renderCustomInput = ({ ref }) => (
    <input
      readOnly
      ref={ref} // necessary
      placeholder="Wybierz datę"
      value={
        selectedDay
          ? `${selectedDay.day}/${selectedDay.month}/${selectedDay.year}`
          : ""
      }
      style={{
        textAlign: "center",
        padding: "1rem 1.5rem",
        fontSize: "1.5rem",
        fontWeight: "bold",
        border: "2.5px solid #9c88ff",
        borderRadius: "100px",
        boxShadow: "0 1.5rem 2rem rgba(156, 136, 255, 0.2)",
        color: "#542cb1",
        outline: "none",
        cursor: "pointer",
      }}
      className="my-custom-input-class" // a styling class
    />
  );

  return (
    <DatePicker
      value={selectedDay}
      onChange={setAllSelectedDay}
      renderInput={renderCustomInput} // render a custom input
      shouldHighlightWeekends
      colorPrimary="#542cb1"
    />
  );
};

export default App;
