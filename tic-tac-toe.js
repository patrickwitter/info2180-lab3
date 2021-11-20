
window.addEventListener('load', (e) => {

    let Oselected = 1
    let Xselected = 0;
    let Gamestate = -1;


    let squares = document.querySelectorAll("#board > div");
    let bton = document.querySelector(".btn");

    let status = document.getElementById("status");
    let defStatus = status.innerHTML;
    var boardStatus = Array(9).fill(0);
    let selectedboard = 0;
    let gameOver = false;


    squares.forEach((sqr) => {
        sqr.classList.add("square");
        sqr.innerHTML = "<p></p>";

    });



    squares.forEach((sqr, index) => {
        sqr.onclick = (e) => {
            if (sqr.innerHTML == "<p></p>" && !gameOver) {
                Gamestate = Math.floor(Math.random() * 2); // Randomly assign 0:X or 1:O

                if (Gamestate == Oselected) {
                    // sqr.classList.remove("O");
                    sqr.classList.add("O");
                    sqr.innerHTML = 'O';
                    Gamestate = Xselected;
                    boardStatus[index] = "O"
                    // console.log(`Gamestate: Oselected ${Gamestate}`);
                    selectedboard++

                }
                else {
                    // sqr.classList.remove("X");
                    sqr.classList.add("X");
                    sqr.innerHTML = 'X';
                    Gamestate = Oselected;
                    boardStatus[index] = "X"
                    // console.log(`Gamestate: Xselected ${Gamestate}`);
                    selectedboard++
                }
            }

            if (selectedboard >= 3) {
                let top = boardStatus[0] + boardStatus[1] + boardStatus[2];
                let middle = boardStatus[3] + boardStatus[4] + boardStatus[5];
                let bottom = boardStatus[6] + boardStatus[7] + boardStatus[8];

                console.log(`top: ${top} \ntop: ${middle} \ntop: ${bottom} \n`);

                if (top == "XXX" || middle == "XXX" || bottom == "XXX") {
                    console.log(`top: ${top} middle: ${middle} bottom: ${bottom}`);
                    status.innerHTML = "Congratulations! X is the Winner!";
                    status.className = "you-won";
                    gameOver = true;
                }
                if (top == "OOO" || middle == "OOO" || bottom == "OOO") {
                    status.innerHTML = "Congratulations! O is the Winner!";
                    status.className = "you-won";
                    gameOver = true;
                }
                if (selectedboard == 9) {
                    status.innerHTML = "Congratulations! X and O are the Winners!";
                    status.className = "you-won";
                    gameOver = true;
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
        // console.log(boardStatus);
        boardStatus = Array(9).fill(0);
        gameOver = false;
        status.innerHTML = defStatus;
        status.className = "";
        selectedboard = 0;
    });


});