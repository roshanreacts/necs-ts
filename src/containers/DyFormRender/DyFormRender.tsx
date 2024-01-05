import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";

export default function DyFormRender({ fields }: { fields: any }) {
    const { register, handleSubmit, formState: { errors } } = useForm<any>();
    const onSubmit: SubmitHandler<any> = data => {
        console.log("data", data);
    };
    // console.log(fields);


    return (
        <>
            <form onSubmit={handleSubmit((data) => onSubmit(data))}>
                {fields &&
                    Object.entries(fields).map(([fieldSlug, fieldValue]: [string, any]) => {
                        // console.log(fieldSlug, ' ', fieldValue);
                        return (
                            <div key={fieldSlug}>
                                <div key={fieldSlug}>
                                    {renderField(fieldSlug, { ...register(fieldSlug), defaultValue: fieldValue })}
                                </div>
                            </div>
                        );
                    })}
                <input type="submit" />
            </form>
        </>
    );
}

const renderField = (field: any, props: any) => {
    switch (field) {
        case "field_name":
            return <input {...props} />;
        case "field_slug":
            return <input {...props} />;
        case "field_type":
            return <input {...props} />;
        case "required":
            return <input {...props} />;
        default:
            return
    }
};