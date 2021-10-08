
window.addEventListener('load', (e) => {
    console.log("page loaded");
    let squares = document.querySelectorAll("#board > div");

    squares.forEach((sqr) => {
        sqr.classList.add("sqaure");
        sqr.innerHTML = " ";

    });

})
