
"use client"
import { listModel } from "@/app/actions";
import TableComponent from "@/components/Table/TableComponent";
import { useEffect, useState } from "react";

export default function tabs(){

    const [tabData, setTabData] = useState<any[]>([]);
    const [loading,setLoading]=useState(true)

    useEffect(() => {
      const fetchData = async () => {
        const tabQuery = `query Docs {
          listTabs {
            docs {
              icon
              order
              label
              model {
                id
                name
              }
            }
          }
        }
        `;
        
    
        try {
          // Fetch data from GraphQL query
          const data  = await listModel(tabQuery, {});
          console.log("🚀 ~ fetchData ~ data:", data)
          const fetchedTabData = data.data.listTabs.docs;
          console.log("🚀 ~ fetchData ~ fetchedTabData:", fetchedTabData)
          if (data) {
            // console.log("models.data.listModels.docs", models.data.listModels.docs[0]);

            setTabData(fetchedTabData)

            setLoading(false);
        }
          
        } catch (error) {
          console.error("Error fetching tab data:", error);
        }
      };
    
      fetchData();
    }, []); // Empty dependency array ensures useEffect runs only once on mount


    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="config__models">

            <div className="tab_list_data" style={{ display: "flex" }}>
                {/* @ts-ignore */}
                {/* <AccordionModels isOpen={true} items={allModels} setSelectSlugOption={setSelectSlugOption} /> */}
                {/* add a select option */}

                <div
                    className="Table__data"
                    style={{ width: "100%", height: "90vh", marginLeft: "35px" }}
                >
                    <TableComponent
                        // selectSlugOption={}
                        tableData={tabData}
                        // modelOptions={}
                        // modelname={}
                        type="Tab_LIST"
                    />
                  
                </div>
            </div>

            
        </div>
    );

}