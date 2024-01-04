// CheckboxGroup.tsx
import React, { useState } from "react";
import Checkbox, { CheckboxProps } from '../Checkbox/Checkbox'

export type CheckboxGroupProps = {
  options: { label: string; value: string }[];
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
      {options.map((option) => (
        <Checkbox
          key={option.value}
          label={option.label}
          value={option.value}
          checked={selectedValues.includes(option.value)}
          onChange={() => handleCheckboxChange(option.value)}
        />
      ))}
    </div>
  );
};

export default CheckboxGroup;
