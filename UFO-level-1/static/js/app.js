// from data.js
var tableData = data;

// YOUR CODE HERE!
// grab references to the input element as text and output as tbody
var date = d3.select('#datetime');

// refrence the table body to build your table in 
var tbody = d3.select('tbody');

// identify the button to activate filter
var button = d3.select('#filter-btn');

//create a table with ALL the data
tableData.forEach(item => 
    {
        var row = tbody.append('tr');
        // append stats to the list
        row.append("td").text(item.datetime);
        row.append("td").text(item.city);
        row.append("td").text(item.state);
        row.append("td").text(item.country);
        row.append("td").text(item.shape);
        row.append("td").text(item.durationMinutes);
        row.append("td").text(item.comments);
    });

// Function to handle input change
function handleChange(event) 
{
  // grab the value of the input field
  var dateFilterValue = date.property('value');

  // initialize filter data as ALL data
  var filteredData = tableData

    // run multiple if statements to check if field is blank or not
    // if the field is blank then reset the table and return ALL the data
    if (dateFilterValue === '' || dateFilterValue === undefined ) 
        {
            // clear table
            tbody.text("");
            //create a table with ALL the data
            tableData.forEach(item => 
            {
                var row = tbody.append('tr');
                // append stats to the list
                row.append("td").text(item.datetime);
                row.append("td").text(item.city);
                row.append("td").text(item.state);
                row.append("td").text(item.country);
                row.append("td").text(item.shape);
                row.append("td").text(item.durationMinutes);
                row.append("td").text(item.comments);
            });
        }
    // If the field is not blank then use that to value to filter the results
    else 
        {
            filteredData = filteredData.filter(item => item.datetime === dateFilterValue)
            
            // If the value is does not match any of the value then return an error msg
            if (filteredData.length === 0)
            {
                // define the table header inorder to clear it
                var thead = d3.select('thead');

                // clear entire table
                tbody.text('');
                thead.text('')
                
                // create one row for error msg
                var row = thead.append('tr');

                // append stats to the list
                row.append("th").text('No data matches your search results, please try again or clear your search results to see all data.');
            }
            else 
            {
                // clear table

                tbody.text("");

                //create a table with only filtered data
                filteredData.forEach((item) => 
                    {
                    var row = tbody.append('t');
                    // append stats to the list
                    row.append("td").text(item.datetime);
                    row.append("td").text(item.city);
                    row.append("td").text(item.state);
                    row.append("td").text(item.country);
                    row.append("td").text(item.shape);
                    row.append("td").text(item.durationMinutes);
                    row.append("td").text(item.comments);
                    });
                } // end second else statment

            } // end first else statment

}; // handleChange function

// click this button
button.on("click", handleChange);

