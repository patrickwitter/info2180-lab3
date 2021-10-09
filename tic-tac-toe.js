
window.addEventListener('load', (e) => {

    let Oselected = 1
    let Xselected = 0;
    let Unselected = -1;
    let Gamestate = Unselected;


    let squares = document.querySelectorAll("#board > div");
    let bton = document.querySelector(".btn");

    let status = document.getElementById("status");
    var boardStatus = Array(9).fill(0);
    let selectedboard = 0;

    squares.forEach((sqr) => {
        sqr.classList.add("square");
        sqr.innerHTML = "<p></p>";

    });



    squares.forEach((sqr, index) => {
        sqr.onclick = (e) => {
            if (sqr.innerHTML == "<p></p>") {
                Gamestate = Math.floor(Math.random() * 0);

                if (Gamestate == Unselected || Gamestate == Oselected) {
                    sqr.classList.remove("O");
                    sqr.classList.add("X");
                    sqr.innerHTML = 'X';
                    Gamestate = Xselected;
                    boardStatus[index] = "X"
                    console.log(`Gamestate: Xselected ${Gamestate}`);
                    selectedboard++

                }
                else {
                    sqr.classList.remove("X");
                    sqr.classList.add("O");
                    sqr.innerHTML = 'O';
                    Gamestate = Oselected;
                    boardStatus[index] = "O"
                    console.log(`Gamestate: Oselected ${Gamestate}`);
                    selectedboard++
                }
            }

            if (selectedboard >= 3) {
                let top = boardStatus[0] + boardStatus[1] + boardStatus[2];
                let middle = boardStatus[3] + boardStatus[4] + boardStatus[5];
                let bottom = boardStatus[6] + boardStatus[7] + boardStatus[8];

                console.log(`top: ${top} \ntop: ${middle} \ntop: ${bottom} \n`);

                if (top == "XXX" || middle == "XXX" || bottom == "XXX") {
                    status.innerHTML = "Congratulations! X is the Winner!";
                    status.className = "you-won";
                }
                if (top == "OOO" || middle == "OOO" || bottom == "OOO") {
                    status.innerHTML = "Congratulations! O is the Winner!";
                    status.className = "you-won";
                }
            }
        }

        sqr.onmouseover = function (e) {

            sqr.classList.add("hover");
        }

        sqr.onmouseleave = function () {
            sqr.classList.remove("hover");
        }

    });


    bton.addEventListener('click', (event) => {
        squares.forEach((sq) => sq.innerHTML = "<p></p>");
        console.log(boardStatus);
        boardStatus = Array(9).fill(0);
    });


});