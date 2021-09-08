import { dbConnection } from "../dbconnection.js";

var connection = dbConnection();

export async function readRepayments(id) {
  try {
    const response = await new Promise((resolve, reject) => {
      connection.query(
        `select * from repayments where customerID=${id} DESC`,
        function (err, result, fields) {
          if (err) return reject(err);
          return resolve(result);
        }
      );
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function addNewRepayment({
  seasonID,
  customerID,
  amount,
  parentID,
}) {
  try {
    const response = await new Promise((resolve, reject) => {
      connection.query(
        `INSERT INTO repayments (customerID, seasonID, amount, parentID) 
      VALUES (${customerID},${seasonID},${amount}, ${parentID})`,
        function (err, result) {
          if (err) return reject(err);
          return resolve(result);
        }
      );
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}
