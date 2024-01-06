"use client"
import React from 'react'
import { useForm, SubmitHandler, Controller } from "react-hook-form";

export default function DyFormRender({ fields }: { fields: any }) {
    const [dynamicFields, setDynamicFields] = React.useState<any[]>([]);

    React.useEffect(() => {
        setDynamicFields(Object.entries(fields).map(([fieldSlug, fieldValue]: [string, any]) => ({ [fieldSlug]: fieldValue })));
    }, [fields]);

    const addNewField = () => {
        const newFieldSlug = `newField${dynamicFields.length + 1}`;
        const newFieldValue = { label: '', type: 'text', isEditable: false, required: false }; // Set default values
        setDynamicFields([...dynamicFields, { [newFieldSlug]: newFieldValue }]);
    };

    return (
        <>
            {dynamicFields.length && dynamicFields.map((dynamicField) => {
                const [fieldSlug, fieldValue] = Object.entries(dynamicField)[0];
                return (
                    <div key={fieldSlug} style={{ padding: '10px' }}>
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
        formState: { errors },
    } = useForm<any>();

    const onSubmit: SubmitHandler<any> = (data) => {
        console.log(`Form for ${fieldSlug} submitted with data:`, data);
    };

    return (
        <form onSubmit={handleSubmit((data) => onSubmit(data))}>
            {Object.entries(fieldValue).map(([key, value]: [string, any]) => {
                return (
                    <div key={key + value} style={{ display: 'flex' }}>
                        {key}
                        {renderField(key, { ...register(key), defaultValue: value ?? undefined }, control)}
                    </div>
                );
            })}
            <input type="submit" value={`Submit ${fieldSlug}`} />
        </form>
    );
}

const renderField = (field: any, props: any, control: any) => {
    const options = [
        { value: 'string', label: 'String' },
        { value: 'enum', label: 'ENUM' },
        { value: 'boolean', label: 'Boolean' },
        { value: 'relationship', label: 'Relationship' },
        { value: 'bcrypt', label: 'Bcrypt' },
    ];

    switch (field) {
        case 'label':
            return <input {...props} />;
        case 'enum':
            if (props.name === "enum" && Array.isArray(props.defaultValue)) {
                return (
                    <select {...props}>
                        {props.defaultValue.map((enumValue: string) => (
                            <option key={enumValue} value={enumValue}>
                                {enumValue}
                            </option>
                        ))}
                    </select>
                );
            }
            return <p>Error: Enum values not specified</p>;
        case 'type':
            return (
                <>
                    <select {...props} multiple={false}>
                        {options.map((item: any) => (
                            <option key={item.value} value={item.value}>
                                {item.label}
                            </option>
                        ))}
                    </select>
                </>
            );
        case 'isEditable':
        case 'required':
            return <input type="checkbox" {...props} />;
        default:
            return null;
    }
};