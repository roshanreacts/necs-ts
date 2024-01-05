// CheckboxGroup.tsx
"use client"
import React, { useState } from "react";
import Checkbox, { CheckboxProps } from '../Checkbox/Checkbox'

export type CheckboxGroupProps = {
  options: string[];
  onChange: (selectedValues: string[]) => void;
};

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ options, onChange }) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleCheckboxChange = (value: string) => {
    const updatedValues = selectedValues.includes(value)
      ? selectedValues.filter((val) => val !== value)
      : [...selectedValues, value];

    setSelectedValues(updatedValues);
    onChange(updatedValues);
  };

  return (
    <div>
      {options.map((value) => (
        <Checkbox
          key={value}
          label={value}
          value={value}
          checked={selectedValues.includes(value)}
          onChange={() => handleCheckboxChange(value)}
        />
      ))}
    </div>
  );
};

export default CheckboxGroup;
