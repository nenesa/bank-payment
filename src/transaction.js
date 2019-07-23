function addRow() {
    // get input values
    var fIBAN = document.getElementById('IBANone').value;
    var sIBAN = document.getElementById('IBANtwo').value;
    var amount = document.getElementById('amount').value;
    var currency = document.getElementById('currency').value;
    var date = document.getElementById('date').value;

    // get the html table
    // 0 = the first table
    var table = document.getElementsByTagName('table')[0];

    // add new empty row to the table
    // 1 = after table header
    var newRow = table.insertRow(1);

    // add cells to the row
    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);
    var cel4 = newRow.insertCell(3);
    var cel5 = newRow.insertCell(4);

    // add values to the cells
    cel1.innerHTML = fIBAN;
    cel2.innerHTML = sIBAN;
    cel3.innerHTML = amount;
    cel4.innerHTML = currency;
    cel5.innerHTML = date;
}