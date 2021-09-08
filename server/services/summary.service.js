import { dbConnection } from "../dbconnection.js";
var connection = dbConnection();

export async function readCustomerSummary(id) {
  try {
    const response = await new Promise((resolve, reject) => {
      connection.query(
        `select c.customerName, cs.totalCredit, cs.totalRepaid, cs.seasonID, s.seasonName from customersummaries as cs
          inner join customers as c on c.customerID=cs.customerID
          inner join seasons as s on s.seasonID=cs.seasonID
          where cs.customerID=${id};`,
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

export async function readCustomerSummaryBySeasonId(seasonID, customerID) {
  try {
    const response = await new Promise((resolve, reject) => {
      connection.query(
        `select * from customersummaries where seasonID=${seasonID} and customerID=${customerID} LIMIT 1;`,
        function (err, result, fields) {
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

export async function updateCustomerSummaryBySeasonId(seasonID, data) {
  try {
    const response = await new Promise((resolve, reject) => {
      connection.query(
        `update customersummaries set totalRepaid=${data.totalRepaid} 
        where seasonID=${seasonID} and customerID=${data.customerID};`,
        function (err, result) {
          if (err) return reject(err);
          return resolve(result);
        }
      );
    });
    return readCustomerSummaryBySeasonId(seasonID, data.customerID);
  } catch (error) {
    console.log(error);
  }
}

export async function readCustomerOutstandingDebts(customerID) {
  try {
    const response = await new Promise((resolve, reject) => {
      connection.query(
        `select * from customersummaries where customerID=${customerID} and  totalRepaid != totalCredit;`,
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

export async function readCustomerLatestSummary(customerID) {
  try {
    const response = await new Promise((resolve, reject) => {
      connection.query(
        `SELECT cs.customerID, cs.seasonID, cs.totalRepaid FROM customersummaries as cs 
        inner join seasons as s on cs.seasonID=s.seasonID where customerID=${customerID} ORDER BY s.startDate DESC LIMIT 1;`,
        function (err, result, fields) {
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
