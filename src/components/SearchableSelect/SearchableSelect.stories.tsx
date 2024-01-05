// SearchableSelect.stories.tsx
import React from "react";
import { Meta, Story } from "@storybook/react";
import SearchableSelect,{SearchableSelectProps} from "./SearchableSelect";

const meta: Meta = {
  title: "Components/SearchableSelect",
  component: SearchableSelect,
};

export default meta;

type StoryArgs = SearchableSelectProps & { options: string[] };

const Template: Story<StoryArgs> = ({ options }) => <SearchableSelect options={options} />;

export const Example = Template.bind({});
Example.args = {
  options: ["Option 1", "Option 2", "Option 3"],
};

Example.argTypes = {};
