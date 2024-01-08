"use client";
import { startCase } from "lodash";
import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

export default function DyFormRender({ fields }: { fields: any }) {
    const [dynamicFields, setDynamicFields] = React.useState<any[]>([]);

    React.useEffect(() => {
        setDynamicFields(
            Object.entries(fields).map(([fieldSlug, fieldValue]: [string, any]) => ({
                [fieldSlug]: fieldValue,
            }))
        );
    }, [fields]);

    const addNewField = () => {
        const newFieldSlug = `newField${dynamicFields.length + 1}`;
        const newFieldValue = {
            label: "",
            type: "text",
            isEditable: false,
            required: false,
            fieldOptions: []
        };
        setDynamicFields([...dynamicFields, { [newFieldSlug]: newFieldValue }]);
    };

    return (
        <>
            {dynamicFields.length &&
                dynamicFields.map((dynamicField) => {
                    const [fieldSlug, fieldValue] = Object.entries(dynamicField)[0];
                    return (
                        <div key={fieldSlug} style={{ padding: "10px" }}>
                            <DynamicForm fieldSlug={fieldSlug} fieldValue={fieldValue} />
                        </div>
                    );
                })}
            <button onClick={addNewField}>Add New Field</button>
        </>
    );
}

interface DynamicFormProps {
    fieldSlug: string;
    fieldValue: any;
}

function DynamicForm({ fieldSlug, fieldValue }: DynamicFormProps) {
    const {
        register,
        control,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<any>();

    const selectedType = watch("type");

    const setFieldValue = (field: string, value: any) => {
        setValue(field, value);
    };

    const onSubmit: SubmitHandler<any> = (data) => {
        console.log(`Form ${fieldSlug}, data:`, data);
    };

    const renderField = (
        field: any,
        props: any,
        control: any,
        setFieldValue: Function
    ) => {
        const options = [
            { value: "string", label: "String" },
            { value: "enum", label: "ENUM" },
            { value: "boolean", label: "Boolean" },
            { value: "relationship", label: "Relationship" },
            { value: "bcrypt", label: "Bcrypt" },
        ];

        switch (field) {
            case "label":
                return (
                    <>
                        {startCase(field)}
                        <input {...props} onChange={(e) => setFieldValue(field, e.target.value)} />
                    </>
                );
            case "default":
                if (props.name) {
                    // add a condition to check the default value field is for ENUM, string, checkbox.
                    return (
                        <>
                            {startCase(field)}
                            <input {...props} onChange={(e) => setFieldValue(field, e.target.value)} />
                        </>
                    );
                }
            case "fieldOptions":
            case "enum":
                return (
                    <>
                        {(selectedType === undefined || selectedType === 'enum') && (
                            <>
                                <p>{startCase(field)}</p>
                                <textarea {...props} onChange={(e) => setFieldValue(field, e.target.value)} />
                            </>
                        )}
                    </>
                );
            case "type":
                return (
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {startCase(field)}
                        <select {...props} multiple={false} onChange={(e) => setFieldValue(field, e.target.value)}>
                            {options.map((item: any) => (
                                <option key={item.value} value={item.value}>
                                    {item.label}
                                </option>
                            ))}
                        </select>
                        {field === "type" && (selectedType == undefined && selectedType === "enum") && field !== "enum" && (
                            <>
                                {(selectedType === undefined || selectedType === 'enum') && (
                                    <>
                                        <p>{startCase("enum")}</p>
                                        <textarea {...register("enum")} onChange={(e) => setFieldValue(field, e.target.value)} />
                                    </>
                                )}
                            </>
                        )}
                    </div>);
            case "isEditable":
            case "required":
                return (
                    <>
                        {startCase(field)}
                        <input
                            type="checkbox"
                            {...props}
                            onChange={(e) => setFieldValue(field, e.target.checked)}
                        />
                    </>
                );
            default:
                return (
                    <>
                        {startCase(field)}
                        <input type="checkbox" {...props} onChange={(e) => setFieldValue(field, e.target.checked)} />
                    </>
                );
        }
    };

    return (
        <form key={fieldSlug + fieldValue} onSubmit={handleSubmit((data) => onSubmit(data))}>
            {Object.entries(fieldValue).map(([key, value]: [string, any]) => {
                return (
                    <div
                        key={fieldSlug + key}
                        style={{ display: "flex", gap: "6px", margin: "6px 0" }}
                    >
                        {renderField(
                            key,
                            {
                                ...register(key),
                                ...(Array.isArray(value) && key === "enum"
                                    ? { defaultValue: value }
                                    : Array.isArray(value) && key != "enum"
                                        ? {}
                                        : { defaultValue: value }),
                            },
                            control,
                            setFieldValue
                        )}
                    </div>
                );
            })}
            <input type="submit" value="Save" />
        </form>
    );
}