import {
  readCustomers,
  readSingleCustomer,
} from "../services/customer.service.js";

export function fetchCustomers() {
  return readCustomers();
}

export function fetchSingleCustomer(customerID) {
  return readSingleCustomer(customerID);
}
