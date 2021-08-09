
/* File: HW4.js
GUI Assignment: Multiplication Table
Ibrahim Swati, UMass Lowell Computer Science, iswati@cs.uml.edu
Copyright (c) 2021 by Ibrahim. All rights reserved. May be freely copied or excerpted for educational purposes with credit to the author.
updated by IS on August 9, 2021 at 5:46PM */


//Declaring functions for sliders and rows for them to change dynamically

function rowsinputfun() {
  var value = $("#rowsinput").val();
  $("#rows").val(value);
  getdataforcolrows();
}
function colsinputfun() {
  var value = $("#colinput").val();
  $("#col").val(value);
  getdataforcolrows();
}

function rowsstartinputfun() {
  var value = $("#rowstartinput").val();
  $("#rowstart").val(value);
  getdataforcolrows();
}

function colsstartinputfun() {
  var value = $("#colstartinput").val();
  $("#colstart").val(value);
  getdataforcolrows();
}

function rowssliderfun() {
  var value = $("#rows").val();
  $("#rowsinput").val(value);
  getdataforcolrows();
}

function colssliderfun() {
  var value = $("#col").val();
  $("#colinput").val(value);
  getdataforcolrows();
}

function rowsstartsliderfun() {
  var value = $("#rowstart").val();
  $("#rowstartinput").val(value);
  getdataforcolrows();
}

function colsstartsliderfun() {
  var value = $("#colstart").val();
  $("#colstartinput").val(value);
  getdataforcolrows();
}

//Declaring variables for storing values for rows, columns, and sliders and verifying using console if values are correct.

function getdataforcolrows() {
  var cols = $("#col").val();
  var rows = $("#rows").val();
  var colstart = $("#colstart").val();
  var rowstart = $("#rowstart").val();
  console.log("rows", rows)
  console.log("cols", cols)
  console.log("colstart", colstart)
  console.log("rowstart", rowstart)
  var tr = '';
  var table = "";
  var ab = 0;
  var cd = 0;

  //Creating the rows and columns according to userinput

  if (!isNaN(parseInt(cols)) && cols < 1000 && !isNaN(parseInt(rows)) && rows < 1000 && !isNaN(parseInt(colstart)) && !isNaN(parseInt(rowstart))) {
    if ( cols < 1000 && rows < 1000 ) {
    $("#tabled").html('');
    var flag = false;
    var colflag = false;
    var hideflag = false;
    for (var i = 0; i < rows; i++) {
      table += '<tr>';
      var rowcount = i + parseInt(rowstart);
      if (flag == true) {
        table += '<td style="border: 1px solid #dddddd;text-align: left;padding: 8px;background-color: black;color: white;">' + rowcount + '</td>';
      }
      else
        table += '<td style="color:white;">' + i + '</td>';

      for (var j = 0; j < cols; j++) {
        var jcol = j + parseInt(colstart);
        if (hideflag == false) {
          if (j == 0 && colflag == false) {
            //table+='<td style="border: 1px solid #dddddd;text-align: left;padding: 8px;color:white">'+jcol+'</td>';

            table += '<td style="border: 1px solid #dddddd;text-align: left;padding: 8px;background-color: black;color: white;">' + jcol + '</td>';
            flag = true;
            colflag = true;
            i = -1;
          }
          else
            table += '<td style="border: 1px solid #dddddd;text-align: left;padding: 8px;background-color: black;color: white;">' + jcol + '</td>';
        }
        else {
          var tmp = (j + parseInt(colstart)) * (i + parseInt(rowstart));
          console.log(tmp)
          table += '<td style="border: 1px solid #dddddd;text-align: left;padding: 8px;color:black">' + tmp + '</td>';
        }

      }
      hideflag = true;
      table += '</tr>';

    }

    $("#tabled").append(table);
    }
  else {

    $("#tabled").html('');
    var table = '<tr><td>Please enter numeric value.</td></tr>';

    $("#tabled").append(table);
  }

}
  else {

    $("#tabled").html('');
    var table = '<tr><td>Please enter value less than 1000 value.</td></tr>';

    $("#tabled").append(table);
  }

}

