import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { http, HttpResponse } from 'msw';
import { UserModel, ProfileModel } from '@/api_mock';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import { useRouter } from 'next/navigation';

// interface TableColumnProps {
//   headerName: String,
//   field: String,
//   width: any,
// }

type TableType = {
  selectSlugOption: any;
  tableData: any;
  modelOptions?: any;
  modelname?: any
  type?: string
}

export default function TableComponent({ selectSlugOption, tableData, modelOptions, modelname, type }: TableType) {
  // console.log("🚀 ~ TableComponent ~ modelname:", modelname)
  // console.log("🚀 ~ TableComponent ~ modelOptions:", modelOptions)
  console.log("🚀 ~ TableComponent ~ tableData:", tableData)

  const [rowData, setRowData] = useState([]);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [apiName, setApiName] = useState("");
  const router = useRouter()

  const ActionButton = ({ data }) =>
  (
    <button onClick={() => handleEdit(data)}>Edit</button>
  )

  const handleModelEdit = ({ data }: any) => {
    router.push(`models/${data.id}`)
  }
  const ModelEditAction = ({ data }: any) => (
    <button onClick={() => handleModelEdit(data)}>View</button>
  )

  const handleEdit = (rowData) => {
    // You can access the complete row data here and perform your edit logic
    // rowData.managed=true
    console.log("Edit button clicked. Row data:", rowData);

    setSelectedRowData(rowData);
    setApiName("editField")
    setIsModalOpen(true);
    // Additional logic for editing the row...
  };

  const IsEditableColumns = () => {
    const isEditableColumns = true
    return (
      <div>
        <input type="checkbox" className='' value={isEditableColumns ? 'checked' : 'checked'} />
      </div>
    )
  }

  const [columnDefs, setColumnDefs] = useState(type === 'MODEL_LIST' ?
    [{
      field: 'Name',
      width: "auto",
      // checkboxSelection: true,
    },
    {
      field: 'Prefix',
      width: "auto",
      // checkboxSelection: true,
    },
    {
      field: 'Managed',
      width: "auto"
    },
    {
      field: "CreatedAt",
      width: "auto"
    },
    {
      field: "CreatedBy",
      width: "auto"
    },
    {
      field: 'Action',
      width: "auto",
      cellRenderer: ModelEditAction,
    },
      // hide this column
    ] :
    [
      {
        field: 'fieldName',
        width: "auto",
        // checkboxSelection: true,
      },
      {
        field: 'type',
        width: "auto",
        // checkboxSelection: true,
      },
      {
        field: 'Action',
        width: "auto",
        cellRenderer: ActionButton,
      },
      // hide this column
      {
        field: 'Data',
        hide: true
      }
    ]);

  useEffect(() => {
    let newColumnDefs: any;
    if (type === "MODEL_LIST") {
      newColumnDefs = Object.keys(tableData).map((fieldName: string) => {
        const field = tableData[fieldName];
        console.log("🚀 ~ constnewColumnDefs:any=Object.keys ~ field: m", field)

        return {
          id: field,
          model: modelname,
          Name: field?.name,
          // Type: field?.type,
          Prefix: field?.prefix,
          type: field?.type,
          Managed: field?.managed ? "✔" : "X",
          CreatedAt: field?.createdOn,
          CreatedBy: field?.user ? field?.user.name : "Admin",
          unique: field?.unique,
          required: field?.required,
          default: field?.default,
          option: "otopn",
          Action: true,
          data: field
        };
      });

      console.log("Model Row Data", newColumnDefs);

    } else {
      newColumnDefs = Object.keys(tableData).map((fieldName: string) => {
        const field = tableData[fieldName];
        console.log("🚀 ~ constnewColumnDefs:any=Object.keys ~ field:", field)

        return {
          id: field?.data?.id,
          model: modelname,
          fieldName: field?.fieldName,
          // Type: field?.type,
          type: field?.type,
          managed: field?.managed,
          unique: field?.unique,
          required: field?.required,
          default: field?.default,
          option: "otopn",
          Action: true,
          data: field
        };

      });
      console.log("Fields Row Data", newColumnDefs);
    }


    setRowData(newColumnDefs);
  }, [tableData]);

  const onSelectionChanged = (event: { api: { getSelectedRows: () => any; }; }) => {
    // const selectedRows = event.api.getSelectedRows();
    // if (selectedRows.length > 0) {
    // setSelectedRowData(selectedRows[0].data);
    // setIsModalOpen(true);
    // }
  };


  function closeModal(): void {

    setIsModalOpen(false);
  }
  const addnewField = () => {

    const newFieldValue = {
      // label: "",
      // type: "text",
      // isEditable: false,
      // required: false,
      // fieldOptions: [],
      // many: true,
      // unique: true,
      // default: false,
      // model:modelname
      fieldName: "",
      type: "text",
      unique: true,
      managed: false,
      required: false,
      default: "test",

    };
    setSelectedRowData(newFieldValue)
    setApiName("newField")
    setIsModalOpen(true);

  }
  const addNewModel = () => {

    const newModelValues = {
      name: "",
      prefix: "",
      managed: true,
    };
    setSelectedRowData(newModelValues)
    setApiName("newModel")
    setIsModalOpen(true);

  }

  const editHistory = () => {
    const editModelOptions = {
      modelName: modelname,
      historyTracking: modelOptions.historyTracking
    }
    setSelectedRowData(editModelOptions)
    setApiName("editModel")
    setIsModalOpen(true);
  }



  return (
    <>

      <div className="ag-theme-quartz-light" style={{ width: '100%', height: '100%', padding: "0px" }}>
        {type !== "MODEL_LIST" ?
          <>
            <div>
              <button onClick={editHistory} >edit model</button>
            </div>
            <button onClick={addnewField} >add new field</button>
          </>
          :
          <div>
            <button onClick={addNewModel} >add new model</button>
          </div>
        }
        <AgGridReact
          rowData={rowData}
          rowStyle={{}}
          columnDefs={columnDefs}
          pagination={true}
          rowSelection="multiple"
          onSelectionChanged={onSelectionChanged}
          onCellValueChanged={(event) => console.log(`New Cell Value: ${event.value}`)}
        />
      </div>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          fieldSlug={selectedRowData}
          fieldValue={selectedRowData}
          apiName={apiName}
          currentModel={modelname}
        />
      )}
    </>
  );
}