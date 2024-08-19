

// Using console.log 
console.log('Hello World')

const { parse } = require("csv-parse");
const fs = require("fs");

// specify the path of the CSV file
const path = "currency.csv";
let obj = [];
let counter = 0;

// Create a readstream
// Parse options: delimiter and start from line 1

fs.createReadStream(path)
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", function (row) {

    obj[counter++]=row;


  }

  )
  .on("error", function (error) {
    // Handle the errors
    console.log(error.message);
  })
  .on("end", function () {
    // executed when parsing is complete
    console.log(obj[0][0]);
    console.log("File read successful");
  });

  
