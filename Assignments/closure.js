(function onLoad() {

    titleText = document.querySelector("#text");

    titleText.classList.add("blue");

    document.querySelector("button").addEventListener("click", function () {
        titleText.classList.toggle("blue");
        titleText.classList.toggle("cyan");

    });

})();