import { dbConnection } from "../dbconnection.js";

var connection = dbConnection();

export async function createNewRepaymentUpload({
  seasonID = null,
  customerID,
  amount,
}) {
  try {
    const insertedId = await new Promise((resolve, reject) => {
      connection.query(
        `INSERT INTO repaymentuploads (customerID, seasonID, amount) 
      VALUES (${customerID},${seasonID},${amount})`,
        function (err, result) {
          if (err) return reject(err);
          return resolve(result && result.insertId);
        }
      );
    });
    return readPaymentUploadById(insertedId);
  } catch (error) {
    console.log(error);
  }
}

export async function readPaymentUploadById(repaymentUploadID) {
  try {
    const response = await new Promise((resolve, reject) => {
      connection.query(
        `select * from repaymentuploads where repaymentUploadID=${repaymentUploadID};`,
        function (err, result) {
          if (err) return reject(err);
          return resolve(result);
        }
      );
    });
    return response && response[0];
  } catch (error) {
    console.log(error);
  }
}
