// simple vanilla js ajax example

const conn = new XMLHttpRequest();

conn.onreadystatechange = function () {

    if(conn.status == 200 && conn.readyState == 4) {

        const respo = JSON.parse(conn.responseText); // .responseText returns response as a json
                                                     // JSON.parse(response as javascript) returns a javascript object

        console.log(respo);
    }
}

conn.open('get', 'http://localhost:8080/user.json', true);
conn.send();