async function getData() {
    const response = await fetch("http://127.0.0.1:5000/MJS");
    const resp = await response.json();
    console.log(resp.message);
    let div_elem = document.createElement("div");
    div_elem.innerHTML = resp.message;
    document.body.appendChild(div_elem);
}


async function sendData() {
    let name = document.getElementById("user").value;
    let age = document.getElementById("age").value;
    let address = document.getElementById("address").value;
    let mobile = document.getElementById("mobile").value;
    let url = "http://127.0.0.1:5000/MJS";
    let inputdata = {
      name: name,
      age: age,
      address: address,
      mobile: mobile,
    };
    let response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputdata),
    });
    let respdata = await response.text();
    console.log(respdata);
    // let jsonData = JSON.parse(respdata);
    // console.log(jsonData);
    let elem = document.createElement("div");
    elem.innerHTML = respdata;
    document.body.appendChild(elem);
    // console.log(jsonData);
  }
  
//   document.querySelector("#getdata").addEventListener("click", getData);
  document.querySelector("#senddata").addEventListener("click", sendData);