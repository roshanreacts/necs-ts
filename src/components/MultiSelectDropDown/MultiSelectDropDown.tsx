import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

export default function MultiSelectDropDown({ options }: { options: { label: string; value: string }[] }) {
  const [selected, setSelected] = useState([]);
  const handleChange=(selected:any) =>{
    setSelected(selected)
    console.log("🚀 ~ file: MultiSelectDropDown.tsx:10 ~ handleChange ~ selected:", selected)
  } 

  return (
    <div>
      <MultiSelect
        options={options}
        value={selected}
        onChange={handleChange}
        labelledBy={"Select"}
        isCreatable={true}
      />
    </div>
  );
}
