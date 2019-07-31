//Setup canvas
var canvas = document.getElementById('game-window');
var ctx = canvas.getContext('2d');
var fps = 60;

var canvasActiveWord = document.getElementById('currentWord');
var ctxActiveWord = canvasActiveWord.getContext('2d');

var canvasNextNumber = document.getElementById('number');
var ctxNextNumber = canvasNextNumber.getContext('2d');

var canvasWordList = document.getElementById('wordList');
var ctxWordList = canvasWordList.getContext('2d');

var canvasNextLetter = document.getElementById('next');
var ctxNextLetter = canvasNextLetter.getContext('2d');

//setup instance
let grid = 60; // not sure where to put it

let apple = new Apple(0, false);
let alphabet = new Alphabet(['apple', 'bubble'], 'apple', [1], 'test');
let snake = new Snake(400, 400, 1, 0, grid, grid, 15, 0, alphabet);

//New Gameloop
function gameloop() {
    setTimeout(function () {

        snake.input();

        //Update apples
        apple.update(snake, alphabet, ctx);

        //updateAlphabet();
        alphabet.update(snake.children, apple);

        //update player
        snake.define(alphabet)
        snake.movement();

        //render()
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        snake.draw(ctx);
        apple.draw(ctx, alphabet);
        alphabet.drawActiveWord(ctxActiveWord);
        alphabet.drawNumberLetter(ctxNextNumber);
        alphabet.drawWordList(ctxWordList);
        alphabet.drawNextLetter(ctxNextLetter);



        requestAnimationFrame(gameloop);
    }, 1000 / fps);
}
gameloop();