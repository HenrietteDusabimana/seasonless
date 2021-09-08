import React, { useState, useEffect } from "react";
import "./App.css";
import {
  fetchAllCustomers,
  fetchSingleCustomer,
  fetchCustomerSummary,
  postRepaymentUpload,
} from "./api/seasonless.api";

function App() {
  const [listOfCustomers, setListOfCustomers] = useState({});
  const [customerSummary, setCustomerSummary] = useState({});

  const [viewSummary, setViewSummary] = useState("");
  const [formValue, setFormValue] = useState({ amount: 0, seasonID: null });

  useEffect(() => {
    let mounted = true;
    fetchAllCustomers().then((data) => {
      if (mounted) setListOfCustomers(data);
    });
    return () => (mounted = false);
  }, []);

  function fetchCustomerSummaries(id) {
    fetchCustomerSummary(id).then((data) => {
      console.log(data);
      setViewSummary(id);
      setCustomerSummary(data);
    });
  }

  function saveRepayment(event) {
    event.preventDefault();

    console.log("FORM VALUE: ", formValue);
    console.log("VIEW SUMMARY: ", viewSummary);
    postRepaymentUpload({
      amount: Number(formValue.amount),
      customerID: (viewSummary && Number(viewSummary)) || undefined,
      seasonID: (formValue.seasonID && Number(formValue.seasonID)) || undefined,
    });
  }

  return (
    <div className="App container">
      <div className="row mt-5">
        <div className="col-6">
          <h1 className="text24 green fowe900">ONE ACRE FUND</h1>
          <u>
            <h6 className="green" hidden>
              Repayment upload
            </h6>
          </u>
        </div>
      </div>
      {!viewSummary && (
        <div id="customer-list">
          <h6 className="green">List of Customers</h6>

          <table class="table table-bordered">
            <tr>
              <th scope="col" className="text14 black fowe700 text-uppercase">
                Names
              </th>
              <th scope="col" className="text14 black fowe700 text-uppercase">
                Details
              </th>
            </tr>
            <tbody>
              {listOfCustomers &&
                (listOfCustomers.data || []).map((d) => (
                  <tr>
                    <td className="text14 black fowe700">{d.customerName}</td>{" "}
                    <div className="col-2">
                      <button
                        onClick={() => {
                          fetchCustomerSummaries(d.customerID);
                        }}
                        type="submit"
                        className="btn btn_primary_green"
                      >
                        View Summary
                      </button>
                    </div>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}

      {viewSummary && (
        <div id="customer-summary">
          <h6 className="green">Customer Summaries</h6>

          <table class="table table-bordered">
            <tr>
              <th scope="col" className="text14 black fowe700 text-uppercase">
                Customer Name
              </th>
              <th scope="col" className="text14 black fowe700 text-uppercase">
                Season
              </th>
              <th scope="col" className="text14 black fowe700 text-uppercase">
                Total Repaid
              </th>
              <th scope="col" className="text14 black fowe700 text-uppercase">
                Total Credit
              </th>
            </tr>
            <tbody>
              {customerSummary &&
                (customerSummary.data || []).map((d) => (
                  <tr>
                    <td className="text14 black fowe700">{d.customerName}</td>{" "}
                    <td className="text14 black fowe700">{d.seasonName}</td>{" "}
                    <td className="text14 black fowe700">{d.totalRepaid}</td>{" "}
                    <td className="text14 black fowe700">{d.totalCredit}</td>{" "}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
      {viewSummary && (
        <form onSubmit={saveRepayment} id="search-form">
          <div className="row mt-5">
            <div className="col-2">
              <input
                value={formValue.amount}
                onChange={(e) => {
                  setFormValue({
                    ...formValue,
                    [e.target.name]: e.target.value,
                  });
                }}
                required
                id="amount"
                type="text"
                placeholder="Amount.."
                name="amount"
                className="my_input"
              />
            </div>
            <div className="col-2">
              <input
                value={formValue.seasonID}
                onChange={(e) => {
                  setFormValue({
                    ...formValue,
                    [e.target.name]: e.target.value,
                  });
                }}
                type="text"
                placeholder="Season ID..(optional)"
                id="seasonID"
                name="seasonID"
                className="my_input"
              />
            </div>

            <div className="col-2">
              <button type="submit" className="btn btn_primary_green">
                Upload
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default App;
