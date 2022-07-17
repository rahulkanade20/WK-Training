function average() {

    alert("hellooo")

    eng_marks = Number(document.getElementById("eng").value)
    math_marks = Number(document.getElementById("math").value)
    sci_marks = Number(document.getElementById("sci").value)

    total = eng_marks + math_marks + sci_marks;

    avg = total / 3;

    grade = "None";

    if(avg >= 80 && avg <= 100) {

        grade = "A";
    }
    else if(avg >= 50 && avg < 80) {

        grade = "B";
    }

    else if(avg >= 0 && avg <50) {

        grade = "C";
    }

    else {

        grade = "Invalid average"
    }

    alert(`Average is : ${avg}`)

    alert(`Grade is : ${grade}`)

    document.getElementById("res").value = avg;

    document.getElementById("gr").value = grade;
}