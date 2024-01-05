// MultiSelectDropDown.stories.tsx
import React from "react";
import { Meta, Story } from "@storybook/react";
import MultiSelectDropDown from "./MultiSelectDropDown";

const meta: Meta = {
  title: "Components/MultiSelectDropDown",
  component: MultiSelectDropDown,
};

export default meta;

type StoryArgs = { options: string[] };

const Template: Story<StoryArgs> = ({ options }) => <MultiSelectDropDown options={options} />;

export const Example = Template.bind({});
Example.args = {
  options: ["Option 1", "Option 2", "Option 3"],
};

Example.argTypes = {};
