"use client"
import { ModelsOptionsType, UserModel, allModels, ProfileModel } from "@/api_mock";
import Accordion from "@/components/Accordion/Accordion";

export default function Models() {
    // get allModels
    // and on click call the model specific api to get all data
    // console.log(allModels);


    return (
        <div className="config__models">
            <h2>Models</h2>
            <Accordion isOpen={true} items={[UserModel]} />
        </div>
    )
}