// src/FormComponent.stories.js

import React from 'react';
import { useForm } from 'react-hook-form';
import { withKnobs } from '@storybook/addon-knobs';

import DyForm from './DyForm'; // Replace with the actual path to your component

export default {
  title: 'FormComponent',
  component: DyForm,
  decorators: [withKnobs], // Optional, for using knobs in Storybook
};

const Template = (args:any) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return <DyForm {...args} register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} />;
};

export const Default = Template.bind({});
Default.args = {
  formConfig: [
    { name: 'First name', type: 'text', options: { required: true, maxLength: 80 } },
    { name: 'Last name', type: 'text', options: { required: true, maxLength: 100 } },
    // Add other fields as needed
  ],
};
