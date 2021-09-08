import { dbConnection } from "../dbconnection.js";
var connection = dbConnection();

export async function readCustomers() {
  try {
    const response = await new Promise((resolve, reject) => {
      connection.query(
        `select * from customers order by customerID ASC`,
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

export async function readSingleCustomer(id) {
  console.log(id);
  try {
    const response = await new Promise((resolve, reject) => {
      connection.query(
        `select * from customers where customerID=${id}`,
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
