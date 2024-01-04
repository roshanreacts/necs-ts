// RadioGroup.stories.tsx
import React from "react";
import { Meta } from "@storybook/react";
import RadioGroup, { RadioGroupProps } from "./RadioGroup";

const meta: Meta = {
  title: "Components/RadioGroup",
  component: RadioGroup,
};

export default meta;

type StoryArgs = {
  options: { label: string; value: string }[];
};

export const Example = ({ options }: StoryArgs) => <RadioGroup options={options} />;
Example.args = {
  options: [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ],
};
