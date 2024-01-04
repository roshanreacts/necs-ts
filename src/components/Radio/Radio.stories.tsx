import type { Meta, StoryObj } from '@storybook/react';
import Radio from './Radio';
import React , { useState } from 'react';

const meta = {
    title: 'Components/Radio',
    component: Radio,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        value: { control: 'text' },
        checked: { control: 'boolean' },
        onChange: { action: 'onchange' },
    },
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;


const handleChange = () => {
    checked = !checked
};

let checked = false
export const Option1: Story = {
    
    args: {
        label: 'Option 1',
        value: 'option1',
        checked: checked,
        onChange:handleChange
    },
};

export const Option2: Story = {
    args: {
        label: 'Option 2',
        value: 'option2',
        checked: true, // Set the checked prop to true for the selected option
    },
};
