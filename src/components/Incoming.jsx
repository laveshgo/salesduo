import { useRef } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "../App.scss";

const Incoming = () => {
  const gridRef = useRef(null);
  const rowData = [
    {
      invoice: "M06359DR2",
      Date: "08.06.2021",
      Description: "Code 5928M201",
      Status: "Completed",
      Descriptions: "$2500.00"
    },
    {
      invoice: "M06359DR2",
      Date: "08.06.2021",
      Description: "Code 5928M201",
      Status: "Completed",
      Descriptions: "$2500.00"
    },
    {
      invoice: "M06359DR2",
      Date: "08.06.2021",
      Description: "Code 5928M201",
      Status: "Completed",
      Descriptions: "$2500.00"
    },
    {
      invoice: "M06359DR2",
      Date: "08.06.2021",
      Description: "Code 5928M201",
      Status: "Completed",
      Descriptions: "$2500.00"
    },
    {
      invoice: "M06359DR2",
      Date: "08.06.2021",
      Description: "Code 5928M201",
      Status: "Completed",
      Descriptions: "$2500.00"
    },
    {
      invoice: "M06359DR2",
      Date: "08.04.2021",
      Description: "Code 5928M201",
      Status: "Completed",
      Descriptions: "$2500.00"
    }
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 425, width: "100%" }}>
      <AgGridReact ref={gridRef} rowData={rowData} rowSelection="multiple">
        <AgGridColumn
          field="invoice"
          sortable={true}
          checkboxSelection={true}
          headerCheckboxSelection={true}
        ></AgGridColumn>
        <AgGridColumn field="Date" sortable={true}></AgGridColumn>
        <AgGridColumn field="Description" sortable={true}></AgGridColumn>
        <AgGridColumn field="Status" sortable={true}></AgGridColumn>
        <AgGridColumn field="Descriptions" sortable={true}></AgGridColumn>
      </AgGridReact>
    </div>
  );
};

export default Incoming;
