"use client"
import { listFields } from "@/app/actions";
import TableComponent from "@/components/Table/TableComponent";
import { HttpResponse, http } from "msw"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";

export default function Model() {
    const [data, setData] = useState<any[]>([]);
    const [modelFields, setModelFields] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

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
        console.log("🚀 ~ fetchData ~ modelFields:", modelFields.data.listModelFields.docs)
        setModelFields(modelFields.data.listModelFields.docs)

        // console.log("🚀 ~ handlemodel ~ selectedModelName:", selectedModelName)

        setLoading(false)
    }

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
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
                        selectSlugOption={{}}
                        tableData={modelFields}
                        modelOptions={''}
                        modelname={''}
                    />
                    {/* )} */}
                </div>
            </div>
        </div>
    )
}