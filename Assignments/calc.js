function displayOnClick(id) {

    // alert("display");

    temp = document.getElementById("display").value;

    t1 = document.getElementById(id).value;

    temp = temp + t1;

    document.getElementById("display").value = temp;
}

function evaluateResult() {

    // alert("evaluate called");
    
    // alert("evaluate");
    temp = document.getElementById("display").value;

    try {

        result = eval(temp);
        document.getElementById("display").value = result;
    }

    catch(err) {

        alert("invalid expression")
    }
}

function clearScreen() {

    // alert("clear called");

    //alert("clear");

    document.getElementById("display").value = "";
}