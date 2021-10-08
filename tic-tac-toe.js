
window.addEventListener('load', (e) => {

    let squares = document.querySelectorAll("#board > div");
    let btn = document.querySelector(".btn");


    squares.forEach((sqr) => {
        sqr.classList.add("sqaure");
        sqr.innerHTML = " ";

    });

})
