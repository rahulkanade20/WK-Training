function average() {

    alert("hellooo")

    eng_marks = Number(document.getElementById("eng").value)
    math_marks = Number(document.getElementById("math").value)
    sci_marks = Number(document.getElementById("sci").value)

    total = eng_marks + math_marks + sci_marks;

    avg = total / 3;

    alert(`Average is : ${avg}`)

    document.getElementById("res").value = avg;
}