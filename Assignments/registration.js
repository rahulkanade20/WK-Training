function addEntry() {

    table1 = document.getElementById("b1");

    name1 = document.getElementById("name").value;
    age1 = document.getElementById("age").value;
    city1 = document.getElementById("city").value;

    var row = document.createElement('tr');
    var d1 = document.createElement('td');
    var d2 = document.createElement('td')
    var d3 = document.createElement('td')

    var t1 = document.createTextNode(name1);
    var t2 = document.createTextNode(age1);
    var t3 = document.createTextNode(city1);

    d1.appendChild(t1);
    d2.appendChild(t2);
    d3.appendChild(t3);

    row.appendChild(d1);
    row.appendChild(d2);
    row.appendChild(d3);

    table1.appendChild(row);

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("city").value = "";
}
