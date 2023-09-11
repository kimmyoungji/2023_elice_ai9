const fs = require("fs");
const csv = require("csv-parser");

const csvFilePath =
  "/Users/myoungjikim/Desktop/2023_elice_ai9/my_project_1/workDatas/workDatas.csv";

const jsonFilePath =
  "/Users/myoungjikim/Desktop/2023_elice_ai9/my_project_1/workDatas/output.json";
const results = [];

fs.createReadStream(csvFilePath)
  .pipe(csv())
  .on("data", (data) => results.push(data))
  .on("end", () => {
    const jsonData = JSON.stringify(results, null, 2);
    fs.writeFileSync(jsonFilePath, jsonData, "utf8");

    console.log("완료");
  });
