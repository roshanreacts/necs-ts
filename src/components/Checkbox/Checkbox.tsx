// Checkbox.tsx
"use client"
import React from "react";
import styled from "@emotion/styled";

export type CheckboxProps = {
  label: string;
  value:string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const CheckboxInput = styled.input`
  margin-right: 8px;
`;

const CheckboxLabel = styled.label``;

const Checkbox: React.FC<CheckboxProps> = ({value, checked, onChange }) => {
  return (
    <CheckboxWrapper>
      <CheckboxInput
        type="checkbox"
        checked={checked}
        value={value}
        onChange={(event) => onChange(event.target.checked)}
      />
      <CheckboxLabel>{value}</CheckboxLabel>
    </CheckboxWrapper>
  );
};

export default Checkbox;
