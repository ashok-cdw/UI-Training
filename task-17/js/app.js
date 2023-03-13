import { locations } from "./locations.js";

// JQuery Method Invokes
$(function () {
    $("#tabs").tabs();
    $("#accordion").accordion({
        active: false,
        collapsible: true,
        heightStyle: "content",
    });
});

// Dynamic Tables
let table = $("<table></table>");
table.attr("class","locations-table");

locations.forEach(location => {

    // Create Row, Column 
    let row = $("<tr></tr>");
    let column1 = $("<td></td>");
    let column2 = $("<td></td>");
    let column3 = $("<td></td>");
    let column4 = $("<td></td>");

    let image = $("<img/>");
    image.attr("src","https://picsum.photos/30/30");
    image.attr("alt","country-image");

    // Image Append
    column1.append(image);

    // Data Append
    column2.text(location.state);
    column3.text(location.city);
    column4.text(location.contact);

    // Column Append
    row.append(column1, column2, column3, column4);
    // Row Append
    table.append(row);
});

// Table Append
$("#location").append(table);