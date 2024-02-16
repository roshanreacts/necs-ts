"use client";
import { listModel } from "@/app/actions";
import TableComponent from "@/components/Table/TableComponent";
import { useEffect, useState } from "react";

export default function components() {
  const [componentData, setComponentData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const componentsQuery = `query Docs {
        listComponents {
            docs {
              code
              description
              label
              modules
              name
              id
            }
          }
        }
        `;

      try {
        // Fetch data from GraphQL query
        const data = await listModel(componentsQuery, {});
        console.log("🚀 ~ fetchData ~ data:", data);
        const fetchedComponentData = data.data.listComponents.docs;
        console.log("🚀 ~ fetchData ~ fetchedComponentData:", fetchedComponentData);
        if (data) {
          // console.log("models.data.listModels.docs", models.data.listModels.docs[0]);

          setComponentData(fetchedComponentData);

          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching components data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="config__models">
      <div className="component_list_data" style={{ display: "flex" }}>
        {/* @ts-ignore */}
        {/* <AccordionModels isOpen={true} items={allModels} setSelectSlugOption={setSelectSlugOption} /> */}
        {/* add a select option */}

        <div
          className="Table__data"
          style={{ width: "100%", height: "90vh", marginLeft: "35px" }}
        >
          <TableComponent
            // selectSlugOption={}
            tableData={componentData}
            // modelOptions={}
            // modelname={}
            type="Component_LIST"
          />
        </div>
      </div>
    </div>
  );
}
