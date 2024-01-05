// SearchableSelect.tsx
"use client"
import React from "react";
import Select from "react-select";

export interface SearchableSelectProps {
  options: string[];
  onChange?: (selectedOption: any) => void; // You can use 'any' or leave it as 'ValueType<any>'
}

const SearchableSelect: React.FC<SearchableSelectProps> = ({ options, onChange }) => {
  const formattedOptions = options.map((value) => ({ label: value, value }));

  const handleChange = (selectedOption: any) => {
    console.log("🚀 ~ file: SearchableSelect.tsx:12 ~ handleChange ~ selectedOption:", selectedOption);
    
    if (onChange) {
      onChange(selectedOption);
    }
  };

  return (
    <div className="App">
      <Select options={formattedOptions} onChange={handleChange} />
    </div>
  );
};

export default SearchableSelect;
