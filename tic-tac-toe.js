
window.addEventListener('load', (e) => {

    let Oselected = 1
    let Xselected = 0;
    let Unselected = -1;
    let Gamestate = Unselected;


    let squares = document.querySelectorAll("#board > div");
    let bton = document.querySelector(".btn");


    squares.forEach((sqr) => {
        sqr.classList.add("square");
        sqr.innerHTML = "<p></p>";

    });



    squares.forEach((sqr) => {
        sqr.onclick = (e) => {
            if (sqr.innerHTML == "<p></p>") {
                Gamestate = Math.floor(Math.random() * 2);
            }


            if (Gamestate == Unselected || Gamestate == Oselected) {
                sqr.classList.remove("O");
                sqr.classList.add("X");
                sqr.innerHTML = 'X';
                Gamestate = Xselected;
                console.log(`Gamestate: Xselected ${Gamestate}`);

            }
            else {
                sqr.classList.remove("X");
                sqr.classList.add("O");
                sqr.innerHTML = 'O';
                Gamestate = Oselected;
                console.log(`Gamestate: Oselected ${Gamestate}`);
            }






        }

        sqr.onmouseover = function () {
            sqr.classList.add("hover");
        }

        sqr.onmouseleave = function () {
            sqr.classList.remove("hover");
        }



    });

    bton.addEventListener('click', (event) => {
        squares.forEach((sq) => sq.innerHTML = "");
    })
});