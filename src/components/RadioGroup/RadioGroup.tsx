// RadioGroup.tsx
import React, { useState } from "react";
import Radio from "../Radio/Radio";

export type RadioGroupProps = {
  options: { label: string; value: string }[];
};

const RadioGroup: React.FC<RadioGroupProps> = ({ options }) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleChange = (value: string) => {
    console.log("selected valuie",value);
    setSelectedValue(value);
    // You can perform additional actions when a radio button is selected
  };

  return (
    <div>
      {options.map((option) => (
        <Radio
          key={option.value}
          label={option.label}
          value={option.value}
          checked={option.value === selectedValue}
          onChange={() => handleChange(option.value)}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
