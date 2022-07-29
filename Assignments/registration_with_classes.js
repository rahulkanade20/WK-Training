class Person {

    constructor(name1, age1, city1) {

        this.name1 = name1;
        this.age1 = age1;
        this.city1 = city1;
    }

    set name(newName) {

        this.name1 = newName;
    }

    set age(age) {

        this.age1 = age;
    }

    set city(city) {

        this.city1 = city;
    }

    get name() {

        return this.name1;
    }

    get age() {

        return this.age1;
    }

    get city() {

        return this.city1;
    }
}

function addEntry() {

    table1 = document.getElementById("b1");

    const p1 = new Person();
    
    name1 = document.getElementById("name").value;
    age1 = document.getElementById("age").value;
    city1 = document.getElementById("city").value;
    
    p1.name = name1;
    p1.age = age1;
    p1.city = city1;
    
    var row = document.createElement('tr');
    var d1 = document.createElement('td');
    var d2 = document.createElement('td');
    var d3 = document.createElement('td');

    var t1 = document.createTextNode(p1.name);
    var t2 = document.createTextNode(p1.age);
    var t3 = document.createTextNode(p1.city);

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
