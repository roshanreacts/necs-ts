// RadioGroup.tsx
"use client"
import React, { useState } from "react";
import Radio from "../Radio/Radio";

export type RadioGroupProps = {
  options: string[];
};

const RadioGroup: React.FC<RadioGroupProps> = ({ options }) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleChange = (value: string) => {
    console.log("selected value", value);
    setSelectedValue(value);
    // You can perform additional actions when a radio button is selected
  };

  return (
    <div>
      {options.map((value) => (
        <Radio
          key={value}
          label={value}
          value={value}
          checked={value === selectedValue}
          onChange={() => handleChange(value)}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
