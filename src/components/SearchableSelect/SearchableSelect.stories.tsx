// SearchableSelect.stories.tsx
import React from "react";
import { Meta, Story } from "@storybook/react";
import SearchableSelect, { SearchableSelectProps } from "./SearchableSelect";

const meta: Meta = {
  title: "Components/SearchableSelect",
  component: SearchableSelect,
};

export default meta;

const Template: Story<SearchableSelectProps> = (args) => <SearchableSelect {...args} />;

export const Example = Template.bind({});
Example.args = {
  options: [
    { label: "test1", value: "test1" },
    { label: "Option1", value: "option1" },
    { label: "test2", value: "test2" },
    { label: "Option2", value: "Option2" },
  ],
};
