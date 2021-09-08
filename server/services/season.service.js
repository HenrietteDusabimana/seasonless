import { dbConnection } from "../dbconnection.js";

var connection = dbConnection();

export async function readSeasons() {
  try {
    const response = await new Promise((resolve, reject) => {
      connection.query(
        `select * from seasons order by seasonID DESC`,
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

export async function addNewSeason(Season, callback) {
  var season = {
    seasonID: Season.seasonID,
    seasonName: Season.seasonName,
    startDate: Season.startDate,
    endDate: Season.endDate,
  };
  const response = await new Promise((resolve, reject) => {
    connection.query(
      `insert into seasons set ?, ${season}, ${callback}`,
      function (err, result, fields) {
        if (err) return reject(err);
        return resolve(result);
      }
    );
  });
  return response;
}
