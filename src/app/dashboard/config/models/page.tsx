"use client"
import { ProfileModel, UserModel, allModels } from "@/api_mock";
import AccordionModels from "@/components/Accordion/AccordionModels";
import TableComponent from "@/components/Table/TableComponent";
import { HttpResponse, http } from "msw";
import React from "react";

export default function Models() {
    // get allModels
    // and on click call the model specific api to get all data
    // console.log(allModels);

    const [selectSlugOption, setSelectSlugOption] = React.useState<any>('UserModel');
    const [tableData, setTableData] = React.useState<any[]>([]);
    const [sendData, setSendData] = React.useState(false)

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const users = http.get('https://api.example.com/user', (): any => {
                    return selectSlugOption === 'UserModel' ? HttpResponse.json(UserModel) : HttpResponse.json(ProfileModel);
                });

                const data = await users.resolver()?.json();

                if (Object.keys(data.fields).length > 0) {
                    // alert("h")
                    // console.log(data.fields);

                    setTableData(data.fields);
                    // }
                    // if (data.fields.length > 0) {
                    setSendData(true)
                    // console.log("send data", data.fields);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [selectSlugOption]);


    return (
        <div className="config__models">
            <h2>Models</h2>
            <div className="model_list_data" style={{ display: "flex" }}>
                {/* @ts-ignore */}
                {/* <AccordionModels isOpen={true} items={allModels} setSelectSlugOption={setSelectSlugOption} /> */}
                <div className="Table__data" style={{ width: '100%', height: '90vh', marginLeft: "35px" }}>
                    {sendData &&
                        <TableComponent selectSlugOption={selectSlugOption} tableData={tableData} />
                    }
                </div>
            </div>
        </div>
    )
}