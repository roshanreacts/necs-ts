"use client";
import { listModel } from "@/app/actions";
import Modal from "@/components/Modal/Modal";
import { css } from "@emotion/css";
import { startCase } from "lodash";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import * as ReactIcons from "react-icons/ai";

const tabStyles = css`
  /* Add your tab styles here */
  background-color: #eee;
  padding: 5px;
  margin: 5px 1px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const iconStyles = css`
  /* Add your icon styles here */
  margin-right: 5px;
`;

const rowStyle = css`
  display: flex;
  width: max-content;
  background: cornflowerblue;
  height: 2em;
  padding: 0px 5px;
`;

const mainClassStyle = css`
  display: flex;
  gap: 2em;
`;

export default function TabsView() {
  const [tabData, setTabData] = useState<any[]>([]);
  const router = useRouter();
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
        const { data } = await listModel(tabQuery, {});
        const fetchedTabData = data.listTabs.docs;
        console.log("🚀 ~ fetchData ~ fetchedTabData:", fetchedTabData);
        setTabData(fetchedTabData);
      } catch (error) {
        console.error("Error fetching tab data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  const handleTabClick = async (model: any) => {
    alert(`${model.id},${model.name} `);
    console.log("🚀 ~ handleTabClick ~ model:", model);
    router.push(`/dashboard/config/models/${model.id}`);
    return {};
  };

  return (
    <div className={mainClassStyle}>
      <div>pinned tabs</div>
      <div className={rowStyle}>
        {tabData
          .sort((a, b) => a.order - b.order) // Sort tabs by order
          .map((tab, index) => {
            // Dynamically import the icon component
            //@ts-ignore
            const IconComponent = ReactIcons[tab.icon];

            return (
              <div
                key={index}
                className={tabStyles}
                onClick={() => handleTabClick(tab.model)}
              >
                {IconComponent && <IconComponent className={iconStyles} />}
                {startCase(tab.label)}
              </div>
            );
          })}
      </div>
    </div>
  );
}
