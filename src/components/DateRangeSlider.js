import React from 'react';

const DateRangeSlider = ({ min, max, value, onChange }) => {
  return (
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default DateRangeSlider;

