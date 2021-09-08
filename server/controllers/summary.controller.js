import {
  readCustomerSummary,
  readCustomerSummaryBySeasonId,
  updateCustomerSummaryBySeasonId,
  readCustomerOutstandingDebts,
  readCustomerLatestSummary,
} from "../services/summary.service.js";

export async function fetchCustomerSummary(customerID) {
  return readCustomerSummary(customerID);
}

export async function fetchCustomerSummaryBySeasonId(seasonID, customerID) {
  return readCustomerSummaryBySeasonId(seasonID, customerID);
}

export async function editCustomerSummaryBySeasonId(seasonID, data) {
  return updateCustomerSummaryBySeasonId(seasonID, data);
}

export async function fetchCustomerOutstandingDebts(customerID) {
  return readCustomerOutstandingDebts(customerID);
}

export async function fetchCustomerLatestSummary(customerID) {
  return readCustomerLatestSummary(customerID);
}
