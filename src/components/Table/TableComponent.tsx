import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { http, HttpResponse } from 'msw';
import { UserModel, ProfileModel } from '@/api_mock';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';

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
}

export default function TableComponent({ selectSlugOption, tableData, modelOptions, modelname }: TableType) {
  // console.log("🚀 ~ TableComponent ~ modelname:", modelname)
  // console.log("🚀 ~ TableComponent ~ modelOptions:", modelOptions)
  // console.log("🚀 ~ TableComponent ~ tableData:", tableData)


  const [rowData, setRowData] = useState([]);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [apiName, setApiName] = useState("")

  const ActionButton = ({ data }) =>
  (
    <button onClick={() => handleEdit(data)}>Edit</button>
  )

  const handleEdit = (rowData) => {
    // You can access the complete row data here and perform your edit logic
    // rowData.managed=true
    console.log("Edit button clicked. Row data:", rowData);
    setSelectedRowData(rowData);
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

  const [columnDefs, setColumnDefs] = useState([
    {
      field: 'fieldName',
      width: "auto",
      // checkboxSelection: true,
    },
    {
      field: 'Type',
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
    const newColumnDefs: any = Object.keys(tableData).map((fieldName: string) => {
      const field = tableData[fieldName];

      return {
        fieldName: field?.fieldName,
        Type: field?.type,
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
      <div>
      {/* managed: {modelOptions.managed?"true":"false"} */}
      <button onClick={editHistory} >edit model</button>
       </div> 
      <button onClick={addnewField} >add new field</button>
      <button onClick={addNewModel} >add new model</button>
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