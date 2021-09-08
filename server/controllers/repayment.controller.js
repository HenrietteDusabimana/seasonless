import {
  readRepayments,
  addNewRepayment as createRepayment,
} from "../services/repayment.service.js";
export async function fetchRepayments() {
  return readRepayments();
}

export async function addRepayment(repayment) {
  return createRepayment(repayment);
}
