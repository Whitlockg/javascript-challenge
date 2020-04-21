// from data.js
var tableData = data;

//table refs
const tbody = d3.select("tbody");

//function to append table
function buildTable(data) {
    //clear data
    tbody.html("");

    //loop through each data object & append rows & values in each row
    data.forEach((dataRow) => {
        const row = tbody.append("tr");

        //loop through each cell in every row to append
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
                cell.text(val);
            }
        );
    });

}

//function for button

function handleClick() {
    const date= d3.select("#datetime").property("value");
    let filterData = tableData;

    //if statement to apply filter
    if (date) {
        filterData = filterData.filter(row => row.datetime ===date);
    }

    buildTable(filterData);
}

//d3 action for button when clicked
d3.selectAll("#filter-button").on("click", handleClick);

//d3 loading table when page loads
buildTable(tableData);
