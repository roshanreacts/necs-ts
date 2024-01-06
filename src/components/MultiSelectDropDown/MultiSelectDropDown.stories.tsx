import React from "react";
import { Meta } from "@storybook/react";
import MultiSelectDropDown from "./MultiSelectDropDown";

const meta: Meta = {
  title: "Components/MultiSelectDropDown",
  component: MultiSelectDropDown,
};

export default meta;

type StoryArgs = {
  options: { label: string; value: string }[];
};

export const Example = ({ options }: StoryArgs) => <MultiSelectDropDown options={options} />;
Example.args = {
  options: [
    { label: "test1", value: "test1" },
    { label: "Option1", value: "option1" },
    { label: "test2", value: "test2" },
    { label: "Option2", value: "Option2" },
  ],
};
