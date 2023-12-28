import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from "@emotion/react";
import Text from './Text';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Components/Text',
    component: Text,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        children: { control: 'text' },
        fontSize: { control: 'text' },
        variant: { control: 'select', options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2'] },
    },
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Default Text',
        variant: 'body1',
        fontSize: '1rem',
    }
};
// Add more variants as needed
