// Checkbox.stories.tsx
import React from "react";
import { Meta, Story } from "@storybook/react";
import Checkbox, { CheckboxProps } from "./Checkbox";

const meta: Meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: 'centered',
},
tags: ['autodocs'],
argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    checked: { control: 'boolean' },
    onChange: { action: 'onchange' },
},
} satisfies Meta<typeof Checkbox>;


export default meta;

type StoryArgs = CheckboxProps & { isChecked: boolean }; // Use a different name for the prop

const Template: Story<StoryArgs> = ({ label, value, isChecked, onChange }) => (
  <Checkbox
    label={label}
    value={value}
    checked={isChecked} // Use the new prop name
    onChange={() => {
      onChange(isChecked?!isChecked:isChecked);
    }}
  />
);

export const Example = Template.bind({});
Example.args = {
  label: "Checkbox Label",
  value: "Example Value",
  isChecked: false, // Use the new prop name
};

Example.argTypes = {
  onChange: { action: "onChange" },
};
