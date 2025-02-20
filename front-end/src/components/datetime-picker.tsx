"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

interface DateTimePickerProps {
  value?: Date;
  onChange: (date: Date | null) => void;
  required?: boolean;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({
  value,
  onChange,
  required = false,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(value || null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    onChange(date);
  };

  return (
    <div className="w-full">
      <div className="relative">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="yyyy-MM-dd HH:mm"
          className="w-full px-3 py-2 bg-transparent border rounded-lg shadow-sm dark:bg-white/5 dark:border-white/10 border-white/20 focus:ring-green-500 focus:border-green-500"
          placeholderText="YYYY-MM-DD HH:MM"
        />
      </div>
    </div>
  );
};

export default DateTimePicker;