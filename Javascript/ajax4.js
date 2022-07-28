// using fetch then chain

fetch("user.json").then(response => {
    return response.json();
}).then(user => {
    return user.displayName.toUpperCase();
}).then(name1 => {
    console.log(name1);
})