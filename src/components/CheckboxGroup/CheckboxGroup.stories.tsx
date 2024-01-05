// CheckboxGroup.stories.tsx
import React from "react";
import { Meta, Story } from "@storybook/react";
import CheckboxGroup, { CheckboxGroupProps } from "./CheckboxGroup";

const meta: Meta = {
  title: "Components/CheckboxGroup",
  component: CheckboxGroup,
};

export default meta;

type StoryArgs = CheckboxGroupProps & { options: string[] };

const Template: Story<StoryArgs> = ({ options, onChange }) => (
  <CheckboxGroup options={options} onChange={onChange} />
);

export const Example = Template.bind({});
Example.args = {
  options: ["Option 1", "Option 2", "Option 3"],
  onChange: (selectedValues) => console.log("Selected values:", selectedValues),
};

Example.argTypes = {
  onChange: { action: "onChange" },
};
