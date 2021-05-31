import React, { useState } from "react";
import Menubar from "./Menubar";
import ProgressBar from "./ProgressBar";
import Chart from "../images/Charts.png";
import Graph from "../images/Graph.png";
import GetAppIcon from "@material-ui/icons/GetApp";
import Invoices from "./Invoices";
import Incoming from "./Incoming";

function Dashboard() {
  const [useInvoices, setUseInvoices] = useState(false);
  function handleClickIncoming() {
    return setUseInvoices(false);
  }
  function handleClickInvoices() {
    return setUseInvoices(true);
  }

  return (
    <div className="Dashboard">
      <Menubar />
      <div id="outer">
        <div className="TotalIncome">
          <p>Total Income</p>
          <h1>$124,563.00</h1>
          <div className="Percent"> +6.9% </div>
          <ProgressBar
            className="ProgressBar"
            bgcolor="#8832df"
            completed="60"
          />
          <p className="Goal">Yearly Goal</p>
        </div>

        <div className="NewUsers">
          <p>New Users</p>
          <h1>94.2%</h1>
          <div className="Percent"> +6.9% </div>
          <img src={Chart} alt="Chart" />
        </div>
      </div>
      <div className="Balance">
        <h1>Balance</h1>
        <hr />
        <div className="Cont">
          <div className="Earnings">
            <p>Earnings</p>
            <h2>43.41%</h2>
            <div className="Percent"> +2.5% </div>
          </div>
          <div className="SalesValue">
            <p>Sales Value</p>
            <h2>$95,422</h2>
            <div className="Percent"> +135.5% </div>
          </div>
        </div>
        <img src={Graph} alt="Graph" />
      </div>

      <div className="Transactions">
        <h1>Recent Transactions</h1>
        <button className="ExportButton">
          <GetAppIcon className="Icon" />
          <span>Export</span>
        </button>
        <div
          onClick={handleClickIncoming}
          className="Incoming"
          id={!useInvoices ? "active" : " "}
        >
          <span>Incoming</span>
        </div>
        <div
          onClick={handleClickInvoices}
          className="Incoming"
          id={useInvoices ? "active" : " "}
        >
          <span>Invoices</span>
        </div>
        <hr />
        {useInvoices ? <Invoices /> : <Incoming />}
      </div>
    </div>
  );
}

export default Dashboard;
