import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { http, HttpResponse } from 'msw';
import { UserModel, ProfileModel } from '@/api_mock';

// interface TableColumnProps {
//   headerName: String,
//   field: String,
//   width: any,
// }

type TableType = {
  selectSlugOption: any;
  tableData: any;
}

export default function TableComponent({ selectSlugOption, tableData }: TableType) {

  const [rowData, setRowData] = useState([]);

  const ActionButton = () =>
  (
    <button onClick={(e) => console.log(e)}>Edit</button>
  )

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
    const newColumnDefs = Object.keys(tableData).map((fieldName: string) => {
      console.log(tableData[fieldName]);
      console.log(fieldName);

      const field = tableData[fieldName];

      return {
        Label: field?.label,
        Type: field?.type,
        IsEditable: field?.isEditable,
        option: "otopn",
        Action: true,
        data: field
      };
    });

    setRowData(newColumnDefs);
  }, [tableData]);


  return (
    <div className="ag-theme-quartz-light" style={{ width: '100%', height: '100%', padding: "0px" }}>
      <AgGridReact
        rowData={rowData}
        rowStyle={{}}
        columnDefs={columnDefs}
        pagination={true}
        rowSelection="multiple"
        onSelectionChanged={(event) => console.log('Row Selected!', event.api.getSelectedRows()[0]?.data)}
        onCellValueChanged={(event) => console.log(`New Cell Value: ${event.value}`)}
      />
    </div>
  );
}
