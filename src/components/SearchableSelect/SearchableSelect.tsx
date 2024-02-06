// SearchableSelect.tsx
import React from "react";
import Select from "react-select";

export interface SearchableSelectProps {
  options: { label: string; value: string }[];
  onChange?: (selectedOption: any) => void; // You can use 'any' or leave it as 'ValueType<any>'
}

const SearchableSelect: React.FC<SearchableSelectProps> = ({ options, onChange }) => {
  const handleChange = (selectedOption: any) => {
    
    if (onChange) {
      onChange(selectedOption);
    }
  };

  return (
    <div className="App">
      <Select options={options} onChange={handleChange} />
    </div>
  );
};

export default SearchableSelect;
