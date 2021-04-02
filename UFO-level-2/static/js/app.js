// from data.js
var tableData = data;

// grab references to the input element as text and output as tbody
var date = d3.select('#datetime');
var city = d3.select('#city');
var state = d3.select('#state');
var country = d3.select('#country');
var shape = d3.select('#shape');

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
  var cityFilterValue = city.property('value');
  var stateFilterValue = state.property('value');
  var countryFilterValue = country.property('value');
  var shapeFilterValue = shape.property('value');

  // initialize filter data as ALL data
  var filteredData = tableData

    // run multiple if statements to check if field is blank or not
    // If the field is blank then return the current value of filteredData
    // If the field is not blank then use that to value to filter the results
    if (dateFilterValue === '' || dateFilterValue === undefined) 
        {
            filteredData = filteredData
        }
    else 
    {
        filteredData = filteredData.filter(item => item.datetime === dateFilterValue)
    }
    
    if (cityFilterValue === '' || cityFilterValue === undefined)
        {
            filteredData = filteredData
        }
    else 
        {
            filteredData = filteredData.filter(item => item.city === cityFilterValue)
        }

    if (stateFilterValue === '' || stateFilterValue === undefined)
        {
            filteredData = filteredData
        }
    else 
        {
            filteredData = filteredData.filter(item => item.state === stateFilterValue)
        }

    if (countryFilterValue === '' || countryFilterValue === undefined)
        {
            filteredData = filteredData
        }
    
    else 
        {
            filteredData = filteredData.filter(item => item.country === countryFilterValue)
        }

    if (shapeFilterValue === '' || shapeFilterValue === undefined)
        {
            filteredData = filteredData
        }
    else 
        {
            filteredData = filteredData.filter(item => item.shape === shapeFilterValue)
        }//end last else

}; // end handleChange function

// click this button event
button.on("click", handleChange);

