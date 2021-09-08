import {
  fetchSeasons,
  registerSeason,
} from "../controllers/season.controller.js";
import { fetchCustomerSummary } from "../controllers/summary.controller.js";
import { addRepayment } from "../controllers/repayment.controller.js";
import { addRepaymentUpload } from "../controllers/repaymentUpload.controller.js";

import {
  fetchCustomers,
  fetchSingleCustomer,
} from "../controllers/customer.controller.js";

export function seasonRoutes(router) {
  router.get("/seasons", getSeasons);
  router.post("/season", addSeason);
  router.get("/customers", getCustomers);
  router.get("/customer", getCustomerById);
  router.get("/customers/summary", getCustomerSummary);
  router.post("/repayment", postRepayment);
  router.post("/repayments/upload", postRepaymentUpload);
}

async function getSeasons(req, res) {
  const data = await fetchSeasons();
  return res.send({ success: true, data });
}

async function getCustomers(req, res) {
  const data = await fetchCustomers();
  return res.send({ success: true, data });
}

async function getCustomerById(req, res) {
  const customerID = req.query.customer;
  const data = await fetchSingleCustomer(customerID);
  return res.send({ success: true, data });
}

async function getCustomerSummary(req, res) {
  const customerID = req.query.customerID;
  const data = await fetchCustomerSummary(customerID);
  return res.send({ success: true, data });
}

async function addSeason(req, res, next) {
  registerSeason(req.body, function (err, result) {
    if (err) {
      res.send({ error: true, message: "Internal Server Error" });
    } else {
      if (result.affectedRows > 0) {
        res.send({
          error: false,
          message: "Season added successfully!",
        });
      }
    }
  });
}

async function postRepayment(req, res, next) {
  addRepayment(req.body, function (err, result) {
    if (err) {
      res.send({ error: true, message: "Internal Server Error" });
    } else {
      if (result.affectedRows > 0) {
        res.send({
          error: false,
          message: "Repayment uploaded successfully!",
        });
      }
    }
  });
}

async function postRepaymentUpload(req, res) {
  const data = await addRepaymentUpload(req.body);
  return res.send({ success: true, data });

  // addRepaymentUpload(req.body, function (err, result) {
  //   if (err) {
  //     res.send({ error: true, message: "Internal Server Error" });
  //   } else {
  //     if (result.affectedRows > 0) {
  //       res.send({
  //         error: false,
  //         message: "Repayment uploaded successfully!",
  //       });
  //     }
  //   }
  // });
}
