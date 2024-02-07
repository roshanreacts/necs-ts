import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { http, HttpResponse } from 'msw';
import { UserModel, ProfileModel } from '@/api_mock';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import { useRouter } from 'next/navigation';
import { deleteRecord, listModel } from '@/app/actions';
import { css } from '@emotion/css';

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
  type?: string;
  currentModelName?: any

}

export default function TableComponent({ selectSlugOption, tableData, modelOptions, modelname, currentModelName, type }: TableType) {
 
  const buttonAlign = css`
  display: flex;
  justify-content: end;
  gap: 10px;
  `


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


  const ModelOptionsEditAction = ({ data }: any) => (
    <button onClick={() => handleModalOptionEdit(data)}>Edit</button>
  )

  const handleModalOptionEdit = ({ data }: any) => {

    const propertiesToRemove = ["name"];
if(!data.managed){
  const filteredData = Object.fromEntries(
    Object.entries(data).filter(([key]) => !propertiesToRemove.includes(key))
  );
  setSelectedRowData(filteredData);
  setApiName("editModelOption")
  setIsModalOpen(true);
}
else{
  alert("cannot modify the field")
}
    // Create a new object without the specified properties
   
  }
  const handleEdit = (rowData) => {
    // You can access the complete row data here and perform your edit logic
    // rowData.managed=true
    console.log("Edit button clicked. Row data:", rowData);
    if(!rowData.data.managed){
      setSelectedRowData(rowData);
      setApiName("editField")
      setIsModalOpen(true);
    }
    else{
      alert("cannot modify the field")
    }
    // Additional logic for editing the row...
  };

  const deleteFieldButton = ({ data }) =>
  (
    <button onClick={() => handleDeleteField(data)}>Delete</button>
  )

  const handleDeleteField = async ({data}) => {

    const FieldId = data.id
    const mutateDeleteQuery = `
    mutation DeleteModelField($deleteModelFieldId: ID!) {
      deleteModelField(id: $deleteModelFieldId)
    }
    `
    if (!data.managed) {
      const DeleteVariable = { deleteModelFieldId: FieldId }
      await deleteRecord({ mutation: mutateDeleteQuery, variables: DeleteVariable })
      alert("field deleted successfully")
      window.location.reload()
    }
    else {
      alert("cannot delete the field")
    }


  }


  const deleteModelOptionButton = ({ data }) =>
  (
    <button onClick={() => handleDeleteModelOption(data)}>Delete</button>
  )
  

  const handleDeleteModelOption = async(data)=>{
    
    const fieldid = data.data.id
    console.log("🚀 ~ handleDeleteModelOption ~ data:", data)
    const modelOptionQuery = `mutation DeleteModelOption($deleteModelOptionId: ID!) {
                              deleteModelOption(id: $deleteModelOptionId)
                            }`
    const modelOptionVariable = {deleteModelOptionId:fieldid}
    if(!data.data.managed){
      await deleteRecord({ mutation: modelOptionQuery, variables: modelOptionVariable })
      alert("field deleted successfully")
      window.location.reload()
    }
    else{
      alert("cannot delete the field")
    }
    
  }
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
    type === "MODEL_OPTIONS" ?
      [
        {
          field: 'KeyName',
          width: "auto",
          // checkboxSelection: true,
        },
        {
          field: 'Managed',
          width: "auto",
          // checkboxSelection: true,
        },
        {
          field: "Type",
          width: "auto"
        },
        
        {
          field: 'Action',
          width: "auto",
          cellRenderer: ModelOptionsEditAction,
        },
        {
          field: 'Delete',
          width: "auto",
          cellRenderer:  deleteModelOptionButton,
        },
      ]
      :
      [
        {
          field: 'fieldName',
          width: "auto",
          // checkboxSelection: true,
        },
        {
          field: 'Managed',
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
        {
          field: 'Delete',
          width: "auto",
          cellRenderer: deleteFieldButton,
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

    } else if (type === "MODEL_OPTIONS") {
      newColumnDefs = Object.keys(tableData).map((fieldName: string) => {
        const field = tableData[fieldName];

        return {
          id: field?.data?.id,
          // Name: field?.name,
          KeyName: field?.keyName,
          // fieldName: field?.fieldName,
          Type: field?.type,
          Value: field?.value,
          Managed: field?.managed ? "✔" : "X",
          // unique: field?.unique,
          // required: field?.required,
          // default: field?.default,
          option: "otopn",
          Action: true,
          data: field
        };

      });
    }
    else {
      newColumnDefs = Object.keys(tableData).map((fieldName: string) => {
        const field = tableData[fieldName];

        return {
          id: field?.data?.id,
          model: modelname,
          fieldName: field?.fieldName,
          // Type: field?.type,
          type: field?.type,
          Managed: field?.managed ? "✔" : "X",
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

  console.log("rd", rowData);
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
      label: "",
      name: "",
      prefix: "",
      managed: true,
    };
    setSelectedRowData(newModelValues)
    setApiName("newModel")
    setIsModalOpen(true);

  }

  const createNewModelOption =()=>{
    const newModelOptions = {
      keyName: "",
      managed: true,
      type: "boolean",
      value: ""
    }
    setSelectedRowData(newModelOptions)
    setApiName("newModelOption")
    setIsModalOpen(true);
    
  }

  

  const editModel = async () => {

    const modelQuery = `
    query Docs($where: whereModelInput) {
      listModels(where: $where) {
        docs {
          id
          name
          prefix
          managed
          label
        }
      }
    }
    `
    const modelVariables = { where: { id: { is: modelname } } }
    const modelDetails = await listModel(modelQuery, modelVariables)
    const modelData = modelDetails.data.listModels.docs[0]


    const editModelData = {
      name: modelData.name,
      prefix: modelData.prefix,
      managed: modelData.managed,
      label: modelData.label
    }
    setSelectedRowData(editModelData)
    setApiName("editModel")
    setIsModalOpen(true);
  }
  const deleteModel = async () => {

    const deleteModelQuery = `mutation DeleteModel($deleteModelId: ID!) {
                                deleteModel(id: $deleteModelId)
                              }`
    const deleteModelVariable = { deleteModelId: modelname }


    await deleteRecord({ mutation: deleteModelQuery, variables: deleteModelVariable })
    alert("model deleted successfully")
    router.back()
  }



  return (
    <>

      <div className="ag-theme-quartz-light" style={{ width: '100%', height: '100%', padding: "0px" }}>

        <>
        {type === "MODEL_LIST" ?


          <div>
            <button onClick={addNewModel} >add new model</button>
          </div>
          :
          type === "MODEL_OPTIONS" ?
            <>
                <div className={buttonAlign}>
                <button onClick={createNewModelOption} >create model option</button>
                
              </div>
            </>
            :
            <>
              <div className={buttonAlign}>
                <button onClick={editModel} >edit model</button>
                <button onClick={deleteModel} >Delete model</button>
                <button onClick={addnewField} >add new field</button>
              </div>
            </>
      
        }
        </>
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
          currentModelName={currentModelName}

        />
      )}
    </>
  );
}