//Function to save table


function saveTable() {
  var cols = $("#col").val();
  var rows = $("#rows").val();
  var colstart = $("#colstart").val();
  var rowstart = $("#rowstart").val();
  var number = Math.ceil((Math.random(200) + 1) * 100);
  var name = "1" + number.toString();
  console.log(name)
  document.getElementById("savetabledata").innerHTML = `<br><br><label style="font-weight:bold;padding-left:20px" id="table1row` + name + `"></label>
    <label style="font-weight:bold;padding-left:20px" id="table1col`+ name + `"></label>
    <label style="font-weight:bold;padding-left:20px" id="table1colstartingvalue`+ name + `"></label>
    <label style="font-weight:bold;padding-left:20px" id="table1rowstartingvalue`+ name + `"></label>
    <button type="button" class="btn btn-success" id= "button`+ name + `" onclick="deleteTable(`+name+`)"
      style="width:100px;margin-left:20px;height:40px;margin-top:5px">Delete</button>
    <table style="font-family: arial, sans-serif;border-collapse: collapse;width: 100%;">
      <tbody id="tabled1`+ name + `">
      </tbody>
    </table>` + document.getElementById("savetabledata").innerHTML;

  document.getElementById("table1row" + name).innerHTML = 'Number Of Rows: ' + rows; //Display rows when saved
  document.getElementById("table1col" + name).innerHTML = 'Number Of Columns: ' + cols; //Display columns when saved
  document.getElementById("table1colstartingvalue" + name).innerHTML = 'Column Starting Value: ' + colstart; //Display starting value of column when saved
  document.getElementById("table1rowstartingvalue" + name).innerHTML = 'Row Starting Value: ' + rowstart; //Display starting value of row when saved

  var tr = '';
  var table = "";
  var ab = 0;
  var cd = 0;

  if (!isNaN(parseInt(cols)) && !isNaN(parseInt(rows)) && !isNaN(parseInt(colstart)) && !isNaN(parseInt(rowstart))) {
    $("#tabled1" + name).html('');
    var flag = false;
    var colflag = false;
    var hideflag = false;
    for (var i = 0; i < rows; i++) {
      table += '<tr>';
      var rowcount = i + parseInt(rowstart);
      if (flag == true) {
        table += '<td style="border: 1px solid #dddddd;text-align: left;padding: 8px;background-color: black;color: white;">' + rowcount + '</td>';
      }
      else
        table += '<td style="color:white;">' + i + '</td>';

      for (var j = 0; j < cols; j++) {
        var jcol = j + parseInt(colstart);
        if (hideflag == false) {
          if (j == 0 && colflag == false) {


            table += '<td style="border: 1px solid #dddddd;text-align: left;padding: 8px;background-color: black;color: white;">' + jcol + '</td>';
            flag = true;
            colflag = true;
            i = -1;
          }
          else
            table += '<td style="border: 1px solid #dddddd;text-align: left;padding: 8px;background-color: black;color: white;">' + jcol + '</td>';
        }
        else {
          var tmp = (j + parseInt(colstart)) * (i + parseInt(rowstart));
          console.log(tmp)
          table += '<td style="border: 1px solid #dddddd;text-align: left;padding: 8px;color:black">' + tmp + '</td>';
        }
      }
      hideflag = true;
      table += '</tr>';
    }
    $("#tabled1" + name).append(table);
  }

  else {
    $("#tabled1" + name).html('');
    var table = '<tr><td>Please enter numeric value.</td></tr>';
    $("#tabled1" + name).append(table);
  }
}

//Function to delete table

function deleteTable(name) {
  document.getElementById("table1row"+name).innerHTML = "";
  document.getElementById("table1col"+name).innerHTML = "";
  document.getElementById("table1colstartingvalue"+name).innerHTML = "";
  document.getElementById("table1rowstartingvalue"+name).innerHTML = "";
  document.getElementById("button"+name).hidden = true;
  document.getElementById("tabled1"+name).innerHTML = "";
}
