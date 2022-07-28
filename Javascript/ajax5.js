//using async and await

async function showUser() {

    console.log("hello");

    const res = await fetch("user.json");

    const user = await res.json(); // produces a javascript object

    console.log(typeof(user))

    //const user1 = await JSON.parse(user);

    console.log(user);

    console.log("hello");

}

showUser();
