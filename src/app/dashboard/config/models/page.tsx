"use client"
import { allModels } from "@/api_mock";
import AccordionModels from "@/components/Accordion/AccordionModels";

export default function Models() {
    // get allModels
    // and on click call the model specific api to get all data
    // console.log(allModels);
    return (
        <div className="config__models">
            <h2>Models</h2>
            <AccordionModels isOpen={true} items={allModels} />
        </div>
    )
}