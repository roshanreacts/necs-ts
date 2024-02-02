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



    const openModal = (fieldSlug: any) => {
        setModalStates((prevStates) => ({ ...prevStates, [fieldSlug]: true }));
    };

    const closeModal = (fieldSlug: any) => {
        setModalStates((prevStates) => ({ ...prevStates, [fieldSlug]: false }));
    };

    React.useEffect(() => {
        const fetchData = async () => {
            try {

                const query = `query Docs {
                    listModels {
                      docs {
                        id
                        name
                      }
                    }
                  }`;
                const variables = {}
                const models = await listModel(query, variables);
                if (models?.data) {
                    console.log("models.data.listModels.docs",models.data.listModels.docs[0]);
                    
                    setAllModels(models.data.listModels.docs)
                    handlemodel(models.data.listModels.docs[0])
                    setLoading(false);
                }



                // const data = await users.resolver()?.json();
                // console.log("🚀 ~ fetchData ~ data:", data);
                // if (Object.keys(data.options).length > 0) {
                //     setModelOptions(data.options);
                // }

                // if (Object.keys(data.fields).length > 0) {
                //     setTableData(data.fields);
                //     setSendData(true);
                // }

                // //model_slug
                // if (Object.keys(data.model_slug)) {
                //     setmodelName(data.model_slug);
                // }

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [selectSlugOption, modelName]);

    useEffect(() => {
        console.log("modelfieldss", modelFields)
    }, [modelFields])
    const handlemodel = async (e: any) => {
        // setLoading(true)
        console.log("yahs e", e);
        const fieldsQuery = `query Docs($where: whereModelFieldInput) {
        listModelFields(where: $where) {
          docs {
            id
            fieldName
            type
            managed
            required
            unique
          }
        }
      }`
      const modelName = e.id?e.id:e.target.value
      console.log("🚀 ~ handlemodel ~ modelName:", modelName)

        const fieldvariables = { where: { model: { is: modelName} } }
        const modelFields = await listFields({ query: fieldsQuery, variables: fieldvariables })
        console.log("🚀 ~ fetchData ~ modelFields:", modelFields.data.listModelFields.docs)
        setModelFields(modelFields.data.listModelFields.docs)
console.log("eid",e.id);

        const selectedModelName = e?.target?.options[e.target.selectedIndex].text?e.target.options[e.target.selectedIndex].text:e.name; // Get the selected model name


        setSelectSlugOption(selectedModelName)
        setmodelName(modelName)
        // console.log("🚀 ~ handlemodel ~ selectedModelName:", selectedModelName)

        //  setLoading(false)
    }
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="config__models">
            <h2>Models</h2>
            <h4>{selectSlugOption}</h4>
            <select
                className="select__model"
                onChange={(e) => handlemodel(e)}
            >
                {/* <option value="UserModel">UserModel</option>
        <option value="ProfileModel">ProfileModel</option> */}

                {allModels && allModels.map((model, index) => (
                    <option key={index} value={model.id} >{model.name}</option>
                ))}
            </select>

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
                        tableData={modelFields}
                        modelOptions={modelOptions}
                        modelname={modelName}
                    />
                    {/* )} */}
                </div>
            </div>
        </div>
    );
}
