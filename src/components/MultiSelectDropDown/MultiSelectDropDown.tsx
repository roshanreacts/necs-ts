// MultiSelectDropDown.tsx
"use client"
import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

export default function MultiSelectDropDown({ options }: { options: string[] }) {
  const [selected, setSelected] = useState<any[]>([]);

  const handleChange = (selected: any) => {
    setSelected(selected);
    console.log("🚀 ~ file: MultiSelectDropDown.tsx:10 ~ handleChange ~ selected:", selected);
  };

  const formattedOptions = options.map((value) => ({ label: value, value }));

  return (
    <div>
      <MultiSelect
        options={formattedOptions}
        value={selected}
        onChange={handleChange}
        labelledBy={"Select"}
        isCreatable={true}
      />
    </div>
  );
}
