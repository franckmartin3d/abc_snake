//Setup canvas
var canvas = document.getElementById('game-window');
var ctx = canvas.getContext('2d');
var fps = 5;

var canvasActiveWord = document.getElementById('currentWord');
var ctxActiveWord = canvasActiveWord.getContext('2d');

var canvasNextNumber = document.getElementById('number');
var ctxNextNumber = canvasNextNumber.getContext('2d');

var canvasWordList = document.getElementById('wordList');
var ctxWordList = canvasWordList.getContext('2d');

var canvasNextLetter = document.getElementById('next');
var ctxNextLetter = canvasNextLetter.getContext('2d');

//setup instance
let grid = 45; // also size of icons

let apple = new Apple(0, false);
let alphabet = new Alphabet();
let snake = new Snake(400, 400, 1, 0, grid, grid, 15, alphabet);




// Game state


//New Gameloop
function gameRun() {
    setTimeout(function () {

        //Check if game is over
       if  (alphabet.isWinning(ctx)){
            winning();
       }
       else if (snake.collision()){
           lost();
       }
       else{
                //Update apples
                apple.update(snake, alphabet, ctx);

                //updateAlphabet();
                alphabet.update(snake.children, apple);
        
                //update player
              
                snake.move();
                snake.collision();
        
                //render()
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                snake.draw(ctx, alphabet);
                apple.draw(ctx, alphabet);
                alphabet.drawActiveWord(ctxActiveWord);
                alphabet.drawNumberLetter(ctxNextNumber);
                alphabet.drawWordList(ctxWordList);
                alphabet.drawNextLetter(ctxNextLetter);

       }

        requestAnimationFrame(gameRun);
    }, 400);
}

function winning(){
    // function when game is won.
       
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = "40px Georgia";
        ctx.fillText("You Are A Winner!", (canvas.width/2) - 200, canvas.height/2);
    // }
}


function lost(){
    // function when game is won.
       
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = "40px Georgia";
        ctx.fillText("You Lost", (canvas.width/2) - 200, canvas.height/2);
    // }
}

function start(){
       // Start game when pressing space

       document.addEventListener('keydown', event => {
        // up
        switch (event.keyCode) {
            // move up
            case 32:
                console.log('space is pressed');
                gameRun();
                break;



        }
    });

       ctx.clearRect(0, 0, canvas.width, canvas.height);
       ctx.font = "40px Georgia";
       ctx.fillText("Press space", (canvas.width/2) - 200, canvas.height/2);

}
start();