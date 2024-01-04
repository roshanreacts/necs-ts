// CheckboxGroup.stories.tsx
import React from "react";
import { Meta, Story } from "@storybook/react";
import CheckboxGroup, { CheckboxGroupProps } from "./CheckboxGroup";

const meta: Meta = {
  title: "Components/CheckboxGroup",
  component: CheckboxGroup,
};

export default meta;

type StoryArgs = CheckboxGroupProps & { options: { label: string; value: string }[] };

const Template: Story<StoryArgs> = ({ options, onChange }) => (
  <CheckboxGroup options={options} onChange={onChange} />
);

export const Example = Template.bind({});
Example.args = {
  options: [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ],
  onChange: (selectedValues) => console.log("Selected values:", selectedValues),
};

Example.argTypes = {
  onChange: { action: "onChange" },
};
