// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");


//Create function to Build table from data variable
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");

    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
      
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
}


// Build the Filtered Table
function handleClick() {
  // Grab the datetime value from the filter
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;

  // Check to see if a date was entered and filter the
  // data using that date.
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  };

    // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);

































// Note:

// Example of if-statement syntax
// if ( condition ) { code to execute }

// pseudocode practice
// if (a date is entered) {
//   Filter the default data to show only the date entered
// };

// Example of for loop
// function listLoop(userList) {
//     for (var i = 0; i < userList.length; i++) {
//         console.log(userList[i]);
//     }
// }

// Example of forEach
// let numbers = [1,2,3,4,5,6];
// numbers.forEach(function (element) {
//     console.log(element**2);
// }

// example of function copaired to Fat Arrow function
// function
// function square(num) {
//     return num ** 2;
// }
// console.log(square(2))

// Fat Arrow function
// let square = (num) => num ** 2;
// }
