import type { Meta, StoryObj } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import DyForm from "./DyForm"; // Replace with the actual path to your component

const meta = {
  title: "Container/DyForm",
  component: DyForm,
  decorators: [withKnobs],
} satisfies Meta<typeof DyForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    formConfig: [
      {
        label: "First Name",
        name: "firstName",
        type: "text",
        options: { required: true, maxLength: 80 },
      },
      {
        label: "Last Name",
        name: "lastName",
        type: "text",
        options: { required: true, maxLength: 100 },
      },
    ],
  },
};
