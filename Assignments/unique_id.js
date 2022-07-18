list_ = []

function addToList() {

    displayRes = "";

    function foo(item){

        displayRes = displayRes + " " + item;
    }

    temp = document.getElementById("display").value;

    list_.push(temp);

    document.getElementById("display").value = "";

    tSet = new Set(list_);

    tSet.forEach(foo)
    
    document.getElementById("result").value = displayRes;
}