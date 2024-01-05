// RadioGroup.stories.tsx
import React from "react";
import { Meta, Story } from "@storybook/react";
import RadioGroup, { RadioGroupProps } from "./RadioGroup";

const meta: Meta = {
  title: "Components/RadioGroup",
  component: RadioGroup,
};

export default meta;

type StoryArgs = RadioGroupProps & { options: string[] };

const Template: Story<StoryArgs> = ({ options }) => <RadioGroup options={options} />;

export const Example = Template.bind({});
Example.args = {
  options: ["Option 1", "Option 2", "Option 3"],
};

Example.argTypes = {};
