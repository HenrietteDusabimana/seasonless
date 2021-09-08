import { createNewRepaymentUpload } from "../services/repaymentUpload.service.js";
import { addRepayment } from "../controllers/repayment.controller.js";
import { fetchSeasons } from "./season.controller.js";
import {
  editCustomerSummaryBySeasonId,
  fetchCustomerSummaryBySeasonId,
  fetchCustomerOutstandingDebts,
  fetchCustomerLatestSummary,
} from "./summary.controller.js";

export async function addRepaymentUpload(paymentUpload) {
  const parent = await createNewRepaymentUpload(paymentUpload);
  if (!parent) {
    throw new Error("Could not create parent");
  }

  if (paymentUpload.seasonID)
    return performOverride(paymentUpload, parent.repaymentUploadID);
  // OVERPAID
  const outstandingSeasonDebts = await fetchCustomerOutstandingDebts(
    paymentUpload.customerID
  );

  if (outstandingSeasonDebts.length == 0)
    return performOverpaid(paymentUpload, parent.repaymentUploadID);
  else
    return performCascade(
      outstandingSeasonDebts,
      paymentUpload,
      parent.repaymentUploadID
    );
}

async function performOverride(repaymentUpload, parentID) {
  await addRepayment({ ...repaymentUpload, parentID });

  // add rpayment record
  let summary = await fetchCustomerSummaryBySeasonId(
    repaymentUpload.seasonID,
    repaymentUpload.customerID
  );
  // update season.totalRepaid
  summary = await editCustomerSummaryBySeasonId(repaymentUpload.seasonID, {
    totalRepaid: summary.totalRepaid + repaymentUpload.amount,
    customerID: repaymentUpload.customerID,
  });

  // return updatedSeason
  return summary;
}

async function performCascade(
  outstandingSeasonDebts,
  repaymentUplaod,
  parentId
) {
  const result = [];
  for (let i = 0; i < (outstandingSeasonDebts || []).length; i++) {
    let seasonDebt = outstandingSeasonDebts[i];
    while (
      seasonDebt.totalCredit != seasonDebt.totalRepaid &&
      repaymentUplaod.amount != 0
    ) {
      seasonDebt = await performOverride(
        { ...repaymentUplaod, seasonID: seasonDebt.seasonID },
        parentId
      );
      // sd = 2011 140 100, p.amout = 60
      if (seasonDebt.totalRepaid < seasonDebt.totalCredit) {
        repaymentUplaod.amount = 0;
      }
      // sd = 2011 140 100, p.amout = -40
      if (seasonDebt.totalRepaid > seasonDebt.totalCredit) {
        repaymentUplaod.amount =
          seasonDebt.totalCredit - seasonDebt.totalRepaid;
      }
    }
    if (repaymentUplaod.amount <= 0) {
      repaymentUplaod.amount *= -1;
      result.push(seasonDebt);
    }
  }
  return result;
}

async function performOverpaid(paymentUpload, parentID) {
  const latestSumamry = await fetchCustomerLatestSummary(
    paymentUpload.customerID
  );
  // read latest season,
  return performOverride(
    { ...paymentUpload, seasonID: latestSumamry.seasonID },
    parentID
  );
}
// CASCADE
//  Add repayment upload records
// if season is null and we have outstanding debts - find how to check  season outstanding debts

// OVERRIDE
//  Add repayment upload records

// if season is not null then add payment records with the season ID

// update TotalRepaid of the season

// OVERPAID

//  Add repayment upload records

// if season is null and no outstanding debts - find how to check no season outstanding debts
// select * from seasons where TotalCredit != TotalRepaid and cutomerID=id

// find the latest season and then update totalRepaid of the season

// if no record found that means no season outsdanding debts (overpaid case)
//     find the latest season and perform override

// else list of season outstanding debt records (cascade case)
//      loop over seasons ordered by dates
//          perform override
//          read season and check if it is overpaid perform override with minus sign
