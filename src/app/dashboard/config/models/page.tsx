"use client"
import { allModels } from "@/api_mock";
import AccordionModels from "@/components/Accordion/AccordionModels";
import TableComponent from "@/components/Table/TableComponent";
import React from "react";

export default function Models() {
    // get allModels
    // and on click call the model specific api to get all data
    // console.log(allModels);

    const [selectSlugOption, setSelectSlugOption] = React.useState<any>('UserModel');

    React.useEffect(() => {
        console.log("askbdksjkabdkjasbjb", selectSlugOption);

    }, [selectSlugOption])

    return (
        <div className="config__models">
            <h2>Models</h2>
            <div className="model_list_data" style={{ display: "flex" }}>
                {/* @ts-ignore */}
                <AccordionModels isOpen={true} items={allModels} setSelectSlugOption={setSelectSlugOption} />
                <div className="Table__data" style={{ width: '100%', height: '90vh', marginLeft: "35px" }}>
                    <TableComponent selectSlugOption={selectSlugOption} />
                </div>
            </div>
        </div>
    )
}