// DyForm.tsx
"use client";
import CheckboxGroup from "@/components/CheckboxGroup/CheckboxGroup";
import Input from "@/components/Input/Input";
import MultiSelectDropDown from "@/components/MultiSelectDropDown/MultiSelectDropDown";
import RadioGroup from "@/components/RadioGroup/RadioGroup";
import SearchableSelect from "@/components/SearchableSelect/SearchableSelect";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

export default function DyForm({ formConfig }: { formConfig: any[] }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log("data", data);
  };

  const registeredFields = formConfig.reduce((acc, field) => {
    acc[field.name] = register(field.name);
    return acc;
  }, {});

  const renderField = (field: any, props: any) => {
    switch (field.type) {
      case "text":
        return <Input label={field.name} {...props} />;
      case "select":
        return <SearchableSelect options={field.values} />;
      case "radio":
        return <RadioGroup options={field.values} />;
      case "multiSelect":
        return <MultiSelectDropDown options={field.values} />;
      case "checkBox":
        return (
          <CheckboxGroup
            options={field.values}
            onChange={(selectedValues: string[]) => console.log(selectedValues)}
          />
        );
      default:
        return <input type={field.type} placeholder={field.name} {...props} />;
    }
  };

  return (
    <form onSubmit={onSubmit}>
      {formConfig.map((field, index) => (
        <div key={index}>
          {renderField(field, registeredFields[field.name])}
        </div>
      ))}
      <input type="submit" />
    </form>
  );
}
