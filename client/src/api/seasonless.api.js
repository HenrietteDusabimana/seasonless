export function fetchAllCustomers() {
  return fetch(`http://localhost:8080/customers/`).then((data) => data.json());
}

export function fetchSingleCustomer({ customerID }) {
  return fetch(`http://localhost:8080/customer?customer=${customerID}`).then(
    (data) => data.json()
  );
}
export function fetchCustomerSummary(customerID) {
  return fetch(
    `http://localhost:8080/customers/summary?customerID=${customerID}`
  ).then((data) => data.json());
}

export function postRepaymentUpload(data) {
  return fetch(`http://localhost:8080/repayments/upload`, {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
}
