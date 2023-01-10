import React, { useState } from 'react'
import Datepicker from "react-tailwindcss-datepicker";

export const Kalendar = () => {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11)
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  }

  return (
    <div className='pt-5'>
      <Datepicker
        value={value}
        onChange={handleValueChange}
      />
    </div>
  );
}
