"use client";
import { ProfileModel, UserModel, allModels } from "@/api_mock";
import { listFields, listModel } from "@/app/actions";
import AccordionModels from "@/components/Accordion/AccordionModels";
import TableComponent from "@/components/Table/TableComponent";
import { HttpResponse, http } from "msw";
import React, { useEffect } from "react";

export default function Models() {
    // get allModels
    // and on click call the model specific api to get all data
    // console.log(allModels);

    const [selectSlugOption, setSelectSlugOption] =
        React.useState<any>("UserModel");
    const [modelOptions, setModelOptions] = React.useState<any[]>([]);
    const [tableData, setTableData] = React.useState<any[]>([]);
    const [modelName, setmodelName] = React.useState<any[]>([]);
    const [sendData, setSendData] = React.useState(false);
    const [modelFields, setModelFields] = React.useState<any[]>([]);
    const [dynamicFields, setDynamicFields] = React.useState<any[]>([]);
    const [modalStates, setModalStates] = React.useState({});
    const [allModels, setAllModels] = React.useState<any[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [defaultModel, setDefaultModel] = React.useState(false);



    const openModal = (fieldSlug: any) => {
        setModalStates((prevStates) => ({ ...prevStates, [fieldSlug]: true }));
    };

    const closeModal = (fieldSlug: any) => {
        setModalStates((prevStates) => ({ ...prevStates, [fieldSlug]: false }));
    };

    React.useEffect(() => {
        const fetchData = async () => {
            try {

                const query = `query ListModels {
                    listModels {
                      docs {
                        name
                        id
                        managed
                        prefix
                        createdOn
                      }
                    }
                  }`;
                const variables = {}
                const models = await listModel(query, variables);
                if (models?.data) {
                    // console.log("models.data.listModels.docs", models.data.listModels.docs[0]);

                    setAllModels(models.data.listModels.docs)
                    if (defaultModel === false) {
                        setDefaultModel(true)
                    }
                    setLoading(false);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [selectSlugOption, modelName, defaultModel]);

    useEffect(() => {
        console.log("modelfieldss", modelFields)
    }, [modelFields])
    
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="config__models">
            <h2>Models</h2>
            <h4>{selectSlugOption}</h4>
            {/* <select
                className="select__model"
                onChange={(e) => handlemodel(e)}
            >
                <option value="UserModel">UserModel</option>
        <option value="ProfileModel">ProfileModel</option>

                {allModels && allModels.map((model, index) => (
                    <option key={index} value={model.id}>{model.name}</option>
                ))}
            </select> */}

            <div className="model_list_data" style={{ display: "flex" }}>
                {/* @ts-ignore */}
                {/* <AccordionModels isOpen={true} items={allModels} setSelectSlugOption={setSelectSlugOption} /> */}
                {/* add a select option */}

                <div
                    className="Table__data"
                    style={{ width: "100%", height: "90vh", marginLeft: "35px" }}
                >
                    {/* {sendData  &&( */}
                    <TableComponent
                        selectSlugOption={selectSlugOption}
                        tableData={allModels}
                        modelOptions={modelOptions}
                        modelname={modelName}
                        type="MODEL_LIST"
                    />
                    {/* )} */}
                </div>
            </div>

            
        </div>
    );
}
