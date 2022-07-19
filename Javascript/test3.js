const el = document.createElement('div');

el.addEventListener('click', function handleClick() {

    console.log("Clicked");
    alert('😎');
    //alert();
});

el.textContent = 'Hello world';

el.style.backgroundColor = 'salmon';
el.style.width = '150px';
el.style.height = '150px';

const b1 = document.getElementById('box');
b1.appendChild(el);

document.getElementById("test").addEventListener('click', () => {

    alert("Hello");
});