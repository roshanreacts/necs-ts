"use client"
import { listFields } from "@/app/actions";
import TableComponent from "@/components/Table/TableComponent";
import { css } from "@emotion/css";
import { HttpResponse, http } from "msw"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";

export default function Model() {
    const [data, setData] = useState<any[]>([]);
    const [modelFields, setModelFields] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [modelOptions, setModelOptions] = useState<any[]>([]);

    const { modelId } = useParams();


   
    useEffect(() => {
        handlemodel();
    }, [])
    const handlemodel = async () => {
        setLoading(true);
        const fieldsQuery = `query Docs($where: whereModelFieldInput) {
        listModelFields(where: $where) {
          docs {
            id
            fieldName
            type
            managed
            required
            unique
            default
          }
        }
      }`

        const fieldvariables = { where: { model: { is: modelId } } }
        const modelFields = await listFields({ query: fieldsQuery, variables: fieldvariables })
        console.log("🚀 ~ fetchData ~ modelFields:", modelFields.data.listModelFields?.docs)
        setModelFields(modelFields.data.listModelFields.docs)

        // console.log("🚀 ~ handlemodel ~ selectedModelName:", selectedModelName)

        const modelOptionsQuery = `query Docs($where: whereModelOptionInput) {
            listModelOptions(where: $where) {
              docs {
                keyName
                managed
                name
                type
                value
              }
            }
          }`
        const modelOptionsVariable = { where: { model: { is: modelId } } }

        const modelOptionsData = await listFields({ query: modelOptionsQuery, variables: modelOptionsVariable })
        console.log("🚀 ~ handlemodel ~ modelOptions:", modelOptionsData.data?.listModelOptions?.docs)
        setModelOptions(modelOptionsData.data?.listModelOptions?.docs)

        setLoading(false)
    }

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <div className="model_list_data" style={{ display: "flex", flexDirection: "column" }}>
                {/* @ts-ignore */}
                {/* <AccordionModels isOpen={true} items={allModels} setSelectSlugOption={setSelectSlugOption} /> */}
                {/* add a select option */}
                <h3 style={{ margin: "auto", marginTop: "60px", marginBottom: "20px" }}>Model Fields</h3>
                <div
                    className="Table__data"
                    style={{ width: "-webkit-fill-available", height: "50vh", marginLeft: "35px" }}
                >
                    {/* {sendData  &&( */}
                    <TableComponent
                        selectSlugOption={{}}
                        tableData={modelFields}
                        modelOptions={''}
                        modelname={modelId}
                        
                    />
                    {/* )} */}
                </div>


                <h3 style={{ margin: "auto", marginTop: "60px", marginBottom: "20px" }}>Model Options</h3>

                <div
                    className="Table__data"
                    style={{ width: "-webkit-fill-available", height: "50vh", marginLeft: "35px", zIndex: '-1' }}
                >
                    <TableComponent
                        selectSlugOption={{}}
                        tableData={modelOptions}
                        modelOptions={''}
                        modelname={modelId}
                        type="MODEL_OPTIONS"
                    />
                    {/* )} */}
                </div>
            </div>
        </div>
    )
}