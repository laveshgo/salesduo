import { useRef } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "../App.scss";

const Invoices = () => {
  const gridRef = useRef(null);
  const rowData = [
    {
      invoice: "M0659DR2",
      Date: "20.05.2021",
      Description: "Code 5928M201",
      Status: "Completed",
      Descriptions: "$3500.00"
    },
    {
      invoice: "M0659DR2",
      Date: "20.05.2021",
      Description: "Code 5928M201",
      Status: "Completed",
      Descriptions: "$3500.00"
    },
    {
      invoice: "M0659DR2",
      Date: "20.05.2021",
      Description: "Code 5928M201",
      Status: "Completed",
      Descriptions: "$3500.00"
    },
    {
      invoice: "M0659DR2",
      Date: "20.05.2021",
      Description: "Code 5928M201",
      Status: "Completed",
      Descriptions: "$3500.00"
    },
    {
      invoice: "M0659DR2",
      Date: "20.05.2021",
      Description: "Code 5928M201",
      Status: "Completed",
      Descriptions: "$3500.00"
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

export default Invoices;
