
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-quartz.css';
// import React, { useEffect, useMemo, useState } from 'react';
// import { createRoot } from 'react-dom/client';
// import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/styles/ag-grid.css'; // Core CSS
// import 'ag-grid-community/styles/ag-theme-quartz.css'; // Theme
// import { UserModel, ProfileModel } from '@/api_mock';
// import { http, HttpResponse } from 'msw';

// // Create new GridExample component
// export default function TableComponent(){
//   // Row Data: The data to be displayed.
//   const [rowData, setRowData] = useState([{
//     label :"first name",
//     Type:"text",
//     IsEditable: true,
//     option: 'd',
//     action: "button"
//   },{
//     Label :"last name",
//     Type:"text",
//     IsEditable: true,
//     option: 'd',
//     action: "button"
//   },{
//     Label :"emails",
//     Type:"text",
//     IsEditable: true,
//     option: 'd',
//     action: "button"
//   }]);

//   // useEffect(()=>{
//   //   (async () => {
//   //     const users = http.get('https://api.example.com/user', () => HttpResponse.json(UserModel))
//   //     // @ts-ignore
//   //     const data = await users.resolver()?.json()
//   //     console.log(data,"dafafa")
//   //     setRowData([])
//   // })()
//   // },[])


//   // Column Definitions: Defines & controls grid columns.
//   const [columnDefs, setColumnDefs]  = useState([
//     {
//       field: 'Label',
//       width: "auto",
//       // checkboxSelection: true,
//     },
//     {
//       field: 'Type',
//       width: "auto",
//       // checkboxSelection: true,
//     },
//     {
//       field: 'IsEditable',
//       width: "auto",
//       // checkboxSelection: true,
//     },
//     {
//       field: 'option',
//       width: "auto",
//       // checkboxSelection: true,
//     },
//     {
//       field: 'Action',
//       width: "auto",
//       // checkboxSelection: true,
//     } 
//   ]);


//   // Apply settings across all columns
//   // const defaultColDef = useMemo(() => ({
//   //   filter: true,
//   //   editable: true,
//   // }));

//   return (
//     <div
//       className={
//         "ag-theme-quartz-light"
//       }
//       style={{ width: '100%', height: '100%' }}
//     >
//       <AgGridReact
//         rowData={rowData}
//         columnDefs={columnDefs}
//         //defaultColDef={defaultColDef}
//         pagination={true}
//         rowSelection="multiple"T
//         onSelectionChanged={(event) => console.log('Row Selected!')}
//         onCellValueChanged={(event) =>
//           console.log(`New Cell Value: ${event.value}`)
//         }
//       />
//     </div>
//   );
// };


import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { http, HttpResponse } from 'msw';
import { UserModel, ProfileModel } from '@/api_mock';
import { resolve } from 'path';

// interface TableColumnProps {
//   headerName: String,
//   field: String,
//   width: any,
// }

type TableType = {
  selectSlugOption:any
}

export default function TableComponent({selectSlugOption }: TableType) {

  const [rowData, setRowData] = useState([]);
  const [tableData, setTableData] = useState([]);

  const ActionButton = () => (
    <button>Edit</button>
  );
  
  const IsEditableColumns = () =>{
    const isEditableColumns = true
    return (
      <div>
        <input type="checkbox" className='' value={ isEditableColumns ? 'checked' : 'checked'} />
      </div>
    )
  }

  const [columnDefs, setColumnDefs]  = useState([
    {
      field: 'Label',
      width: "auto",
      // checkboxSelection: true,
    },
    {
      field: 'Type',
      width: "auto",
      // checkboxSelection: true,
    },
    {
      field: 'IsEditable',
      width: "auto",
      // checkboxSelection: true,
      cellRenderer: IsEditableColumns,
    },
    // {
    //   field: 'option',
    //   width: "auto",
    //   // checkboxSelection: true,
    // },
    {
      field: 'Action',
      width: "auto",
      cellRenderer: ActionButton,

      // checkboxSelection: true,
    } 
  ]);

  const fetchData = async () => {
    try {
      const users = http.get('https://api.example.com/user', () => {
        if(selectSlugOption === "UserModel") {
          return HttpResponse.json(UserModel)
        } else {
          return HttpResponse.json(ProfileModel)
        }
      })

      const data = await users.resolver()?.json()

      setTableData(await data)        

      if(tableData) {
       
        console.log(tableData,"etete")
        // Generate columnDefs based on the fields in the data
        const newColumnDefs  = Object.keys(data?.fields || {}).map((fieldName) => {
          const field = data.fields[fieldName];

          return {
            Label: field?.label,
            Type: field?.type,
            IsEditable: field?.isEditable,
            option:"otopn",
            Action:true
          };
        });
        setRowData(newColumnDefs);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectSlugOption]);


  return (
    <div className="ag-theme-quartz-light" style={{ width: '100%', height: '100%' ,padding:"0px"}}>
      <AgGridReact
        rowData={rowData}
        rowStyle={{}}
        columnDefs={columnDefs}
        pagination={true}
        rowSelection="multiple"
        onSelectionChanged={(event) => console.log('Row Selected!')}
        onCellValueChanged={(event) => console.log(`New Cell Value: ${event.value}`)}
      />
    </div>
  );
}
